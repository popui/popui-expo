import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import ActionSheetExample from '@popui/popui-rn/components/action-sheet/demo/basic';
// import { ActionSheet2 } from "@popui/popui-rn"
// import AllComp from '@popui/popui-rn/rn-kitchen-sink/allComponents'
// import ResourceLoader from '../common/ResourceLoader'
import { Button } from '@popui/popui-rn'
// import { Button } from 'antd-mobile-rn';
export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <SafeAreaView style={styles.container}> */}
        {/* <AllComp /> */}
        <Text>test</Text>
        <Button>Button</Button>
        {/* </SafeAreaView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
