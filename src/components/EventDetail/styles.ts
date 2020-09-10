import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C1AA2F',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
        fontFamily: 'Poppins_400Regular',
        color: '#32264d',
        fontSize: 18,
    },

    textDetail: {
        padding: 20,
    },

    btn: {
        backgroundColor: '#C1AA2F', 
        height: 70,
        width: '70%',
        borderRadius: 8,
        justifyContent: 'center',
        margin: 50
    },

    textBtn: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        margin: 0,
        padding: 0,
    },

    value: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },

    textValue:{
        fontSize: 40,
        fontFamily: 'Poppins_200ExtraLight',
        color: '#C1AA2F',
    },

    flags: {
        margin: 20,
    },

});

export default styles;

