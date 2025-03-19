import {Text,View,Image, StyleSheet, Animated} from "react-native";
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/CollorPallet";
import appJson from '../../../app.json';

export default function SplashScreen({onFinish}:any){
    const logo = require('../../../assets/images/logo/logo-foodie.png');
    const progress = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(progress,{
            toValue:100,
            duration:5000,
            useNativeDriver:false
        }).start(()=>{
            onFinish();
        });
    }, [onFinish]);
    return(
        <View style={styles.container}>
            <View style={styles.logoFoodie}>
                <Image
                    style={styles.logo}
                    source={logo}
                    resizeMode={'contain'}/>
            </View>
            <Text>Shop Smart, Shop Fast - Your store in Your Pocket</Text>
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[styles.progressbar,
                        {width:progress.interpolate({inputRange:[0,100], outputRange:['0%','100%']})}]}/>
            </View>
            <View style={styles.bottom}>
                <Text>Version : {appJson.expo.version}</Text>
                <Text>From : Spider.Net</Text>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    bottom:{
        width:'100%',
        height:50,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between'

    },
    progressbar:{
      backgroundColor:COLORS.orange,
      borderRadius:5,
      height:'100%'
    },
    progressContainer:{
        width:'80%',
        height:5,
        backgroundColor:COLORS.darkGray,
        overflow:'hidden',
        borderRadius:5,
        marginTop:10

    },
    logo:{
        height:70
    },
    logoFoodie:{

    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})