import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'
import DocumentScreen from './screens/DocumentScreen'
4
export default function App() {
  
    
  return (
    
    
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Save A Life , Get A Life</Text>
    <AppContainer/>
    </ImageBackground>
 
  </View>
  );
}
const image = { uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5ffeb9baa5982fb59e2ad98a0a2f0b4e" };



const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
DocumentScreen: {screen:DocumentScreen}
})
const AppContainer =  createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  text: {
    color: "#CCCCFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  }
});


