import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import flagsImg from '../../assets/images/bandeiras.png';

function EventItem() {
    const { navigate } = useNavigation();

    function handleNavigateToLogin(){
        navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.textDetail}>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec molestie, orci sed sollicitudin sagittis, quam dui consectetur nisl,
                     quis egestas lectus ligula sit amet magna. 
                </Text>
                <View style={styles.value}>
                    <Image source={flagsImg} style={styles.flags} />
                    <Text style={styles.textValue}>R$150,00</Text>
                </View>
            </View>
           
            <RectButton onPress={handleNavigateToLogin} style={styles.btn}>
                <Text style={styles.textBtn}>Comprar</Text>
            </RectButton>
        </View>
    );
}

export default EventItem;