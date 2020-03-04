/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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

import { TextInput, Appbar,Button  } from 'react-native-paper';
import DisplayLove  from "./Components/DisplayLove";


class App extends Component {
    state = {
      fname: '',
      sname: '',
      result: 'loading',
    };

    submitIt(){
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
        headers:{
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "SIGN-UP-FOR-KEY",
        }
      })
        .then(data => data.json())
        .then(data2 =>{
         // console.log(data2);
          this.setState(
            this.state.result=data2,
          );
        })

      // fetch("GET", "https://love-calculator.p.rapidapi.com/getPercentage");
      // headers({
      //   "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      //   "x-rapidapi-key": "SIGN-UP-FOR-KEY"
      // });

      // .then(data => data.json())
      //   .then(data2 =>{
      //    // console.log(data2);
      //     this.setState(
      //       this.state.result=data2,
      //     );
      //   })

    }

    render () {
      return (
          <>
            <View style={styles.body}>
            <Appbar.Header>
              <Appbar.Content
                title="Love % calculator"
                style={{alignItems:"center"}}
              />
            </Appbar.Header>
              <TextInput
                label='Male'
                value={this.state.fname}
                onChangeText={text => this.setState({ fname:text })}
              />
              <TextInput
                label='Female'
                value={this.state.sname}
                onChangeText={text => this.setState({ sname:text })}
              />
              <Button 
                icon="mood" 
                mode="contained" 
                style={{margin:10}}
                onPress={this.submitIt.bind(this)}>
                Calculate
              </Button>
              <DisplayLove data={this.state.result}/>
            </View>
          </>
      );
    };
};

const styles = StyleSheet.create({
  
});

export default App;
