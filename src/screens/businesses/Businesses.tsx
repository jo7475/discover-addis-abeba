import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {HStack} from '../../components/common/Layouts';
import FastImage from 'react-native-fast-image';
import {AppLogo} from '../../assets/images';
import {Sponsors} from '../../components/common/Sponsors';
import {CategoryList} from '../../components/common/CategoryList';
import {theme} from '../../theme/theme';
import {AlternatingLogo} from '../../components/common/AlternatingLogo';
import {BusinessBottomList} from '../../components/business/BusinessBottomList';

export function Businesses() {
  const [search, setSearch] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <HStack style={styles.headerContainer}>
        <AlternatingLogo />
      </HStack>
      <TextInput
        onFocus={e => setSearch(true)}
        onBlur={e => setSearch(false)}
        placeholder="Search businesses and more"
        style={styles.search}
      />
      {!search && (
        <>
          <Sponsors />
          <BusinessBottomList />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: theme.colors.tint,
    flex: 1,
    paddingLeft: 10,
    height: 40,
    borderRadius: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    marginRight: '3%',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
});
