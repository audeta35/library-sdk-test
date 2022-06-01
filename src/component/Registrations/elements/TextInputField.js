import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from '../../../styles';
import {FormContext} from '../FormContext';
import TilakaModal from '../../TilakaModalComp';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const TextInputField = ({
  title,
  name,
  placeholder,
  value,
  error,
  validation,
}) => {
  const {handleChange} = useContext(FormContext);
  const [showInfo, setShowInfo] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  useEffect(() => {
    if (name === 'tilakaName') {
      setModalTitle('Tilaka Name');
      setModalText(
        `Tilaka Name tidak dapat diubah dan akan digunakan sebagai username untuk pengguna masuk ke akun Tilaka dan menggunakan layanan Tilaka.${'\n\n'}Tilaka Name terdiri dari 6-15 karakter, harus berupa kombinasi alfanumerik. Spesial karakter selain garis bawah “_” tidak diperbolehkan.`,
      );
    }
  }, []);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
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
          style={{flex: 7, paddingVertical: 0}}
          onChangeText={data => handleChange(name, data)}
          value={value}
          maxLength={validation?.length ? validation.length : null}
          placeholder={placeholder ? placeholder : ''}
        />
        {modalText.length > 0 && (
          <TouchableOpacity style={{flex: 1}} onPress={handleInfo}>
            <MaterialIcon name={'help-circle'} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {error.length > 0 && <Text style={styles.inputErrorText}>{error}</Text>}
      <TilakaModal
        visible={showInfo}
        title={modalTitle}
        text={modalText}
        handleYes={handleInfo}
        yesLabel={'Oke'}
      />
    </View>
  );
};

export default TextInputField;
