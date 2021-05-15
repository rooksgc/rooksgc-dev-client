import { createAction } from 'redux-actions'

/** Добавление нового канала */
export const addChannel: any = createAction('CHAT/ADD_CHANNEL')
/** Установить активный канал чата (id, label) */
export const setActiveChannel: any = createAction('CHAT/SET_ACTIVE_CHANNEL')
/** Начальное состояние каналов на момент захода пользователя */
export const initChannelsData: any = createAction('CHAT/INIT_CHANNELS_DATA')

/** Добавление нового контакта */
export const addContact: any = createAction('CHAT/ADD_CONTACT')
/** Начальное состояние контактов на момент захода пользователя */
export const initContactsData: any = createAction('CHAT/INIT_CONTACTS_DATA')
/** Отправить сообщение в чат канала */
export const sendChannelMessage: any = createAction('CHAT/SEND_CHANNEL_MESSAGE')
/** Отправить приватное сообщение пользователю */
export const sendContactMessage: any = createAction('CHAT/SEND_CONTACT_MESSAGE')
