import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles';

const TilakaModal = ({
  title,
  text,
  visible,
  handleYes,
  handleNo,
  yesLabel,
  noLabel,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      visible={visible}
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View style={{ ...styles.mainCard, alignItems: 'flex-start' }}>
          <Text style={styles.modalTitle}>{title ? title : ''}</Text>
          <Text style={styles.modalText}>{text ? text : ''}</Text>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <View style={{ flex: 2 }}></View>
            {noLabel ? (
              <TouchableOpacity style={{ flex: 1 }} onPress={handleNo}>
                <Text style={styles.modalButton}>
                  {noLabel ? noLabel : 'Batal'}
                </Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={{ flex: 1 }}>
              <Text style={styles.modalButton} onPress={handleYes}>
                {yesLabel ? yesLabel : 'Oke'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TilakaModal;
