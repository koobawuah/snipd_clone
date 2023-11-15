import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons'


const MenuItem = ({ active, text, iconSize, iconName, color, onPress, IconPack }) => {

  return (
    <View style={{flex: 1, paddingHorizontal: 2, marginHorizontal: 5,}}>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: active?'rgb(42, 43, 57)':'transparent', padding: 10, borderRadius: 5,}}>
        <MaterialIcons name={iconName} size={iconSize} color={active?color:'rgb(158, 158, 164)'} />

        <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 20, fontWeight: '400', color:active?color:'rgb(158, 158, 164)', }}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem;