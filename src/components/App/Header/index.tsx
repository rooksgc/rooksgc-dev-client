import { FC, KeyboardEvent, useRef } from 'react'
import { Layout, Typography } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { MainMenu } from 'components/MainMenu'
import { UserMenu } from 'components/UserMenu'
import { PrivateContainer } from 'containers/Private'
import { UserDTO } from 'services/user'
import { ContactInfo } from 'components/Modals/ContactInfo'
import { ChannelInfo } from 'components/Modals/ChannelInfo'
import { useActions } from 'hooks/useActions'
import {
  changeContactInfoModalState,
  changeChannelInfoModalState
} from 'modules/Modals/actions'

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
  ) as any

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
          5 участников
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
      </PrivateContainer>

      <div className="header-menu">
        <MainMenu />
        <PrivateContainer>
          <span className="header-username">{user?.name}</span>
          <UserMenu />
        </PrivateContainer>
      </div>
    </AntHeader>
  )
}

export { Header }
