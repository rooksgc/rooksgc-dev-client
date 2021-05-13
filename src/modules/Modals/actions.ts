import { createAction } from 'redux-actions'

/** Модальное окно создания канала */
export const changeCreateChannelModalState: any = createAction(
  'MODALS/CHANGE_CREATE_CHANNEL_MODAL_STATE'
)

/** Модальное окно профиля пользователя */
export const changeUserProfileModalState: any = createAction(
  'MODALS/CHANGE_USER_PROFILE_MODAL_STATE'
)
