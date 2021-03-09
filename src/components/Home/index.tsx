import { FC } from 'react'

const Home: FC = () => (
  <div className="flex-center flex-column">
    <h1>Коротко о Svelte</h1>
    <img
      src="/images/svelte.png"
      style={{ width: 700, maxWidth: '100%' }}
      alt="Коротко о Svelte"
    />
  </div>
)

export default Home
