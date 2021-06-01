import { FC, useEffect } from 'react'
import {
  Button,
  Avatar,
  Typography,
  Row,
  Col,
  Divider,
  List,
  Popconfirm
} from 'antd'
import {
  ClockCircleTwoTone,
  PlusCircleOutlined,
  StarOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { userService, UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import {
  changeChannelInfoModalState,
  changeAddToChannelModalState
} from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'
import { userRemoveChannel } from 'modules/Auth/actions'
import {
  populateChannel,
  removeChannel,
  setActiveChannel
} from 'modules/Chat/actions'
import { Scrollbar } from 'containers/Scrollbar'
import { chatService } from 'services/chat'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'

const { Title } = Typography

interface IChannelInfoProps {
  activeChannel: IActiveChannel
}

const ChannelInfo: FC<IChannelInfoProps> = (props) => {
  const { activeChannel } = props
  const [
    dispatchChangeChannelInfoModalState,
    dispatchChangeAddToChannelModalState,
    disaptchPopulateChannel,
    dispatchRemoveChannel,
    dispatchUserRemoveChannel,
    dispatchSetActiveChannel
  ] = useActions(
    [
      changeChannelInfoModalState,
      changeAddToChannelModalState,
      populateChannel,
      removeChannel,
      userRemoveChannel,
      setActiveChannel
    ],
    null
  )

  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const channels = useShallowEqualSelector(
    (state) => state.chat.channels
  ) as UserDTO

  const channelInfo = useShallowEqualSelector(
    (state) => state.modals.channelInfo
  ) as any

  const channel = activeChannel && channels && channels[activeChannel.id]

  useEffect(() => {
    if (!channel || channel.populated) return

    const populateChannelRequest = async () => {
      const { members: ids, ownerId } = channel
      const { data } = await userService.populateUsers({
        ids: JSON.stringify(ids)
      })
      const owner = data.find((member) => member.id === ownerId)
      disaptchPopulateChannel({ id: activeChannel?.id, members: data, owner })
    }

    populateChannelRequest()
  }, [channel, disaptchPopulateChannel, activeChannel?.id])

  if (!channel) return null

  const { name, members, photo } = channel

  const addToChannelHandler = () => {
    dispatchChangeAddToChannelModalState(true)
  }

  const leaveChannelHandler = async () => {
    try {
      const { type, message: serverMessage } = await chatService.leaveChannel({
        channelId: activeChannel.id,
        userId: user.id
      })

      if (serverMessage) {
        if (type === 'success') {
          notify.success(serverMessage)
        }
        if (type === 'error') {
          notify.error(serverMessage)
          return
        }
      }

      socketService.leaveChannel({
        channelId: activeChannel.id,
        channelName: activeChannel.name,
        userId: user.id,
        userName: user.name
      })

      dispatchRemoveChannel(activeChannel.id)
      dispatchUserRemoveChannel(activeChannel.id)
      dispatchSetActiveChannel(null)
      dispatchChangeChannelInfoModalState(false)
    } catch (error) {
      notify.error(error.message)
    }
  }

  return (
    <ModalWindow
      title="Информация о канале"
      visible={channelInfo}
      centered={false}
      style={{ top: '20px' }}
      onCancel={() => dispatchChangeChannelInfoModalState(false)}
      onOk={() => dispatchChangeChannelInfoModalState(false)}
    >
      <Row align="middle">
        <Col flex="128px">
          <Avatar size={128} src={photo} />
        </Col>
        <Col flex="300px" className="channel-info__title">
          <Title level={4}>{name}</Title>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Scrollbar style={{ height: '300px' }}>
            <List
              header={
                <>
                  <Title level={5}>
                    {members.length} участников
                    {channel?.ownerId === user.id && (
                      <PlusCircleOutlined
                        className="add-to-channel"
                        title="Добавить"
                        onClick={addToChannelHandler}
                      />
                    )}
                  </Title>
                </>
              }
              itemLayout="horizontal"
              dataSource={members as UserDTO[]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      item.photo ? (
                        <Avatar
                          size={50}
                          className="channel-photo"
                          src={item.photo}
                        />
                      ) : (
                        <Avatar
                          size={50}
                          className="channel-photo"
                          icon={
                            <ClockCircleTwoTone style={{ color: '#fefefe' }} />
                          }
                        />
                      )
                    }
                    title={item.name}
                    description={item.email}
                  />
                  {item.id === channel?.ownerId && (
                    <StarOutlined title="Владелец" />
                  )}
                </List.Item>
              )}
            />
          </Scrollbar>
        </Col>
      </Row>
      <Divider />
      <div className="form-footer">
        <Popconfirm
          title="Вы уверены?"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          okText="Да"
          cancelText="Нет"
          onConfirm={leaveChannelHandler}
        >
          <Button block danger type="default">
            Покинуть канал
          </Button>
        </Popconfirm>
      </div>
    </ModalWindow>
  )
}

export { ChannelInfo }
