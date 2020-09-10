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

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#C1AA2F',
        fontSize: 30,
        marginTop: 0,
        textAlign: 'center',
    },

    text: {
        color: '#C1AA2F',
        fontSize: 25,
        fontFamily: 'Poppins_200ExtraLight',
    },

    textRegister: {
        color: '#C1AA2F',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 30,
        textDecorationLine: 'underline'
    }




    


});

export default styles;