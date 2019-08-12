import React from "react"
import {Text, TouchableOpacity} from "react-native"

const Button = ({title, onPress}) => {
    const {buttonStyle, textStyle} = styles
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )

}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        bordercolor: '#007aff',
        borderOpacity: 0.7,
        margin:5 
    }
    ,
    textStyle: {
        fontSize: 17,
        fontWeight: '900',
        alignSelf: 'center',
        color: '#007aff',
        paddingTop:10,
        paddingBottom: 10 
    }
}

export {Button}