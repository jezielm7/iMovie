import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import ArrayFilm from '../components';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';
import AddIcon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export default function Home() {
  const carouselRef = useRef(null);

  const [list, setList] = useState(ArrayFilm);
  const [background, setBackground] = useState(list[0].img);
  const [colorStatusBar, setColorStatusBar] = useState(list[0].color);

  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={{ uri: item.img }}
            style={styles.carouselImg}
          />
          <Icon
            name="play-circle"
            size={30}
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colorStatusBar} />
      <View style={styles.containerChild}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            blurRadius={8}
            style={styles.imgBg}
            source={{ uri: background }}
          >
            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#000"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="searchengin" color="#000" size={25} />
              </TouchableOpacity>
            </View>

            <Text style={styles.newsTitle}>New Movies</Text>

            <View style={styles.carouselView}>
              <Carousel
                ref={carouselRef}
                data={list}
                style={styles.carousel}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={310}
                inactiveSlideOpacity={0.5}
                onSnapToItem={ (index) => {
                  setBackground(list[index].img);
                  setActiveIndex(index);
                  setColorStatusBar(list[index].color);
                }}
              />
            </View>

            <View style={styles.description}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>{list[activeIndex].title}</Text>
                <Text style={styles.movieDescription}>{list[activeIndex].text}</Text>
              </View>
              <TouchableOpacity style={styles.descIcon}>
              <AddIcon name="library-add" size={30}/>
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
    width: '95%',
    opacity: 0.6,
    elevation: 10,
    marginTop: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
    padding: 12,
    fontSize: 16,
    paddingLeft: 20,
  },
  icon: {
    top: 12,
    right: 25,
    position: 'absolute',
  },
  newsTitle: {
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 10,
    marginVertical: 4,
    color: 'rgb(170, 170, 170)',
  },
  carouselView: {
    width: '100%',
    height: 620,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImg: {
    width: 300,
    height: 500,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  carouselIcon: {
    top: 10,
    right: 25,
    color: '#fff',
    position: 'absolute',
  },
  description: {
    left: 7.2,
    width: '96.5%',
    bottom: '24%',
    borderRadius: 10,
    height: screenHeight,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    justifyContent: 'space-around',
  },
  movieTitle: {
    opacity: 0.7,
    fontSize: 22,
    marginBottom: 5,
    color: '#131313',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieDescription: {
    // bottom: 2,
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 10,
    color: '#131313',
  },
  descIcon: {
    top: 6,
    right: 20,
  },
});