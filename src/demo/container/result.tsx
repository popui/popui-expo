import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
// import Button from '@popui/popui-rn/components/button/index';
import ResultExample from '@popui/popui-rn/components/result/demo/basic'
// import Result2Example from '@popui/popui-rn/components/result2/demo/basic';
// import IconExample from '@popui/popui-rn/components/weui-icon/demo/basic';
import ResourceLoader from '../common/ResourceLoader'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <ResultExample />
            {/* <Result2Example /> */}
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
  },
})
