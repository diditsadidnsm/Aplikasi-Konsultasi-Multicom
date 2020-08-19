import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILTokoBG, DummyToko1, DummyToko2, DummyToko3} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListToko} from '../../components';

const Toko = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILTokoBG} style={styles.background} >
                <Text style={styles.title}>Toko Terdekat</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListToko 
                    type="Tempat Perbaikan All Brand" 
                    name="Multicom Ratu Plaza" 
                    address="Ratu Plaza lt.3 no.49" 
                    pict={DummyToko1} 
                />
                <ListToko 
                    type="Tempat Perbaikan Apple" 
                    name="Mstore Ratu Plaza" 
                    address="Ratu Plaza lt.3 no.30" 
                    pict={DummyToko2} 
                />
                <ListToko 
                    type="Tempat Perbaikan Apple" 
                    name="Mstore Ambassador" 
                    address="Mall Ambassador lt.3 no.39" 
                    pict={DummyToko3} 
                />
            </View> 
        </View>
    );
};
  
export default Toko;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    background: {
        height: 240,
        paddingTop: 30,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center',
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14,
    },
});