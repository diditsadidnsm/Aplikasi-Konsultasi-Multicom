import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Input, Button, Gap} from '../../components';
import {colors, useForm, storeData, showError} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {

    const [form, setForm] = useForm({
        fullName: '',
        professi: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onContinue = () => {
        dispatch({type: 'SET_LOADING', value: true});
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then(success => {
                dispatch({type: 'SET_LOADING', value: false});
                setForm('reset');

                const data = {
                    fullName: form.fullName,
                    professi: form.professi,
                    email: form.email,
                    uid: success.user.uid,
                };

                Fire.database()
                    .ref('users/' + success.user.uid + '/')
                    .set(data);

                storeData('user', data);
                navigation.navigate('UploadPhoto', data);
            })
            .catch(err => {
            dispatch({type: 'SET_LOADING', value: false});
            showError(err.message);
        });
    };

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Input 
                    label="Nama Lengkap" 
                    value={form.fullName} 
                    onChangeText={value => setForm('fullName', value)} 
                />
                <Gap height={24} />
                <Input 
                    label="Pekerjaan" 
                    value={form.professi} 
                    onChangeText={value => setForm('professi', value)} 
                />
                <Gap height={24} />
                <Input 
                    label="Email" 
                    value={form.email} 
                    onChangeText={value => setForm('email', value)} 
                />
                <Gap height={24} />
                <Input 
                    label="Kata Sandi" 
                    value={form.password} 
                    onChangeText={value => setForm('password', value)} 
                    secureTextEntry
                />
                <Gap height={40} />
                <Button title="Lanjutkan" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>
    );
};
  
export default Register;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0, 
    },
});
