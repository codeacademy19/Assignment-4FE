/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Header, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FormCard from '../FormCard/FormCard.component';
import styles from './LandingPage.css';
import getForms from '../../helpers/getForms';

export default class App extends Component {
    state={
      Forms: [],
    }

    componentDidMount() {
      return getForms('http://localhost:7000/Form').then(async (res) => {
        this.setState({
          Forms: res,
        });
      });
    }

    onImageClick=() => {
      this.componentDidMount();
    }

    onFromClick=(name) => {
      this.props.navigation.navigate('Fill', { name });
    }

    render() {
      const { navigation } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Awesome Forms</Text>
            <TouchableOpacity onPress={() => this.onImageClick()}>
              <Image
                className="image"
                style={styles.menu}
                source={require('../../../Icon/menu.png')}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            style={{ width: '200%', backgroundColor: '#cddcf7' }}
          >
            {this.state.Forms.map(Form => (
              <TouchableHighlight onPress={() => this.onFromClick(Form.FormName)} style={styles.formCard}>
                <FormCard name={Form.FormName} time={Form.createdAt} onPress={() => this.onFromClick(Form.FormName)} />
              </TouchableHighlight>
            ))
            }

          </ScrollView>
          <ActionButton
            buttonColor="#1d61e0"
            style={styles.actionButtonIcon}
            onPress={() => this.props.navigation.navigate('New')}
          />

        </SafeAreaView>
      );
    }
}
