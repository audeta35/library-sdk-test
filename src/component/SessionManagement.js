import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
// import {SetDetailKey, SetLoading, SetAuth} from '../../redux/actions';

import style from '../styles/appStyles';
import EncryptedStorage from 'react-native-encrypted-storage';

const SessionManagement = ({ navigation }) => {
  //   const dispatch = useDispatch();
  const [keyData, setKeyData] = useState({});
  const [detailModal, setDetailModal] = useState(false);
  const [isLoadingKey, setIsLoadingKey] = useState(true);
  const [key, setKeys] = useState([]);

  useEffect(() => {
    // console.log('keys');
    getKeys();
    setIsLoadingKey(false);
  }, []);

  const getKeys = async () => {
    let keys = JSON.parse(await EncryptedStorage.getItem('key'));
    // console.log('keys', JSON.stringify(keys));
    // if (keys.length == 0) {
    //   dispatch(
    //     SetAuth({
    //       isAuth: false,
    //     }),
    //   )
    // }
    setKeys(keys || []);
  };

  function deleteKey(data) {
    Alert.alert(
      'Confirmation',
      `Are you sure want to delete your private key ${data?.currentTime}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            deleteKeys(data);
          },
        },
      ]
    );
  }

  const detailKey = (data) => {
    setKeyData(data);
    setDetailModal(true);
  };

  const deleteKeys = async (data) => {
    const lastKey = key.filter((keys) => keys !== data);
    // setKeys(lastKey);
    await EncryptedStorage.setItem('key', JSON.stringify(lastKey));
    getKeys();
  };

  return (
    <ScrollView style={style?.scrollableView}>
      <Text style={style?.headerText}>Key Manager</Text>
      <View style={{ alignItems: 'center' }}>
        <Text style={style?.headerChildText}>
          The first time apps is used to login, a private key is generated and
          stored on your device.
        </Text>
        <Modal
          animationType="slide"
          visible={detailModal}
          onRequestClose={() => {
            setDetailModal(!detailModal);
            setKeyData({});
          }}
        >
          <ScrollView style={style?.scrollableView}>
            <Text style={style?.headerText}>Detail Key</Text>
            <Text style={style?.detailText}>mobile pair:</Text>
            <Text style={style.detailTextContent}>
              {keyData?.mobileKeyPair}
            </Text>
            <Text style={style?.detailText}>key pair:</Text>
            <Text style={style.detailTextContent}>{keyData?.keyPair}</Text>
            <Text style={style?.detailText}>public key:</Text>
            <Text style={style.detailTextContent}>{keyData?.publicKey}</Text>
            <Text style={style?.detailText}>current time:</Text>
            <Text style={style?.detailTextContent}>{keyData?.currentTime}</Text>

            <View
              style={{
                marginHorizontal: 16,
              }}
            >
              <Button
                onPress={() => {
                  setDetailModal(false);
                  setKeyData({});
                }}
                title="Back"
              />
            </View>
          </ScrollView>
        </Modal>

        {key?.map((row, index) => {
          return (
            <View key={index} style={style?.keyBadge}>
              <Text style={style?.keyHeader}>Key - {row?.currentTime}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: 'black' }} onPress={() => detailKey(row)}>
                  Detail
                </Text>
                <Text style={{ color: 'black' }} onPress={() => deleteKey(row)}>
                  Remove
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SessionManagement;
