import { FC } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

const renderTrackVertical = ({ style, ...ownProps }) => (
  <div
    {...ownProps}
    className="scrollTrackVertical"
    style={{
      ...style,
      backgroundColor: '#E5E5E5',
      right: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px'
    }}
  />
)

const renderThumbVertical = ({ style, ...ownProps }) => (
  <div
    {...ownProps}
    className="scrollThumbVertical"
    style={{
      ...style,
      borderRadius: '4px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
      backgroundColor: '#9A9A9A'
    }}
  />
)

interface IScrollbarProps {
  style?: { [key: string]: string | number }
}

const Scrollbar: FC<IScrollbarProps> = (props) => {
  const { children, style } = props
  return (
    <Scrollbars
      style={style}
      hideTracksWhenNotNeeded
      autoHide
      autoHideTimeout={400}
      renderTrackVertical={renderTrackVertical}
      renderThumbVertical={renderThumbVertical}
    >
      {children}
    </Scrollbars>
  )
}

export { Scrollbar }
