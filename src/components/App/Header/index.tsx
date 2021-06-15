import { FC, KeyboardEvent, useRef } from 'react'
import { Layout, Typography } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { MainMenu } from 'components/App/Header/MainMenu'
import { UserMenu } from 'components/App/Header/UserMenu'
import { PrivateContainer } from 'containers/Private'
import { UserDTO } from 'services/user'
import { ContactInfo } from 'components/Modals/ContactInfo'
import { ChannelInfo } from 'components/Modals/ChannelInfo'
import { AddToChannel } from 'components/Modals/AddToChannel'
import { useActions } from 'hooks/useActions'
import {
  changeContactInfoModalState,
  changeChannelInfoModalState
} from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'

const { Text } = Typography

interface IHeaderProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
}

const { Header: AntHeader } = Layout

const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const [
    dispatchChangeContactInfoModalState,
    dispatchChangeChannelInfoModalState
  ] = useActions(
    [changeContactInfoModalState, changeChannelInfoModalState],
    null
  )

  const chatInfoRef = useRef(null)
  const activeChannel = useShallowEqualSelector(
    (state) => state.chat.activeChannel
  ) as IActiveChannel

  const { onSidebarToggle, sidebarCollapsed } = props

  const onTriggerClick = () => {
    onSidebarToggle(!sidebarCollapsed)
  }

  const menuTrigger = sidebarCollapsed ? (
    <MenuUnfoldOutlined
      style={{ fontSize: '20px', padding: '22px' }}
      className="trigger"
      onClick={onTriggerClick}
      label="Свернуть"
    />
  ) : (
    <MenuFoldOutlined
      style={{ fontSize: '20px', padding: '22px' }}
      className="trigger"
      onClick={onTriggerClick}
    />
  )

  const openActiveChatInfo = () => {
    if (activeChannel?.type === 'contact') {
      dispatchChangeContactInfoModalState(true)
    }
    if (activeChannel?.type === 'channel') {
      dispatchChangeChannelInfoModalState(true)
    }
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      chatInfoRef.current.focus()
    }
  }

  let membersCount = 0
  const channels = useShallowEqualSelector(
    (state) => state.chat.channels
  ) as any

  if (activeChannel?.type === 'channel') {
    const members =
      activeChannel && channels && channels[activeChannel.id]?.members
    membersCount = members && Object.keys(members).length
  }

  const activeChat = activeChannel && (
    <div
      className="active-channel"
      onClick={openActiveChatInfo}
      onKeyDown={onKeyDownHandler}
      ref={chatInfoRef}
      role="button"
      tabIndex={0}
    >
      <Text className="active-channel-text">{activeChannel.name}</Text>
      {activeChannel.type === 'channel' ? (
        <Text className="active-channel-text" type="secondary">
          {membersCount} участников
        </Text>
      ) : (
        <Text className="active-channel-text" type="secondary">
          был(а) 1 час назад
        </Text>
      )}
    </div>
  )

  return (
    <AntHeader className="header background-white">
      <PrivateContainer>
        {menuTrigger}
        {activeChat}
        <ContactInfo activeContact={activeChannel} />
        <ChannelInfo activeChannel={activeChannel} />
        <AddToChannel activeChannel={activeChannel} />
      </PrivateContainer>

      <div className="header-menu">
        {!user && <MainMenu />}
        <PrivateContainer>
          <span className="header-username">{user?.name}</span>
          <UserMenu />
        </PrivateContainer>
      </div>
    </AntHeader>
  )
}

export { Header }
