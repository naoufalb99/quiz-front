import { Provider as ReduxProvider } from 'react-redux'
import Routes from './core/Routes'
import store from './store'

function App () {
  return (
    <ReduxProvider store={store}>
      <Routes />
    </ReduxProvider>
  )
}

export default App
