import {Alert, Linking} from 'react-native';

export const openDialer = (phoneNumber: string) => {
  const url = `tel:${phoneNumber}`;

  Linking.openURL(url)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      }
    })
    .catch(err => console.log(err));
};
