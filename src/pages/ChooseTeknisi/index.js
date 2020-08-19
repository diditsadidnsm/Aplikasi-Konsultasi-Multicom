import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {DummyDoctor8} from '../../assets';
import {colors} from '../../utils';

const ChooseTeknisi = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Teknisi Handphone" onPress={() => navigation.goBack()} />
            <List 
                type="next" 
                profile={DummyDoctor8} 
                name="David MM" 
                desc="Pria" 
                onPress={() => navigation.navigate('Chatting')} 
            />
            <List 
                type="next" 
                profile={DummyDoctor8} 
                name="David MM" 
                desc="Pria" 
            />
            <List 
                type="next" 
                profile={DummyDoctor8} 
                name="David MM" 
                desc="Pria" 
            />
            <List 
                type="next" 
                profile={DummyDoctor8} 
                name="David MM" 
                desc="Pria" 
            />
            <List 
                type="next" 
                profile={DummyDoctor8} 
                name="David MM" 
                desc="Pria" 
            />
        </View>
    );
};
  
export default ChooseTeknisi;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
});
