import React, { FC } from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'


const Core: FC = () => {
  return (
    <ScrollView>
      <Text>Core text</Text>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Some more text</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
          />
      </View>
      <TextInput 
        style={{ height: 40, borderColor: 'pink', borderWidth: 2}}
        defaultValue="You can type in me"
      />
    </ScrollView>
  )
}

export default Core