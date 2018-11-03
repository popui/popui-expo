import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import ResourceLoader from '../common/ResourceLoader'
// import SearchBarExample from '@popui/popui-rn/components/search-bar/demo/basic';
// import ListExample from '@popui/popui-rn/components/list/demo/basic';
// import TextInputSingleLineExample from
// '@popui/popui-rn/components/text-input-single-line/demo/basic';
import FormInputExample from '@popui/popui-rn/components/form/demo/input'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <Text>Form Input: </Text> */}
          <FormInputExample />
          {/* <Text>TextInputSingleLine Example:</Text>
          <TextInputSingleLineExample /> */}
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
