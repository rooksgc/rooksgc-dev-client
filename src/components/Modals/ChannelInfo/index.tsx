import { FC, useEffect } from 'react'
import { Button, message, Avatar, Typography, Row, Col, Divider } from 'antd'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { userService, UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import { changeChannelInfoModalState } from 'modules/Modals/actions'
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
    disaptchPopulateChannel
  ] = useActions([changeChannelInfoModalState, populateChannel], null)

  const channels = useShallowEqualSelector(
    (state) => state.chat.channels
  ) as UserDTO

  const channelInfo = useShallowEqualSelector(
    (state) => state.modals.channelInfo
  ) as any

  const channel = activeChannel && channels[activeChannel.id]

  useEffect(() => {
    if (!channel || channel.populated) return

    const getChannelData = async () => {
      const { members, ownerId } = channel
      const { data } = await userService.getUsersList({ members })
      const owner = data.find((member) => member.id === ownerId)
      disaptchPopulateChannel({ id: activeChannel?.id, members: data, owner })
    }

    getChannelData()
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
          <Paragraph>Участников: {members.length}</Paragraph>
          <Paragraph>Владелец: {channel.owner?.name}</Paragraph>
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
