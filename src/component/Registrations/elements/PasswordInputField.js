import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import TilakaModal from '../../TilakaModalComp';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
const PasswordInputField = ({
  title,
  name,
  placeholder,
  value,
  error,
  validation,
}) => {
  const {handleChange} = useContext(FormContext);
  const [showPassword, setShowPassword] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const levels = [
    {
      label: 'Sangat Lemah',
      labelColor: '#6B778C',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Lemah',
      labelColor: '#6B778C',
      activeBarColor: '#FFAB00',
    },
    {
      label: 'Rata-rata',
      labelColor: '#6B778C',
      activeBarColor: '#DAE6F8',
    },
    {
      label: 'Sangat Kuat',
      labelColor: '#6B778C',
      activeBarColor: '#36B37E',
    },
  ];
  useEffect(() => {
    if (name === 'password') {
      setModalTitle('Ketentuan Kata Sandi');
      setModalText(
        'Kata Sandi minimal 10 karakter, maksimal 40 karakter, harus mengandung huruf kecil, huruf besar, angka, dan karakter khusus (@#$%^&+=)',
      );
    }
  }, []);

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
        <View
          style={{
            ...styles.inputTextField,
            flex: 1,
            flexDirection: 'row',
            borderWidth: 0,
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}>
          <View
            style={{
              flex: 7,
              height: 30,
            }}>
            <BarPasswordStrengthDisplay
              wrapperStyle={{flex: 7}}
              levels={levels}
              width={styles.passwordWidth.width}
              password={value}
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowInfo(true)}
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialIcon
              name={'help-circle'}
              size={styles.cardText.fontSize}
            />
          </TouchableOpacity>
        </View>
        {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
      </View>
      <TilakaModal
        visible={showInfo}
        title={modalTitle}
        text={modalText}
        handleYes={() => setShowInfo(false)}
        yesLabel={'Oke'}
      />
    </View>
  );
};

export default PasswordInputField;
