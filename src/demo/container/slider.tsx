import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import ResourceLoader from '../common/ResourceLoader'

import FormSliderExample from '@popui/popui-rn/components/form/demo/slider'
import SliderExample from '@popui/popui-rn/components/slider/demo/basic'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <Text>Basic Example:</Text>
          <SliderExample />
          <Text>Form Slider Example:</Text>
          <FormSliderExample />
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
