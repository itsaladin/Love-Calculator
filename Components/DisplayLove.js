import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const DisplayLove = (prop) => {
    console.log(prop);

    if(prop.data == 'loading'){
        return <Text style={styles.text}> Wait for data processing</Text>
    }
    if(prop.data.message){
        return <Text style={styles.text}> Someting went wrong try againg </Text>
    }
    else{
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{prop.percentage} %</Text>
                <Text style={styles.text}>{prop.result}</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  text:{
      fontSize:30,
      textAlign:"center",
  }
});

export default DisplayLove;
