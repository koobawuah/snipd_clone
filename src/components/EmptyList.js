import React from 'react'
import { View, Text, Dimensions, } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const EmptyList = ({ icon, title, message }) => {

  const { width, height } = Dimensions.get('screen')

  return (
      <View style={{flex: 1, height: height * 0.7, marginLeft: -20, alignItems: 'center', marginVertical: 20,}}> 
        <Ionicons name={icon} size={34} color="lightgrey" style={{ marginVertical: 20, }}/> 
        <Text style={{fontSize: 24, width: '75%', color: 'white', textAlign: 'center', fontWeight: '700'}}>{title}</Text> 
        <Text style={{width: width * 0.8, fontSize: 18, color: 'white', textAlign: 'center', fontWeight: '400'}}>{message}</Text> 
      </View>
  )
}


export default EmptyList