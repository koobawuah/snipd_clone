import { View, Text, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const SavedScreen = () => {


const { height } = Dimensions.get('screen')

  return (
    <View style={{flex: 1, }}> 
      <LinearGradient 
          colors={['rgb(21, 25, 63)', 'rgb(12, 13, 41)', 'transparent']}
          locations={[0.35, 0.6, 1]}
          style={{ paddingHorizontal: 20,}}
          >
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: height * 0.06, }}>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, }}>
            <Text style={{flex: 1, fontSize: 32, fontWeight: '900', color: 'white', }}>Saved Snips</Text>
          </View>
        </LinearGradient>    
    </View>
  )
}

export default SavedScreen;
