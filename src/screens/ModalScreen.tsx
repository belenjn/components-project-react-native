/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Open modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0,0, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{
            backgroundColor: 'white',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.15,
            elevation: 10,

          }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}>Modal</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 20,
            }}>Modal's body</Text>
            <Button title="Close modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
