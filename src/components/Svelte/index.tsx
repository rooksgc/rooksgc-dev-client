import { FC } from 'react'
import { Image } from 'antd'
import svelte from '../../images/svelte.png'

const Svelte: FC = () => (
  <>
    <h1>Коротко о Svelte</h1>
    <Image width={700} src={svelte} />
  </>
)

export default Svelte
