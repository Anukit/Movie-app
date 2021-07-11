import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Home} from '.';

const List_Video = ({navigation}) => {
  const numColumns = 3;
  const [cartoons, setcartoons] = React.useState([
    {
      id: 0,
      name: 'cartoon 1',
      img: images.cartoon1,
      favourite: false,
      score: '3.5',
    },
    {
      id: 1,
      name: 'cartoon 2',
      img: images.cartoon2,
      favourite: true,
      score: '4.5',
    },
    {
      id: 2,
      name: 'cartoon 3',
      img: images.cartoon3,
      favourite: false,
      score: '3.5',
    },
    {
      id: 3,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
    {
      id: 4,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
    {
      id: 5,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
    {
      id: 6,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
    {
      id: 7,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
    {
      id: 8,
      name: 'cartoon 4',
      img: images.cartoon4,
      favourite: false,
      score: '4.0',
    },
  ]);

  function renderMoviesLists(item, index) {
    return (
     <SafeAreaView /* style={{height: "100%", width: "100%"}} */>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Videos');
          }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: 110,
              height: 160,
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
      }}>
      {/* Header */}
      <View style={{flexDirection: 'row', height: 60}}>
        <Text
          style={{
            color: 'white',
            marginTop: 15,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Movies
        </Text>
        <Text style={{color: 'red', marginTop: 7, fontWeight: 'bold'}}>TH</Text>
        {/* ช่อง Search */}
        <View style={styles.sectionStyle}>
          <TextInput
            style={{flex: 1, color: 'white'}}
            placeholder="Search"
            placeholderTextColor="#CACACA"
          />
          <Icon
            name="search"
            type="FontAwesome"
            color="#CACACA"
            size={20}
            onPress={() => {
              console.log('Focus on pressed');
            }}
          />
        </View>
        {/* โปรไฟล์ */}
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Icon
            name="person"
            type="Ionicons"
            color="#CACACA"
            size={30}
            onPress={() => {
              console.log('Focus on pressed');
            }}
          />
        </View>
      </View>

      {/* การ์ตูน */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            ...FONTS.h2,
            marginTop: 5,
            fontWeight: 'bold',
          }}>
          การ์ตูน
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={cartoons}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderMoviesLists(item, index)}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: 165,
    borderRadius: 5,
    margin: 10,
    borderBottomColor: 'white',
  },
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default List_Video;
