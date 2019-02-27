import React, { Component } from 'react';
import {
  SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CreateForm.css';


class FormCard extends Component {
    state={
      Attributes: '',
      name: '',
      text: '',
      rows: [],
    }


    handleChangeText = (text) => {
      this.setState({ text });
    };

      handleSubmitEditing = () => {
        if (!this.state.text) return;

        this.props.onSubmit(this.state.text);
        this.setState({ text: '' });
      };

      handleOnPress=() => {
        this.setState((state) => {
          state.rows.append(<TextInput
            value={this.state.text}
            autoCorrect={false}
            placeholder="Field Name"
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            style={{
              width: '85%',
              height: 50,
              marginTop: 40,
              marginHorizontal: 20,
              paddingHorizontal: 10,
              alignSelf: 'flex-start',
              borderBottomWidth: 2,
              borderBottomColor: 'grey',
              fontSize: 18,
            }}
            onChangeText={this.handleChangeText}
            onSubmitEditing={this.handleSubmitEditing}
          />);
        });
        console.log(this.state);
      }

      render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Create Form</Text>
            </View>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              style={{ width: '100%', backgroundColor: 'white' }}
            >


              <TextInput
                value={this.state.text}
                autoCorrect={false}
                placeholder="Form Name"
                placeholderTextColor="black"
                underlineColorAndroid="transparent"
                style={{
                  width: '85%',
                  height: 50,
                  marginTop: 40,
                  marginHorizontal: 20,
                  paddingHorizontal: 10,
                  alignSelf: 'flex-start',
                  borderBottomWidth: 2,
                  borderBottomColor: 'grey',
                  fontSize: 18,
                }}
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleSubmitEditing}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleOnPress}
              >
                <Text style={styles.buttonText}>
                  {' '}
                  {'ADD FIELD'}
                  {' '}
                </Text>
                {this.state.rows}
              </TouchableOpacity>
            </ScrollView>


          </SafeAreaView>


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
