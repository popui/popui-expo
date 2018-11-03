import React from 'react'
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import ResourceLoader from '../common/ResourceLoader'
// import SearchBarExample from '@popui/popui-rn/components/search-bar/demo/basic';
// import ListExample from '@popui/popui-rn/components/list/demo/basic';
// import TextInputExample from
// '@popui/popui-rn/components/text-input/demo/basic';
// import BasicTextInputTypeProviderExample from
// '@popui/popui-rn/components/text-input-type-provider/demo/basic';
// import BasicTextInputWithTypeExample from "@popui/popui-rn/components/text-input-with-type/demo/basic";

// import FormInputExample from '@popui/popui-rn/components/form/demo/basic';

// import TextAreaExample from '@popui/popui-rn/components/textarea-item/demo/basic';
// import BasicTextInputControlsExample from '@popui/popui-rn/components/text-input-controls/demo/basic';
// import FormInputExample from "@popui/popui-rn/components/form/demo/input";
// import CheckboxExample from "@popui/popui-rn/components/checkbox/demo/basic";
// import RadioExample from "@popui/popui-rn/components/radio/demo/basic";

// import RadioCellsExample from "@popui/popui-rn/components/radio-cells/demo/basic";
// import CheckboxCellsExample from "@popui/popui-rn/components/checkbox-cells/demo/basic";

import ImagePickerExample from '@popui/popui-rn/components/image-picker/demo/basic'

export default class App extends React.Component {
  render() {
    return (
      <ResourceLoader>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {/* <Text>Form Input: </Text>
            <FormInputExample /> */}

            <Text>ImagePickerExample: </Text>
            <ImagePickerExample />

            {/* <Text>TextInput Example:</Text>
          <TextInputExample /> */}

            {/* <Text>Radio Example:</Text>
            <RadioExample />

            <Text>Checkbox Example:</Text>
            <CheckboxExample />*/}

            {/* <Text>RadioCells Example:</Text>
            <RadioCellsExample />

            <Text>CheckboxCells Example:</Text>
            <CheckboxCellsExample /> */}

            {/* <Text>BasicTextInputTypeProviderExample:</Text>
          <BasicTextInputTypeProviderExample /> */}
            {/* <Text>TextInputWithType Example:</Text>
          <BasicTextInputWithTypeExample /> */}
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
