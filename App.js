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
  Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Header,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FormCard from './src/components/FormCard/FormCard.component';

import { FONT_HEADER } from "."
;
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Awesome Forms</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          style={{ width: '100%', backgroundColor: '#cddcf7' }}
        >

          <FormCard name="default" time="15/0/1" style={{ height: '100%' }} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />
          <FormCard name="default" time="15/0/1" style={styles.formCard} />

        </ScrollView>
        <ActionButton
          buttonColor="#1d61e0"
          style={styles.actionButtonIcon}
          onPress={() => { console.log('hi'); }}
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',

  },
  actionButtonIcon: {
    fontSize: 20,
    color: 'white',
  },
  formCard: {
    width: '100%',
    height: '30%',
  },
  header: {
    backgroundColor: '#1d61e0',
    justifyContent: 'center',
    width: '100%',
    height: '10%',

  },
  headerText: {
    fontSize: 22,
    color: 'white',
    paddingLeft: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },

});
