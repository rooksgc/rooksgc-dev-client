import { FC, useState } from 'react'
import { Form, Input, message, Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { PhotoUploader } from 'components/PhotoUploader'
import { UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import { setActiveChannel, addChannel } from 'modules/Chat/actions'
import { changeCreateChannelModalState } from 'modules/Modals/actions'
import { chatService } from 'services/chat'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { socketService } from 'services/socket'

interface IFormValues {
  name: string
  description?: string
  photo?: string
}

interface ICreateChannelProps {}

const CreateChannel: FC<ICreateChannelProps> = () => {
  const createChannel = useShallowEqualSelector(
    (state) => state.modals.createChannel
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [
    dispatchActiveChannel,
    dispatchAddChannel,
    dispatchChangeCreateChannelModalState
  ] = useActions(
    [setActiveChannel, addChannel, changeCreateChannelModalState],
    null
  )

  const onFinish = async (values: IFormValues) => {
    try {
      const { name, description } = values
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data
      } = await chatService.createChannel({
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
      socketService.subscribeToChannel(data.channelId)

      setLoading(false)
      dispatchChangeCreateChannelModalState(false)
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }

  const resetForm = () => dispatchChangeCreateChannelModalState(false)

  return (
    <ModalWindow
      title="Создать канал"
      visible={createChannel}
      onCancel={() => dispatchChangeCreateChannelModalState(false)}
    >
      <PhotoUploader onChangePhoto={(imageUrl) => setPhoto(imageUrl)} />
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
    </ModalWindow>
  )
}

export { CreateChannel }
