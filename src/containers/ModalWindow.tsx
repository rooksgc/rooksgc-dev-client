import { FC, Component, ReactElement } from 'react'
import { Modal } from 'antd'

interface IModalWindowProps {
  title?: string
  visible?: boolean
  centered?: boolean
  onOk?: () => any | null
  onCancel?: () => any | null
  afterClose?: () => any | null
  destroyOnClose?: boolean
  footer?: Component[] | FC[] | ReactElement[] | null
  style?: object | null
}

const ModalWindow: FC<IModalWindowProps> = (props) => {
  const {
    children,
    title = '',
    visible = false,
    onOk = null,
    onCancel = null,
    afterClose = null,
    destroyOnClose = true,
    footer = null,
    style = null
  } = props

  return (
    <Modal
      centered
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      afterClose={afterClose}
      destroyOnClose={destroyOnClose}
      footer={footer}
      style={style}
    >
      {children}
    </Modal>
  )
}

export { ModalWindow }
