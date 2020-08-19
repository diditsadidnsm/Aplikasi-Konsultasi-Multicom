import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {colors} from '../../utils';

const TeknisiProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Teknisi Profile" onPress={() => navigation.goBack()} />
            <Profile name="Nabila Putri Amelia" desc="Teknisi Komputer" />
            <Gap height={10} />
                <ProfileItem label="Keahlian" value="Software" />
                <ProfileItem label="Tempat Bekerja" value="Mstore Ambassador" />
                <ProfileItem label="No Pekerja" value="000829138912321020" />
            <View style={styles.action}>
                <Button title="Mulai Konsultasi" onPress={() => navigation.navigate('Chatting')} />
            </View>
        </View>
    );
};
  
export default TeknisiProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23,
    },
});