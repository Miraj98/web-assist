import React, { Component } from 'react'
import { Grommet, Box } from 'grommet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store, { persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Feed from './components/Feed/Feed'
import CreatePost from './components/CreatePost/CreatePost'
import Auth from './components/Auth/Auth'
import Post from './components/Post/Post'
import AppBar from './components/AppHeader/AppBar'


const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Grommet theme={theme} full>
                <Box fill>
                    <Provider store={store}>
                        <PersistGate persistor={persistor} loading={null}>
                            <AppBar/>
                            <Switch>
                                <Route path="/" exact component={Auth} />
                                <Route path="/feed" exact component={Feed} />
                                <Route path="/createpost" exact component={CreatePost} />
                                <Route path="/post" exact component={Post} />
                            </Switch>
                        </PersistGate>
                    </Provider>
                </Box>
            </Grommet>
        </BrowserRouter>
    )
  }
}

export default App
