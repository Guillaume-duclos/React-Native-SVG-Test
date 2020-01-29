import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Dimensions, ScrollView } from 'react-native';
import Moon from './assets/moon.svg';
import Sun from './assets/sun.svg';
import Fog from './assets/fog.svg';
import Illustration from './assets/illustration.svg';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.block}>
            <Moon width={20} height={20} fill="#f6e58d" />
            <Moon width={40} height={40} fill="#ffbe76" />
            <Moon width={60} height={60} fill="#ff7979" />
            <Moon width={80} height={80} fill="#badc58" />
            <Moon width={100} height={100} fill="#c7ecee" />
          </View>
          <View style={styles.block}>
            <Sun width={20} height={20} fill="#f6e58d" />
            <Sun width={40} height={40} fill="#ffbe76" />
            <Sun width={60} height={60} fill="#ff7979" />
            <Sun width={80} height={80} fill="#badc58" />
            <Sun width={100} height={100} fill="#c7ecee" />
          </View>
          <View style={styles.block}>
            <Fog width={20} height={20} fill="#f6e58d" />
            <Fog width={40} height={40} fill="#ffbe76" />
            <Fog width={60} height={60} fill="#ff7979" />
            <Fog width={80} height={80} fill="#badc58" />
            <Fog width={100} height={100} fill="#c7ecee" />
          </View>
          <View style={styles.block}>
            <Illustration width={Dimensions.get('window').width - 40} height={Dimensions.get('window').width - 40} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default App;
