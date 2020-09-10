import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
    },

    banner : {
        width: '100%',
        resizeMode: 'contain',  
    },

    title: {
        fontFamily: 'Poppins_200ExtraLight',
        color: '#C1AA2F',
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
    },

    form: {
        display: 'flex',
        alignItems: 'center',

    },

    input: {
        backgroundColor: '#fff',
        width: 270,
        height: 45,
        borderRadius: 8,
        padding: 10,
        color: '#C1AA2F',
        margin: 10,
            borderWidth: 1,
        borderColor: '#C1AA2F',
    },

    textInput: {
        color: '#C1AA2F',
        fontSize: 18
    },

    btn: {
        backgroundColor: '#C1AA2F', 
        height: 70,
        width: '70%',
        borderRadius: 8,
        justifyContent: 'center',
        margin: 10
    },

    textBtn: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins_600SemiBold',
    },

    textRegister : {
        color: '#C1AA2F',
        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 20
    },

    flags: {
        margin: 20
    }

    


});

export default styles;