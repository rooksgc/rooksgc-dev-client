import { createAction } from 'redux-actions'

/** Установить активный канал чата (id, label) */
export const setActiveChannel: any = createAction('CHAT/SET_ACTIVE_CHANNEL')
/** Начальное состояние каналов на момент захода пользователя */
export const initChannelsData: any = createAction('CHAT/INIT_CHANNELS_DATA')
/** Начальное состояние контактов на момент захода пользователя */
export const initContactsData: any = createAction('CHAT/INIT_CONTACTS_DATA')
/** Добавить сообщение в чат канала */
export const sendChannelMessage: any = createAction('CHAT/SEND_CHANNEL_MESSAGE')
/** Добавить приватное сообщение пользователю */
export const sendContactMessage: any = createAction('CHAT/SEND_CONTACT_MESSAGE')
