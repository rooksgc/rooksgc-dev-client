import { FC, useState } from 'react'
import { Form, Input, message, Upload, Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop'
import { UserDTO } from 'services/auth'
import { useActions } from 'hooks/useActions'
import { setActiveChannel, addChannel } from 'modules/Chat/actions'
import { channelService } from 'services/channel'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { WS } from 'services/socket'

// TODO move Upload image to separate component

interface FormValues {
  name: string
  description?: string
  photo?: string
}

interface ICreateChannelProps {
  onCancel?: () => any
  onOk?: () => any
}

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('Допустимые форматы файлов: JPG или PNG!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Размер изображения не должен превышать 2Мб!')
  }
  return isJpgOrPng && isLt2M
}

const getBase64 = async (file): Promise<string> => {
  let src = file.url
  const resizeWidth = 300

  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(file.originFileObj)
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target.result as string
        img.onload = (el: any) => {
          const elem = document.createElement('canvas')
          const scaleFactor = resizeWidth / el.target.width
          elem.width = resizeWidth
          elem.height = el.target.height * scaleFactor
          const ctx = elem.getContext('2d')
          ctx.drawImage(el.target, 0, 0, elem.width, elem.height)
          const srcEncoded = ctx.canvas.toDataURL('image/jpeg', 0.3)
          resolve(srcEncoded)
        }
      }
    })
  }
  return src
}

const onPreview = async (file) => {
  const src = await getBase64(file)
  const image = new Image()
  image.src = src
  const imgWindow = window.open(src)
  imgWindow.document.write(image.outerHTML)
}

const CreateChannel: FC<ICreateChannelProps> = (props) => {
  const { onCancel, onOk } = props
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [dispatchActiveChannel, dispatchAddChannel] = useActions(
    [setActiveChannel, addChannel],
    null
  )

  const onFinish = async (values: FormValues) => {
    try {
      const { name, description } = values
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data
      } = await channelService.createChannel({
        name,
        description,
        photo,
        ownerId: user.id
      })

      if (serverMessage) {
        if (type === 'success') {
          message.success(serverMessage)
        }
        if (type === 'error') {
          message.error(serverMessage)
          setLoading(false)
          return
        }
      }

      const activeChannelPayload = { id: data.channelId, name, type: 'channel' }

      dispatchAddChannel({
        ...activeChannelPayload,
        ownerId: user.id,
        photo,
        members: [user.id]
      })
      dispatchActiveChannel(activeChannelPayload)
      WS.subscribeToChannel(data.channelId)

      setLoading(false)
      onOk()
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }

  const [fileList, setFileList] = useState([])

  const onChange = async ({ fileList: newFileList }) => {
    const file = newFileList[0]
    if (file?.status === 'done') {
      const imageUrl = await getBase64(file)
      setPhoto(imageUrl)
    }

    setFileList(newFileList)
  }

  const customRequest = (options) => {
    const { onSuccess, file } = options
    onSuccess(null, file)
  }

  const resetForm = () => {
    setPhoto(null)
    setFileList([])
    form.resetFields()
    onCancel()
  }

  return (
    <>
      <div className="upload-channel-photo">
        <ImgCrop
          rotate
          shape="round"
          modalTitle="Редактировать изображение"
          modalOk="Применить"
          modalCancel="Отмена"
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            beforeUpload={beforeUpload}
            onPreview={onPreview}
            customRequest={customRequest}
          >
            {!fileList.length && 'Выбрать фото'}
          </Upload>
        </ImgCrop>
      </div>
      <Form
        form={form}
        name="createChannel"
        className="create-channel-form"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            { required: true, message: 'Введите название канала' },
            { max: 20, message: 'Не более 20 символов' }
          ]}
        >
          <Input placeholder="Название канала" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ max: 50, message: 'Не более 50 символов' }]}
        >
          <Input placeholder="Описание (не обязательно)" type="textarea" />
        </Form.Item>
        <div className="form-footer">
          {loading && (
            <Spin
              className="center"
              indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
              delay={500}
            />
          )}
          <Button key="back" onClick={resetForm} disabled={loading}>
            Отмена
          </Button>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            disabled={loading}
          >
            Создать
          </Button>
        </div>
      </Form>
    </>
  )
}

export { CreateChannel }
