import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export class SwiperTop extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text>Top text</Text>
      </View>
    );
  }
}

export default class SwiperBottom extends React.Component<any, any> {
  render() {
    //const { onSwipedLeft, onSwipedRight, onSwipedTop } = this.props;
    return (
      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.props.onSwipedLeft} activeOpacity={0.5}>
          <Image source={require('../../assets/images/swipe_labels/dismiss.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onSwipedTop} activeOpacity={0.5}>
          <Image source={require('../../assets/images/swipe_labels/superlike.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onSwipedRight} activeOpacity={0.5}>
          <Image source={require('../../assets/images/swipe_labels/likeicon.png')} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
      </View>
    );
  }
}
