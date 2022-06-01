import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const ConfirmPassInputField = ({
  title,
  name,
  placeholder,
  value,
  error,
  validation,
}) => {
  const {handleChange} = useContext(FormContext);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={{width: '100%'}}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{title}</Text>
        <View
          style={{
            ...styles.inputTextField,
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: error.length > 0 ? '#FF5630' : '#C1C7D0',
          }}>
          <TextInput
            style={{
              flex: 7,
              paddingVertical: 0,
              fontFamily: styles.inputTextField.fontFamily,
              color: styles.inputTextField.color,
            }}
            onChangeText={data => handleChange(name, data)}
            value={value}
            secureTextEntry={showPassword}
            maxLength={validation?.length ? validation.length : null}
            placeholder={placeholder ? placeholder : ''}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{flex: 1}}>
            {!showPassword ? (
              <MaterialIcon name={'eye'} size={20} />
            ) : (
              <MaterialIcon name={'eye-off'} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default ConfirmPassInputField;
