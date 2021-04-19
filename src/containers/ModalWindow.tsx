import { FC, Component, ReactElement } from 'react'
import { Modal } from 'antd'

interface IModalWindowProps {
  title?: string
  visible?: boolean
  centered?: boolean
  onOk?: () => any | null
  onCancel?: () => any | null
  footer?: Component[] | FC[] | ReactElement[] | null
}

const ModalWindow: FC<IModalWindowProps> = (props) => {
  const {
    children,
    title = '',
    visible = false,
    onOk = null,
    onCancel = null,
    footer = null
  } = props

  return (
    <Modal
      centered
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
    >
      {children}
    </Modal>
  )
}

export default ModalWindow
