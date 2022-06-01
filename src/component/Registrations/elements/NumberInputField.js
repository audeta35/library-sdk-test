import {View, Text, TextInput} from 'react-native';
import React, {useContext} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
const NumberInputField = ({ title, name, placeholder, value, error, validation}) => {
  const {handleChange} = useContext(FormContext);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput
        style={{
          ...styles.inputTextField,
          borderColor: error.length > 0 ? '#FF5630' : '#C1C7D0',
        }}
        onChangeText={data => handleChange(name, data)}
        value={value}
        maxLength={validation?.length ? validation.length : null}
        keyboardType="phone-pad"
        dataDetectorTypes="phoneNumber"
        placeholder={placeholder ? placeholder : ''}
      />
      {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
    </View>
  );
};

export default NumberInputField;
