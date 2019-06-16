import React from 'react';
import { View, Text, Dimensions, TouchableNativeFeedback, StyleSheet} from 'react-native'

const style= StyleSheet.create({
    button:{
        fontSize:30,
        height: Dimensions.get('window').height/6,
        width: Dimensions.get('window').width/4,
        padding:10,
        backgroundColor:'#7bacfc',
        textAlign: 'center',
        borderWidth: 1,
        borderColor:'#888'
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231',
    },
    buttonDouble:{
        width: Dimensions.get('window').width/4*2,
    },
    buttonTriple:{
        width: Dimensions.get('window').width/4*3,
    }

})

export default  props =>{
    const stylesButtons = [style.button]
    if(props.double) stylesButtons.push(style.buttonDouble)
    if(props.triple) stylesButtons.push(style.buttonTriple)
    if(props.operation) stylesButtons.push(style.operationButton)


    return(
        <View>
    <TouchableNativeFeedback onPress={() => props.onClick(props.label)}>
        <Text style={stylesButtons}>{props.label}</Text>
    </TouchableNativeFeedback>
    </View>
)
}