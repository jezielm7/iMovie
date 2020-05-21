import React, { useState } from 'react';
import { 
  View, 
  Text,
  ScrollView, 
  StyleSheet, 
  Dimensions, 
  ImageBackground, 
  TouchableOpacity, } from 'react-native';

// import { Container } from './styles';

import ArrayFilm from '../components';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Home() {
  const [list, setList] = useState(ArrayFilm);
  const [background, setBackground] = useState(list[0].img);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerChild}>
        <View style={...StyleSheet.absoluteFill, backgroundColor="#000"}>
          <ImageBackground
            blurRadius={8}
            style={styles.imgBg}
            source={{ uri: background }}
          >
            <View style={styles.viewSearch}>
              <TextInput 
                style={styles.input}
                placeholder="Search"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="searchengin" color="#fff" size={25} />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChild: {
    flex: 1,
    height: screenHeight,
  },
  imgBg: {
    flex: 1,
    opacity: 1,
    width: null,
    height: null,
    backgroundColor: '#222',
    justifyContent: 'flex-start',
  },
  viewSearch: {

  },
  input: {

  },
  icon: {

  },
});