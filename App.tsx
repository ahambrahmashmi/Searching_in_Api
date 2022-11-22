import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MySearching from './src/screens/MySearching'
store
const App = () => {
  return (
    <Provider store = {store}>
    <MySearching/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})