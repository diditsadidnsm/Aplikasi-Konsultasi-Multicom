import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {DummyDoctor8} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor8} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Apakah Menyalakan hp setiap hari itu buruk?</Text>
        </View>
        <Text style={styles.date}>00.37 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
    container: {
      marginBottom: 20, 
      alignItems: 'flex-end', 
      paddingLeft: 16,
      flexDirection: 'row',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      marginRight: 12,
    },
    chatContent: {
      padding: 12,
      paddingRight: 18,
      backgroundColor: colors.primary,
      maxWidth: '80%',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
    },
    text: {
      fontSize: 14,
      fontFamily: fonts.primary.normal,
      color: colors.white,
    },
    date: {
      fontSize: 11,
      fontFamily: fonts.primary.normal,
      color: colors.text.secondary,
      marginTop: 8,
    }
});
