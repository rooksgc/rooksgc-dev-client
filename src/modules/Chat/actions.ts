import { createAction } from 'redux-actions'

/** Добавление нового канала */
export const addChannel: any = createAction('CHAT/ADD_CHANNEL')
/** Удаление канала */
export const removeChannel: any = createAction('CHAT/REMOVE_CHANNEL')
/** Установить активный канал чата (id, label) */
export const setActiveChannel: any = createAction('CHAT/SET_ACTIVE_CHANNEL')
/** Начальное состояние каналов на момент захода пользователя */
export const initChannelsData: any = createAction('CHAT/INIT_CHANNELS_DATA')
/** Дополнить данные о канале */
export const populateChannel: any = createAction('CHAT/POPULATE_CHANNEL')
/** Добавить пользователя в канал */
export const addChannelMember: any = createAction('CHAT/ADD_CHANNEL_MEMBER')
/** Удаление пользователя из канала (broadcast) */
export const removeChannelMember: any = createAction(
  'CHAT/REMOVE_CHANNEL_MEMBER'
)

/** Добавление нового контакта */
export const addContact: any = createAction('CHAT/ADD_CONTACT')
/** Удаление контакта */
export const removeContact: any = createAction('CHAT/REMOVE_CONTACT')
/** Начальное состояние контактов на момент захода пользователя */
export const initContactsData: any = createAction('CHAT/INIT_CONTACTS_DATA')
/** Отправить сообщение в чат канала */
export const sendChannelMessage: any = createAction('CHAT/SEND_CHANNEL_MESSAGE')
/** Отправить приватное сообщение пользователю */
export const sendContactMessage: any = createAction('CHAT/SEND_CONTACT_MESSAGE')
