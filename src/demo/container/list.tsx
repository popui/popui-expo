import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
// import {Button} from "@popui/popui-rn";
// import Button from '@popui/popui-rn/components/button/index';
import CellExample from '@popui/popui-rn/components/cell/demo/basic'
import BadgeExample from '@popui/popui-rn/components/badge/demo/basic'
import ListExample from '@popui/popui-rn/components/list/demo/basic'
import InputItemExample from '@popui/popui-rn/components/input-item/demo/basic'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Cell:</Text>
          <CellExample />

          <Text>Badge:</Text>
          <BadgeExample />

          <Text>List:</Text>
          <ListExample />

          <Text>InputItem:</Text>
          <InputItemExample />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
