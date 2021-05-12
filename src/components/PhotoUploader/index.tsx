import { FC, useState } from 'react'
import { message, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

interface IPhotoUploaderProps {
  /** base64 photo url */
  preloadedPhoto?: string | null
  onChangePhoto?: (imageUrl: string) => void
  onRemovePhoto?: () => void
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

const PhotoUploader: FC<IPhotoUploaderProps> = (props) => {
  const { preloadedPhoto, onChangePhoto, onRemovePhoto } = props
  const initialPhoto = preloadedPhoto ? [{ url: preloadedPhoto }] : []
  const [fileList, setFileList] = useState(initialPhoto)

  const customRequest = (options) => {
    const { onSuccess, file } = options
    onSuccess(null, file)
  }

  const onChange = async ({ fileList: newFileList }) => {
    const file = newFileList[0]
    if (file?.status === 'done') {
      const imageUrl = await getBase64(file)
      onChangePhoto(imageUrl)
    }

    if (!file) {
      onRemovePhoto()
    }

    setFileList(newFileList)
  }

  return (
    <div className="photo-uploader">
      <ImgCrop
        rotate
        shape="round"
        modalTitle="Редактировать изображение"
        modalOk="Применить"
        modalCancel="Отмена"
      >
        <Upload
          listType="picture-card"
          fileList={fileList as any}
          onChange={onChange}
          beforeUpload={beforeUpload}
          onPreview={onPreview}
          customRequest={customRequest}
        >
          {!fileList.length && 'Выбрать фото'}
        </Upload>
      </ImgCrop>
    </div>
  )
}

export { PhotoUploader }
