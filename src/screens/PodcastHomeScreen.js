import React, { useState, useRef } from 'react'
import { SafeAreaView, View, Dimensions, ScrollView, RefreshControl, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons'
import * as Vibration from 'expo-haptics'

import { PodcastTile, MenuItem, PodcastItem, HorizontalLine, EmptyList } from '../components'
import { DummyData, menuList, Channels, EmptyListMessages } from '../constants'

const { height } = Dimensions.get('screen')
const dummy = [1,2,3,4,5,6]

const PodcastHomeScreen = () => {

  const [selected, setSelected] = useState(1)
  const [active, isActive] = useState(false)
  const listRef = useRef(null)
  const [refreshing, setRefreshing] = useState(false)

  function selectMenu(select) {
      setSelected(select)
      Vibration.selectionAsync()
      listRef.current.scrollToIndex({index: select, animated: true, viewPosition: 0.5})
      if(select !== selected) return null
      return isActive(true)
  }

  const getMenuItems = ( {item, index} ) => {
    return (                  
              <MenuItem 
                    iconPack="MaterialIcons" 
                    iconName={item.icon}
                    active={index === selected}
                    iconSize={18} 
                    text={item.title}
                    color="white"
                    onPress={() => selectMenu(index)}
                    />
                )
  }

  const getPodcastList = ({item, index}) => {
    return (
      <PodcastItem 
        podcastImg={item.podcastImg} 
        podcastTitle={item.podcastTitle} 
        date={item.date} 
        duration={item.duration} 
      />
    );
  }
  
  const podcastEmpty = () => { 
      return (
    selected === 0?<EmptyList icon={EmptyListMessages.inProgress.icon} title={EmptyListMessages.inProgress.title} message={EmptyListMessages.inProgress.message}/>:selected === 2?<EmptyList icon={EmptyListMessages.downloads.icon} title={EmptyListMessages.downloads.title} message={EmptyListMessages.downloads.message}/>:selected === 3?<EmptyList icon={EmptyListMessages.favorites.icon} title={EmptyListMessages.favorites.title} message={EmptyListMessages.favorites.message}/>:<EmptyList icon='ios-information-circle-outline' title='Nothing to see here.' message=''/>
    )    
  }

  const refreshAction = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=> {setRefreshing(false); console.log('Refresh complete!')}, 3000)
  }, [])
  

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl progressViewOffset={70} style={{position: 'absolute', zIndex: 20,}} tintColor="#f5f5f5" refreshing={refreshing} onRefresh={refreshAction}/>}> 
      <View style={styles.header}>
        <LinearGradient 
          colors={['rgb(21, 25, 63)', 'rgb(12, 13, 41)', 'transparent']}
          locations={[0.35, 0.6, 1]}
          style={{ paddingHorizontal: 20,}}
          >
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: height * 0.06, }}>
            <TouchableOpacity onPress={() => console.log("Get feedback")} style={{ flexDirection: 'row', alignItems: 'center', }}> 
              <Text style={{fontSize: 18, fontWeight: '500', color: 'white', marginRight: 10, }}>Feedback </Text>
              <MaterialIcons name="forum" size={20} color="white" /> 
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, }}>
            <Text style={{flex: 1, fontSize: 32, fontWeight: '900', color: 'white', }}>Podcasts</Text>
            <MaterialIcons name="dashboard" size={26} color="white" />            
            <Ionicons name="ios-search" size={26} color="white" style={{marginLeft: 25, }} />
          </View>
         <FlatList 
            data={DummyData}
            renderItem={ ({item, index}) => (<PodcastTile key={index+item} podcastImg={item.podcastImg} />)}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20,}}
            style={{ marginHorizontal: -20, }}
            showsHorizontalScrollIndicator={false}
            />       
          <FlatList 
            data={menuList}
            renderItem={getMenuItems}
            ref={listRef}
            style={{ paddingTop: 20, marginHorizontal: -20, }} 
            showsHorizontalScrollIndicator={false} 
            horizontal 
            contentContainerStyle={{paddingHorizontal: 20,}} 
            ListFooterComponent={( {item, index} ) => (
              <View style={{  marginLeft: 10, borderLeftColor: 'rgb(17,35, 26)', borderLeftWidth: 1, }}> 
                <MenuItem 
                  IconPack="MaterialIcons" 
                  iconName="settings"
                  iconSize={18}
                  text="Edit"
                  />
              </View>
            )}
          />
        </LinearGradient>    
      </View>

      <View style={styles.body}>
        <FlatList 
          data={selected === 1?DummyData:[]}
          renderItem={getPodcastList}
          ListEmptyComponent={podcastEmpty}
          contentContainerStyle={{ flex: 1, width: '100%', }}
          ItemSeparatorComponent={() => <HorizontalLine />}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 25, 63)'
  },
  header: {
    flex: 1,
    backgroundColor: 'rgb(8, 8, 17)',
  },
  body: {
    paddingHorizontal: 20,
    backgroundColor: 'rgb(8, 8, 17)',
  }
})

export default PodcastHomeScreen;