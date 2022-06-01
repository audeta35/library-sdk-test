import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const DateInputField = ({
  title,
  name,
  placeholder,
  value,
  error,
  validation
}) => {
  const [visible, setVisible] = useState(false);
  const {handleChange} = useContext(FormContext);

  const handleOpen = () => {
    setVisible(!visible);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}{value}</Text>
      <TouchableOpacity style={{width: '100%'}} onPress={handleOpen}>
      <TextInput
        style={{
          ...styles.inputTextField,
          borderColor: error.length > 0 ? '#FF5630' : '#C1C7D0',
        }}
        editable={false}
        onChangeText={data => handleChange(name, data)}
        value={value}
        maxLength={validation?.length ? validation.length : null}
        placeholder={placeholder ? placeholder : ''}
      />
      </TouchableOpacity>
      {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
      <DateTimePickerModal
        style={{flexGrow: 0}}
        isVisible={visible}
        mode={'date'}
        // date={value ? value : time}
        onConfirm={date => {
          handleChange(name, date)
          handleOpen();
        }}
        onCancel={() => {
          handleOpen();
        }}
      />
    </View>
  );
};

export default DateInputField;
