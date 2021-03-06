import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import  thunk from 'redux-thunk'

import reducer from './reducers/reducer'
import Info from './components/Info';
import UserAgent from './components/UserAgent';

const store = createStore(
  reducer,
  applyMiddleware(thunk,logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <Info />
          <UserAgent />
        </Container>
      </Provider>
    );
  }
}

export default App
