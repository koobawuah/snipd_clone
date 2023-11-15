import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PodcastTile = ({ podcastImg }) => {
  return (
    <View style={{ flex: 1, width: 90, height: 90, marginHorizontal: 5 }}>
      <TouchableOpacity
        onPress={() => {
          console.log('Pod tile pressed');
        }}>
        <Image
          source={{ uri: podcastImg }}
          style={{
            width: '100%',
            aspectRatio: 1,
            resizeMode: 'contain',
            borderRadius: 8,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PodcastTile;
