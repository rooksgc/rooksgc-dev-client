import { FC, useState } from 'react'
import { Form, Input, Button, Spin, Typography } from 'antd'
import { LoadingOutlined, MailOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { UserDTO } from 'services/user'
import { chatService } from 'services/chat'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'
import { useActions } from 'hooks/useActions'
import { changeAddToChannelModalState } from 'modules/Modals/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { IActiveChannel } from 'modules/Chat/reducer'
import { addChannelMember } from 'modules/Chat/actions'

const { Text } = Typography

interface IFormValues {
  email: string
}

interface IAddToChannelProps {
  activeChannel: IActiveChannel
}

const AddToChannel: FC<IAddToChannelProps> = (props) => {
  const { activeChannel } = props
  const addToChannelModalState = useShallowEqualSelector(
    (state) => state.modals.addToChannel
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [
    dispatchChangeAddToChannelModalState,
    dispatchAddChannelMember
  ] = useActions([changeAddToChannelModalState, addChannelMember], null)

  const addToChannelHandler = async (values: IFormValues) => {
    try {
      const { email } = values
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data
      } = await chatService.addToChannel({
        channelId: activeChannel.id,
        channelName: activeChannel.name,
        email
      })

      if (serverMessage) {
        if (type === 'success') {
          notify.success(serverMessage)
        }
        if (type === 'error') {
          notify.error(serverMessage)
          setLoading(false)
          return
        }
      }

      form.resetFields()

      socketService.addToChannelRequest({
        to: data.invitedUser.id,
        inviterName: user.name,
        channel: {
          ...data.channel,
          type: 'channel',
          messages: []
        }
      })

      dispatchAddChannelMember({
        id: data.channel.id,
        member: data.invitedUser
      })

      dispatchChangeAddToChannelModalState(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      notify.error(error.message)
    }
  }

  return (
    <ModalWindow
      title="Добавить пользователя в канал"
      visible={addToChannelModalState}
      onCancel={() => dispatchChangeAddToChannelModalState(false)}
    >
      <Text>
        Введите Email пользователя, которого Вы хотели добавить в канал
      </Text>
      <Form
        form={form}
        name="addToChannel"
        className="add-to-channel-form"
        layout="vertical"
        onFinish={addToChannelHandler}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              min: 4,
              message: 'Некорректный email'
            }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
        </Form.Item>

        <div className="form-footer">
          {loading && (
            <Spin
              className="center"
              indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
              delay={500}
            />
          )}
          <Button
            key="back"
            onClick={() => dispatchChangeAddToChannelModalState(false)}
            disabled={loading}
          >
            Отмена
          </Button>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            disabled={loading}
          >
            Добавить
          </Button>
        </div>
      </Form>
    </ModalWindow>
  )
}

export { AddToChannel }
