import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
// import Button from '@popui/popui-rn/components/button/index';
import ToastExample from '@popui/popui-rn/components/toast/demo/basic'
// import IconExample from '@popui/popui-rn/components/weui-icon/demo/basic';
import ResourceLoader from '../common/ResourceLoader'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* <IconExample /> */}
            <ToastExample />
          </ScrollView>
        </SafeAreaView>
      </ResourceLoader>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
