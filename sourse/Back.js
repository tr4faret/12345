import React from 'react'
import {View, Text, StyleSheet,TextInput, Button} from "react-native";

export const Back = ({onSubmit}) => {
    const pressHandler = () => {
        onSubmit ('Test')
    }
    return(
        <View style = {styles.block}>
            <TextInput style = {styles.input}/>
            <Button title="Add" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        height:50,
    },
    input:{
        width:'90%',
        height:'100%',
        borderStyle:'solid',
        borderWidth: 2,
        borderColor:'#3949ab'
    }

})