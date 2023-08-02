import {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {AppLogo, CBE} from '../../assets/images';
import React from 'react';
import {StyleSheet} from 'react-native';

export const AlternatingLogo = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 3000);
  }, [state]);
  return <FastImage source={state ? AppLogo : CBE} style={styles.Logo} />;
};
const styles = StyleSheet.create({
  Logo: {
    width: 50,
    height: 50,
  },
});
