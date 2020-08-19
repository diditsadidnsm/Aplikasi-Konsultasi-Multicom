import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';
import {colors, fonts, useForm, storeData, showError} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
    const [form, setForm] = useForm({email: '', password: ''});
    const dispatch = useDispatch();

    const login = () => {
        dispatch({type: 'SET_LOADING', value: true});
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            dispatch({type: 'SET_LOADING', value: false});
            Fire.database()
                .ref(`users/${res.user.uid}/`)
                .once('value')
                .then(resDB => {
                if (resDB.val()) {
                    storeData('user', resDB.val());
                    navigation.replace('MainApp');
                }
            });
        })
        .catch(err => {
            dispatch({type: 'SET_LOADING', value: false});
            showError(err.message);
        });
    };

    return (
        <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input 
                label="Email" 
                value={form.email} 
                onChangeText={(value) => setForm('email', value)} 
            />
            <Gap height={24} />
            <Input 
                label="Kata Sandi" 
                value={form.password} 
                onChangeText={(value) => setForm('password', value)}
                secureTextEntry 
            />
            <Gap height={10} />
            <Link title="Lupa Kata Sandi" size={12} />
                <Gap height={40} />
            <Button title="Masuk" onPress={login} />
                <Gap height={30} />
            <Link 
                title="Buat Akun Baru" 
                size={16} 
                align="center" 
                onPress={() => navigation.navigate('Register')}
            />
        </ScrollView>
        </View>
    );
};
  
export default Login;

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40, 
        backgroundColor: colors.white, 
        flex: 1
    },
    title: {
        fontSize: 20, 
        fontFamily: fonts.primary[600], 
        color: colors.text.primary, 
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    },
});
