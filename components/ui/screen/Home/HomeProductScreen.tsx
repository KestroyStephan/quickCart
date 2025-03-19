import {View, Text, StyleSheet} from "react-native";

export  default  function HomeProductScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Product Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})