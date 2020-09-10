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
        fontSize: 68,
        lineHeight: 70,
        marginTop: 0,
        textAlign: 'center',
    },

    titleBold: {
        fontFamily: 'Poppins_300Light',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 300,
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#000',
    },

    


});

export default styles;