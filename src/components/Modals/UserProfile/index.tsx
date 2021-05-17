import { FC, useState } from 'react'
import { Button, Spin, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { userService, UserDTO } from 'services/user'
import { PhotoUploader } from 'components/PhotoUploader'
import { useActions } from 'hooks/useActions'
import { changeUserProfileModalState } from 'modules/Modals/actions'
import { userUpdatePhoto } from 'modules/Auth/actions'

interface IUserProfileProps {}

const UserProfile: FC<IUserProfileProps> = () => {
  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState('')
  const { id, name, email, photo: preloadedPhoto } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO
  const userProfile = useShallowEqualSelector(
    (state) => state.modals.userProfile
  ) as any

  const [
    dispatchUserUpdatePhoto,
    dispatchChangeUserProfileModalState
  ] = useActions([userUpdatePhoto, changeUserProfileModalState], null)

  const onSaveChanges = async () => {
    if (photo === '') {
      dispatchChangeUserProfileModalState(false)
      return
    }

    try {
      setLoading(true)

      const { type, message: serverMessage } = await userService.changePhoto({
        id,
        photo
      })

      if (serverMessage) {
        if (type === 'error') {
          setLoading(false)
          return
        }
      }

      setLoading(false)
      dispatchUserUpdatePhoto(photo)
      dispatchChangeUserProfileModalState(false)
    } catch (error) {
      setLoading(false)
      message.error(error.message)
    }
  }

  return (
    <ModalWindow
      title="Профиль"
      visible={userProfile}
      onCancel={() => dispatchChangeUserProfileModalState(false)}
      onOk={() => dispatchChangeUserProfileModalState(false)}
    >
      <PhotoUploader
        preloadedPhoto={preloadedPhoto}
        onChangePhoto={(imageUrl) => setPhoto(imageUrl)}
        onRemovePhoto={() => setPhoto(null)}
      />
      <p>Имя: {name}</p>
      <p>Email: {email}</p>

      <div className="form-footer">
        {loading && (
          <Spin
            className="center"
            indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
            delay={500}
          />
        )}
        <Button
          key="back"
          onClick={() => dispatchChangeUserProfileModalState(false)}
          disabled={loading}
        >
          Отмена
        </Button>
        <Button type="primary" disabled={loading} onClick={onSaveChanges}>
          Сохранить
        </Button>
      </div>
    </ModalWindow>
  )
}

export { UserProfile }
