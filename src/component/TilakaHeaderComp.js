import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TilakaHeader = ({
  rightLabel,
  handleRight,
  leftIcon,
  handleLeft,
  middleText,
  customColor,
}) => {
  return (
    <View style={styles.pageHeader}>
      <View style={styles.pageHeaderLeft}>
        {leftIcon ? (
          <TouchableOpacity onPress={handleLeft}>
            <MaterialIcon
              name={leftIcon}
              size={20}
              color={customColor ? customColor : styles.mainButton.backgroundColor  }
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.pageHeaderMid}>
        {middleText ? (
          <Text style={{...styles.pageHeaderText, color : customColor == "" ? customColor : styles.pageHeaderText.color}}>{middleText}</Text>
        ) : (
          <Image
            style={styles.pageHeaderLogo}
            source={require('../images/logo-full.png')}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.pageHeaderRight}>
        {rightLabel && (
          <TouchableOpacity onPress={handleRight}>
            <Text style={styles.headerTouchable}>{rightLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TilakaHeader;
