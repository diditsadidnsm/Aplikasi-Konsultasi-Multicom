import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Fire} from '../../config';
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import {showMessage} from 'react-native-flash-message';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    professi: '',
    email: '',
  });
  
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto ({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('profile: ', profile);
    console.log('new Password: ', password);

    if (password.length > 0) {
      if (password.length < 8) {
        showMessage({
          message: 'Password kurang dari 8 karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: 'white',
          });
        });
      } 
    });
  }

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
      console.log('success: ', data);
      storeData('user', data);
    })
    .catch(err => {
      showMessage({
        message: err.message,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
    });
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary({quality:  0.5, maxWidth: 200, maxHeight: 200}, response => {
      console.log('response: ', response);
      if (response.didCancel || response.error){
        showMessage({
          message: 'Oops, sepertinya anda tidak memilih foto dengan benar',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        console.log('response getImage: ', response);
        const source = {uri: response.uri};

        setPhotoForDB(`data:${response.type};base64, ${response.data}`);
        setPhoto(source);
      }
    },);
  }

  return (
    <View style={styles.page}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
            <Gap height={26} />
            <Input 
              label="Nama Lengkap" 
              value={profile.fullName} 
              onChangeText={(value) => changeText('fullName', value)} 
            />
            <Gap height={24} />
            <Input 
              label="Pekerjaan" 
              value={profile.professi} 
              onChangeText={(value) => changeText('professi', value)} 
            />
            <Gap height={24} />
            <Input label="Email" value={profile.email} disable />
            <Gap height={24} />
            <Input 
              label="Kata Sandi" 
              secureTextEntry
              value={password} 
              onChangeText={(value) => setPassword(value)} 
              />
            <Gap height={40} />
          <Button title="Simpan Profile" onPress={update} />
        </View>
        </ScrollView>
    </View>
  );
};

export default UpdateProfile;

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
