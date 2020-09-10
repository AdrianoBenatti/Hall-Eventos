import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 40,
    },

    banner : {
        width: '100%',
        resizeMode: 'contain',  
    },

    title: {
        fontFamily: 'Poppins_200ExtraLight',
        color: '#C1AA2F',
        fontSize: 50,
        marginTop: 0,
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
        margin: 20
    },

    textBtn: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins_600SemiBold',
    },

});

export default styles;