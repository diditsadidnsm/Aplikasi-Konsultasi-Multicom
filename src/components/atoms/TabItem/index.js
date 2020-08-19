import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
    IconTeknisi, 
    IconTeknisiActive, 
    IconPesan, 
    IconToko, 
    IconPesanActive, 
    IconTokoActive
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Teknisi'){
            return active ? <IconTeknisiActive /> : <IconTeknisi />
        }
        if(title === 'Pesan'){
            return active ? <IconPesanActive /> : <IconPesan />
        }
        if(title === 'Toko'){
            return active ? <IconTokoActive /> : <IconToko />
        }
        return <IconTeknisi />
    }
    return (
       <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
           <Icon />
           <Text style={styles.text(active)}> {title} </Text>
       </TouchableOpacity>
    );
};
  
export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? colors.text.menuActive : colors.text.menuInactive,
            fontFamily: fonts.primary[600],
            marginTop: 4,
        }
    ),
});
