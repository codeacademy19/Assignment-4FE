import React, { Component } from 'react';
import {
  SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './FormCard.css';


class FormCard extends Component {
  render() {
    const { name, time } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.formDetail}>
          <Text style={styles.formName}>{name}</Text>

        </View>
        <View style={styles.horizantalLine} />
        <View style={styles.formTimeView}>
          <Text style={styles.formTime}>
Created On:
            {' '}
            {time}
          </Text>
        </View>
      </View>
    );
  }
}

// FormCard.defaultProps = {
//   name: 'default',
//   time: '15/01/01',
// };

FormCard.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default FormCard;
