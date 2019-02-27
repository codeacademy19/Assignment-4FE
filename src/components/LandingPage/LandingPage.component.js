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
  Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Header, Image, TouchableOpacity,
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

    render() {
      const { navigation } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Awesome Forms</Text>
            <TouchableOpacity onPress={() => this.onImageClick()}>
              <Image
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
            }}
            style={{ width: '100%', backgroundColor: '#cddcf7' }}
          >
            {this.state.Forms.map(Form => <FormCard name={Form.FormName} time={Form.createdAt} />)
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
