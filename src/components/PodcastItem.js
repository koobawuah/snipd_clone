import React from 'react'
import { View, Text, Pressable, Image } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const PodcastItem = ({ podcastImg, podcastTitle, date, duration }) => {

  return (
    <View style={{ width: '100%', paddingVertical: 20, }}>
      <Pressable> 
        {/* Header for Podcast Item */}
        <View style={{flexDirection: 'row', alignItems: 'center', }}> 

          {/* <View style={{width: 60, height: 60, backgroundColor: 'red', borderRadius: 5, marginRight: 10, }}></View> */}
          <View style={{width: 80, height: 80, borderRadius: 5, marginRight: 10, }}>
            <Image source={{uri: podcastImg }} style={{ width: '100%', aspectRatio: 1, resizeMode: 'contain', borderRadius: 8, }}/>
          </View>

          <View style={{ height: 70, }}>
            <Text style={{ flex: 2, width: 300, marginTop: 4, fontWeight: '500', fontSize: 18, color: 'rgb(255, 255, 255)', }}>{podcastTitle}</Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}> 
              <Text style={{ fontSize: 14, color: 'rgb(158, 158, 164)', }}>{date}</Text>
              <View style={{ height: 4, width: 4, borderRadius: 4, marginHorizontal: 5, backgroundColor: 'rgb(158, 158, 164)', }}></View>
              <Text style={{ fontSize: 14, color: 'rgb(158, 158, 164)', }}>{duration}</Text>
            </View>
          </View>
        </View>


        {/* Footer for Podcast Item*/}
        {/* 
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginTop: 20,}}> 

          // play icon  
          <View style={{ width:32, height: 32, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 30, }}> 
            <MaterialIcons name="play-arrow" size={20} color="rgb(8, 8, 17)" /> 
          </View>

          //Highlights button 
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(42, 43, 57)', marginLeft: 20, padding: 10, borderRadius: 10,}}> 
              
          // Custom play icon 
              <View style={{ height: 14, width: 15, justifyContent: 'center', marginTop: 0, marginLeft: 10, }}>
                <View style={{width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 2, alignSelf: 'center', }}>
                  <MaterialIcons name="play-arrow" size={12} color="rgb(42, 43, 57)" />
                </View>
                <View style={{width: '75%', height: '10%', backgroundColor: 'white', borderRadius: 2, marginVertical: 1, alignSelf: 'center', }}></View>
                <View style={{width: '50%', height: '10%', backgroundColor: 'white', borderRadius: 1, alignSelf: 'center', }}></View>
              </View>

          // Highlights text  
              <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 16, fontWeight: '400', color:'rgb(255, 255, 255)', }}>Highlights</Text>

          </View>

          // Three dots button  
          <View style={{ flex: 1, width: 30, height: 30, alignItems: 'flex-end', marginRight: 20, }}>
            <Entypo name="dots-three-vertical" size={20} color="rgb(158, 158, 164)" />
          </View>


        </View>
        */}

      </Pressable>
    </View>
  )
}

export default PodcastItem;