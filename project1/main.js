import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{marginTop: 30, fontSize: 30}}>Header</Text>
            <Image
            style={{width: 300, height: 300}}
            source={{uri: 'https://cdn.shopify.com/s/files/1/0032/7882/products/bearacha_export.png?v=1332964079'}}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={[styles.like, styles.btn]}>
              <Text style={styles.btnText}>Like</Text>
            </View>
            <View style={[styles.btn]}>
              <Text style={styles.btnText}>Share</Text>
            </View>
            <View style={[styles.comment, styles.btn]}>
              <Text style={styles.btnText}>Comment</Text>
            </View>
          </View>
            <View style={styles.colContainer}>
              <View style={styles.comments}>
                <Text>Big_Daddy: What is that bear doing??</Text>
              </View>
              <View style={styles.comments}>
                <Text>beansprout: I heart fire bears</Text>
              </View>
              <View style={styles.comments}>
                <Text>Beck: yummy.</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 20,
    paddingTop: 6,
    width: 75,
    height: 25,
    backgroundColor: '#49A1EE',
    alignItems: 'center'
  },
  like: {
    borderRightColor: '#fff',
    borderRightWidth: StyleSheet.hairlineWidth
  },
  comment: {
    borderLeftColor: '#fff',
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  btnText: {
    color: '#fff',
  },
  colContainer: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  comments: {
    backgroundColor: '#D2E7FA',
    width: 300,
    height: 25,
    marginBottom: 10,
  }
});

Expo.registerRootComponent(App);
