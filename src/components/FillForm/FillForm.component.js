import React, { Component } from 'react';
import {
  SafeAreaView, ImageBackground, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './FillForm.css';
import getForms from '../../helpers/postFormAttr';

class FormCard extends Component {
    state={
      Attributes: [],
      name: '',
      formName: '',
      text: '',
      rows: [],
      index: -1,
    }

    async componentDidMount() {
      console.log(this.props.navigation.state.params.name);
      await axios.get(`http://localhost:7000/${this.props.navigation.state.params.name}`).then((res) => {
        this.setState({
          Attributes: res.data[0].Attributes.split(',').slice(1),
        });
        console.log(this.state.Attributes);
      });
    }

    handleChangeText = (text) => {
      this.setState({ text });
    };

    handleChangeTextField = (name) => {
      this.setState({ name });
    };

      handleSubmitEditing = (name) => {
        this.setState({ formName: name });
      };

      handleSubmitEditingField = async (name) => {
        const newAttr = `${this.state.Attributes},${name}`;
        await this.setState({ Attributes: newAttr });
        console.log(this.state.Attributes.Attributes);
      };

      handleOnSave=async () => {
        // postForm(this.state.formName, this.state.Attributes).then(() => {
        //   this.props.navigation.navigate('Home');
        // });
        await axios.post(`http://localhost:7000/${this.state.formName}`, {
          attributes: this.state.Attributes,
        }).then((result) => {
          console.log(result.data);
          this.props.navigation.navigate('Home');
        }).catch((e) => {
          console.log(e);
        });
      }


      render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{this.props.navigation.state.params.name}</Text>
            </View>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              style={{ width: '100%', backgroundColor: 'white' }}
            >

              {this.state.Attributes.map(field => (
                <TextInput
                  // value={this.state.text}
                  autoCorrect={false}
                  placeholder={field}
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
                  onSubmitEditing={event => this.handleSubmitEditing(event.nativeEvent.text)}
                />
              ))}

            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity
                className="save"
                style={{ alignItems: 'center' }}
                onPress={this.handleOnSave}
              >
                <Text style={styles.headerText}>SAVE</Text>

              </TouchableOpacity>

            </View>

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
