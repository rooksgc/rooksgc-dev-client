import { FC, useState } from 'react'
import { Button, Spin, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { authService, UserDTO } from 'services/auth'
import { PhotoUploader } from 'components/PhotoUploader'
import { useActions } from 'hooks/useActions'
import { userUpdatePhoto } from 'modules/Auth/actions'

interface IUserProfileProps {
  onCancel?: () => any
  onOk?: () => any
}

const UserProfile: FC<IUserProfileProps> = (props) => {
  const { onCancel, onOk } = props
  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState('')
  const {
    id,
    name,
    email,
    photo: preloadedPhoto,
    role
  } = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [dispatchUserUpdatePhoto] = useActions([userUpdatePhoto], null)

  const onSaveChanges = async () => {
    if (photo === '') {
      onOk()
      return
    }

    try {
      setLoading(true)

      const { type, message: serverMessage } = await authService.changePhoto({
        id,
        photo
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

      setLoading(false)
      dispatchUserUpdatePhoto(photo)
      onOk()
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }

  return (
    <>
      <PhotoUploader
        preloadedPhoto={preloadedPhoto}
        onChangePhoto={(imageUrl) => setPhoto(imageUrl)}
        onRemovePhoto={() => setPhoto(null)}
      />
      <p>Имя: {name}</p>
      <p>Email: {email}</p>
      <p>Роль: {role}</p>

      <div className="form-footer">
        {loading && (
          <Spin
            className="center"
            indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
            delay={500}
          />
        )}
        <Button key="back" onClick={() => onCancel()} disabled={loading}>
          Отмена
        </Button>
        <Button type="primary" disabled={loading} onClick={onSaveChanges}>
          Сохранить
        </Button>
      </div>
    </>
  )
}

export { UserProfile }
