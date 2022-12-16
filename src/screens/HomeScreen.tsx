/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  compontent?: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen ',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen ',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Menu's options</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};
