import {
  View,
  StatusBar,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Element from './Element';
import styles from '../../styles';
import { FormContext } from './FormContext';
import { TilakaHeader } from '../..';
const Registration = ({ formJson, validAction, backAction }) => {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJson);
  }, []);

  const handleSubmit = () => {
    const newElements = [...elements];
    newElements.forEach((item) => {
      const { value, validation, title, name } = item;
      if (validation['required'] === true) {
        if (value === '') {
          item['error'] = title + ' tidak boleh kosong';
          return;
        } else {
          item['error'] = '';
        }
      }
      if (name == 'confirmPassword') {
        const passValue = newElements.filter((data) => {
          return data.name == 'password';
        });
        if (passValue[0].value != value) {
          item['error'] = 'Konfirmasi kata sandi tidak sesuai';
          return;
        } else {
          item['error'] = '';
          return;
        }
      }
      if (validation['regex'] != '') {
        if (value.match(validation['regex'])) {
          item['error'] = '';
        } else {
          switch (name) {
            case 'tilakaName':
              item['error'] =
                'Gunakan 6-15 karakter, harus kombinasi alfanumerik. Spesial karakter selain garis bawah “_” tidak diperbolehkan.';
              break;
            case 'password':
              item['error'] =
                'Min. 10 karakter, maks. 40 karakter, harus mengandung huruf kecil, huruf besar, angka, dan karakter khusus (@#$%^&+=)';
              break;
            default:
              item['error'] = 'regex tidak sesuai';
              break;
          }
        }
      }
    });
    setElements(newElements);

    const passValue = elements.filter((data) => {
      return data.error != '';
    });
    if (passValue.length > 0) {
      console.log('masih ada', passValue.length, 'error di form registration');
    } else {
      console.log('sudah sukses semua');
      validAction();
    }
  };
  const handleChange = (fieldName, data) => {
    const newElements = [...elements];
    newElements.forEach((item) => {
      const { type, name } = item;
      if (name == fieldName) {
        switch (type) {
          case 'date':
            item['value'] = data.toLocaleString();
            break;
          default:
            item['value'] = data;
            break;
        }
      }
    });
    setElements(newElements);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={styles.container.backgroundColor} />
        <TilakaHeader
          middleText={'Registrasi'}
          leftIcon={'arrow-left'}
          handleLeft={backAction}
        />
        <View style={styles.pageBody}>
          <View style={styles.mainCard}>
            <Image
              style={styles.cardImage}
              source={require('../../images/logo-full.png')}
              resizeMode="contain"
            />
            <Text style={styles.cardText}>
              Daftarkan Tilaka Name dan Kata Sandi yang ingin Anda gunakan
            </Text>
            {elements
              ? elements.map((item, index) => (
                  <Element key={index} item={item} />
                ))
              : null}
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.mainButton} onPress={handleSubmit}>
              <Text style={styles.mainButtonText}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </FormContext.Provider>
  );
};

export default Registration;
