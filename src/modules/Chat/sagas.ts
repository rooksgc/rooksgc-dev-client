import { takeLatest, fork } from 'redux-saga/effects'
import { sendChannelMessage } from './actions'

/** Отправка сообщения в канал */
// eslint-disable-next-line require-yield
export function* addChannelMessageFlow(payload: any) {
  // eslint-disable-next-line no-console
  console.log(payload)
}
export function* addChannelMessageWatcher() {
  yield takeLatest(sendChannelMessage, addChannelMessageFlow)
}

export default function* generator() {
  yield fork(addChannelMessageWatcher)
}
