import { Image, StyleSheet,View,Text, Platform } from 'react-native';
import {useState} from "react";
import SplashScreen from "@/components/ui/screen/SplashScreen"
import DashBoard from "@/components/ui/screen/DashBoard";
import StackNavigator from "@/app/Navigation/Stack_Navigation/StackNavigator";

export default function HomeScreen() {
    const [isLoading, setIsLoading]=useState(true);
      return (
          <View style={styles.container}>
              {isLoading?(
                      <SplashScreen onFinish={()=>{setIsLoading(false)}}/>
                  ):(
                      <StackNavigator/>
                  )}

          </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }

});
