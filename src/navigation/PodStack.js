import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from 'react-native'
import { PodcastHomeScreen, PodcastDetailsScreen } from '../screens'

const Pod = createNativeStackNavigator();

export default function PodStack() {

  return (
    <Pod.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Pod.Screen name="Home" component={PodcastHomeScreen} />
      <Pod.Screen name="Podcast Details" component={PodcastDetailsScreen} />
    </Pod.Navigator>
  )
}