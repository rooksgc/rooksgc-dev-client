import { FC, useEffect } from 'react'
import {
  Button,
  message,
  Avatar,
  Typography,
  Row,
  Col,
  Divider,
  List
} from 'antd'
import { ClockCircleTwoTone, PlusCircleOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { userService, UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import {
  changeChannelInfoModalState,
  changeAddToChannelModalState
} from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'
import { populateChannel } from 'modules/Chat/actions'

const { Title, Paragraph } = Typography

interface IChannelInfoProps {
  activeChannel: IActiveChannel
}

const ChannelInfo: FC<IChannelInfoProps> = (props) => {
  const { activeChannel } = props

  const [
    dispatchChangeChannelInfoModalState,
    dispatchChangeAddToChannelModalState,
    disaptchPopulateChannel
  ] = useActions(
    [
      changeChannelInfoModalState,
      changeAddToChannelModalState,
      populateChannel
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

  const leaveChannel = async () => {
    try {
      dispatchChangeChannelInfoModalState(false)
    } catch (error) {
      message.error(error.message)
    }
  }

  const addToChannelHandler = () => {
    dispatchChangeAddToChannelModalState(true)
  }

  return (
    <ModalWindow
      title="Информация о канале"
      visible={channelInfo}
      onCancel={() => dispatchChangeChannelInfoModalState(false)}
      onOk={() => dispatchChangeChannelInfoModalState(false)}
    >
      <Row align="middle">
        <Col flex="150px">
          <Avatar size={128} src={photo} />
        </Col>
        <Col flex="auto">
          <Title level={4}>{name}</Title>
          <Paragraph>Владелец: {channel.owner?.name}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
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
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Divider />
      <div className="form-footer">
        <Button block danger type="default" onClick={leaveChannel}>
          Покинуть канал
        </Button>
      </div>
    </ModalWindow>
  )
}

export { ChannelInfo }
