import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES} from '../Themes/Themes';
import normalize from '../utils/helpers/normalize';

export default function ImageHeader(props) {
  return (
    <ImageBackground
      style={{
        marginTop:normalize(20),

        paddingHorizontal: normalize(20),
        paddingVertical: normalize(20),
        borderRadius: normalize(15),
        overflow: 'hidden',
        height: normalize(200),
      }}
      source={IMAGES.cardBG}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            props.onPress();
          }}>
          {/* <Image
            resizeMode="contain"
            style={{height: normalize(30), width: normalize(30)}}
            source={ICONS.buttonback}
          /> */}
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: normalize(20),
          marginTop: normalize(20),
        }}>
        {props.headertext}
      </Text>
      <Text
        style={{
          color: COLORS.white,
          fontSize: normalize(13),
          marginTop: normalize(10),
        }}>
        {props.description}
      </Text>
    </ImageBackground>
  );
}
