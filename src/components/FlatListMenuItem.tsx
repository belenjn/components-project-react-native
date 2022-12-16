/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="black" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-forward-outline"
          color="black"
          size={23}
          style={{alignSelf: 'flex-end'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: 19,
  },
});
