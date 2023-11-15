import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView, View, StatusBar, Image } from 'react-native'
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'

import { SnipIcon } from '../components'
import { PodcastHomeScreen, SnipsScreen, SavedSnipsScreen, AccountScreen } from '../screens'

const R = createBottomTabNavigator();

export default function Root() {

  return (
    <>
      <StatusBar barStyle='light-content'/>
      <R.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingHorizontal: 10, 
            borderTopWidth: 0,
          },
        }}
      >
        <R.Screen name="Podcasts" component={PodcastHomeScreen} 
        options={{
          tabBarIcon: ({ color, focused }) => <Entypo name="grid" color={color} size={30} />,
          tabBarLabelStyle: {
            fontSize: 14,
          }
        }} />
        <R.Screen name="Snips" component={SnipsScreen} options={{
          title: 'For You',
          tabBarIcon: ({ color, focused, size }) => (<View style={{ height: size, width: size, padding: 1,  }}>
            <View style={{width: 20, height: 20, backgroundColor: color, borderRadius: 4, alignSelf: 'center', }}></View>
            <View style={{width: 15, height: 2, backgroundColor: color, borderRadius: 2, marginVertical: 1, alignSelf: 'center', }}></View>
            <View style={{width: 10, height: 2, backgroundColor: color, borderRadius: 1, alignSelf: 'center', }}></View>
          </View>),
          tabBarLabelStyle: {
            fontSize: 14,
          }
        }} />
        <R.Screen name="Saved" component={SavedSnipsScreen} options={{
          tabBarIcon: ({ color, focused }) => <SnipIcon fill={color} width={28} height={28}/>,
          tabBarLabelStyle: {
            fontSize: 14,
          }
        }} />
        <R.Screen name="Accounts" component={AccountScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialIcons name="person" color={color} size={30} />,
          tabBarLabelStyle: {
            fontSize: 14,
          }
        }} />
      </R.Navigator>
    </>
  )
}