/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'lightTheme'} | {type: 'darkTheme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.7)',
  colors: {
    primary: '#5658d6',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'purple',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: false,
  dividerColor: 'rgba(255, 255, 255, 0.7)',
  colors: {
    primary: '#5658d6',
    background: 'black',
    card: 'white',
    text: 'white',
    border: '#5658d6',
    notification: 'purple',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'lightTheme':
      return {...lightTheme};
    case 'darkTheme':
      return {...darkTheme};
    default:
      return state;
  }
};
