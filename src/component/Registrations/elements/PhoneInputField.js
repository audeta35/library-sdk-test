import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import PhoneInput from "react-native-phone-number-input";
const PhoneInputField = ({ title, name, placeholder, value, error, validation}) => {
  const {handleChange} = useContext(FormContext);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}</Text>
      <PhoneInput
        defaultCode="ID"
        layout="first"
        containerStyle={{...styles.inputTextField}}
        onChangeFormattedText={(text) => {
          handleChange(text, name)
        }}
        disableArrowIcon={true}
      />    
      {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
    </View>
  );
};

export default PhoneInputField;
