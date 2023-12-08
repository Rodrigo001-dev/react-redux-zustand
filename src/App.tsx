import './styles/global.css'

import { Provider as ReduxProvider } from 'react-redux'

import { Player } from './components/pages/Player';

import { store } from './store';

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}