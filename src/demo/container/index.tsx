import React from 'react'
import { StyleSheet, Text } from 'react-native'
// import ActionSheetExample from '@popui/popui-rn/components/action-sheet/demo/basic';
// import { ActionSheet2 } from "@popui/popui-rn"
// import AllComp from '@popui/popui-rn/rn-kitchen-sink/allComponents'
import ResourceLoader from '../common/ResourceLoader'
import { Button } from '@popui/popui-rn'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        {/* <SafeAreaView style={styles.container}> */}
        {/* <AllComp /> */}
        <Text>test</Text>
        <Button>Button</Button>
        {/* </SafeAreaView> */}
      </ResourceLoader>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
