import { createAction } from 'redux-actions'

/** Получить активную комнату чата */
export const setActiveChannelId: any = createAction(
  'CHAT/SET_ACTIVE_CHANNEL_ID'
)
/** Начальное состояние каналов на момент захода пользователя */
export const initChannelsData: any = createAction('CHAT/INIT_CHANNELS_DATA')
/** Добавить сообщение в чат канала */
export const addChannelMessage: any = createAction('CHAT/ADD_CHANNEL_MESSAGE')
