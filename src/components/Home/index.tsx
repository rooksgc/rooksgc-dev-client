import { FC } from 'react'
import svelte from '../../images/svelte.png'

const Home: FC = () => (
  <div className="flex-center flex-column">
    <h1>Коротко о Svelte</h1>
    <img
      src={svelte}
      style={{ width: 700, maxWidth: '100%' }}
      alt="Коротко о Svelte"
    />
  </div>
)

export default Home
