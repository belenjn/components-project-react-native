/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {createContext, useEffect, useReducer} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'darkTheme'});
  };
  const setLightTheme = () => {
    dispatch({type: 'lightTheme'});
  };
  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
