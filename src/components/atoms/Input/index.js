import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusFrom = () => {
        setBorder(colors.tertiary);
    };
    const onBlurFrom = () => {
        setBorder(colors.border);
    };
    return (
        <View>
            <Text style={styles.label}> {label} </Text>
            <TextInput 
                onFocus={onFocusFrom} 
                onBlur={onBlurFrom} 
                style={styles.input(border)} 
                value={value} 
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}
            />
        </View>
    );
};
  
export default Input;

const styles = StyleSheet.create({
    input: (border) => (
        {
            borderWidth: 1, 
            borderColor: border, 
            borderRadius: 10,
            padding: 12,
        }
    ),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400],
    },
});
