/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface IProps {}

const App:React.FC<IProps> = () => {
  const [state,setState] = React.useState({
    year:2021,
    leapYear:false,
    topics:['React','React Native','Javascript'],
    info:{
      paperback:true,
      length:'335 pages',
      type:"programming"
    }
  })
  const updateYear = () => {
    const newYear = state.year+1
    // setState({...state,year:newYear})
    state.year = newYear
  }
  let leapYear;
  if(state.leapYear){
    leapYear = <Text>This is a leapYear</Text>
  }else{
    leapYear = <Text>This is not a leapYear</Text>
  }
  return (
    <>
      <SafeAreaView>
        <Text>{state.year}</Text>
        <Text onPress={updateYear}>Length: {state.info.length} </Text>
        <Text>Type: {state.info.type}</Text>
        {leapYear}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
