import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor8, DummyDoctor7, DummyDoctor6} from '../../assets';

const Pesan = ({navigation}) => {
    const [teknisis] = useState([
        {
            id: 1,
            profile: DummyDoctor8,
            name: 'Bambang Pamungkas',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 2,
            profile: DummyDoctor7,
            name: 'Nisa Syabian',
            desc: 'Oh tantu saja tidak karena jeruk it...',
        },
        {
            id: 3,
            profile: DummyDoctor6,
            name: 'Irfan Bachdiem',
            desc: 'Ok menurut pak dokter bagaimana unt...',
        },
    ]);
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Pesan</Text>
                {teknisis.map(teknisi => {
                    return (
                        <List
                            key={teknisi.id} 
                            profile={teknisi.profile} 
                            name={teknisi.name} 
                            desc={teknisi.desc}
                            onPress={() => navigation.navigate('Chatting')} 
                        />
                    );
                })}
            </View>
        </View>
    );
};
  
export default Pesan;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    },
});