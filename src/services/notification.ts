import { notification } from 'antd'

enum NotificationPlacement {
  TOP_LEFT = 'topLeft',
  TOP_RIGHT = 'topRight',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight'
}

// @todo refactor
const notify = {
  info: (message: string, description: string = ''): void =>
    notification.info({
      message,
      description,
      placement: NotificationPlacement.BOTTOM_RIGHT
    }),
  success: (message: string, description: string = ''): void =>
    notification.success({
      message,
      description,
      placement: NotificationPlacement.BOTTOM_RIGHT
    }),
  warning: (message: string, description: string = ''): void =>
    notification.warning({
      message,
      description,
      placement: NotificationPlacement.BOTTOM_RIGHT
    }),
  error: (message: string, description: string = ''): void =>
    notification.error({
      message,
      description,
      placement: NotificationPlacement.BOTTOM_RIGHT
    })
}

export { notify }
