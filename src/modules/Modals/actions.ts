import { createAction } from 'redux-actions'

/** Модальное окно создания канала */
export const changeCreateChannelModalState: any = createAction(
  'MODALS/CHANGE_CREATE_CHANNEL_MODAL_STATE'
)
/** Модальное окно профиля пользователя */
export const changeUserProfileModalState: any = createAction(
  'MODALS/CHANGE_USER_PROFILE_MODAL_STATE'
)
/** Модальное окно добавления контакта */
export const changeAddContactModalState: any = createAction(
  'MODALS/CHANGE_ADD_CONTACT_MODAL_STATE'
)

/** Модальное окно информации о контакте */
export const changeContactInfoModalState: any = createAction(
  'MODALS/CHANGE_CONTACT_INFO_MODAL_STATE'
)

/** Модальное окно информации о канале */
export const changeChannelInfoModalState: any = createAction(
  'MODALS/CHANGE_CHANNEL_INFO_MODAL_STATE'
)

/** Модальное окно добавления пользователя в канал */
export const changeAddToChannelModalState: any = createAction(
  'MODALS/CHANGE_ADD_TO_CHANNEL_MODAL_STATE'
)
