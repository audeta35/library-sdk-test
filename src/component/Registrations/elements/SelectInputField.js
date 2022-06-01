import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import {Picker} from '@react-native-picker/picker';
const SelectInputField = ({
  title,
  name,
  placeholder,
  value,
  error,
  validation,
  data,
}) => {
  const {handleChange} = useContext(FormContext);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.inputTextField}>
      <Picker
        placeholder={placeholder ? placeholder: ''}
        mode='dropdown'
        selectedValue={value}
        itemStyle={{color: styles.inputTextField.color}}
        onValueChange={(itemValue, itemIndex) =>
          handleChange(name, itemValue)
        }>
          {data ?
          Object.keys(data).map((key, index) => {
          return (<Picker.Item fontFamily={styles.inputTextField.fontFamily} key={index} label={data[key]} value={key} />)}) : null}
      </Picker>
      {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default SelectInputField;
