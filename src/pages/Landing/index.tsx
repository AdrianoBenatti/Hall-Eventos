import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';


function Landing() {

    const { navigate } = useNavigation();

    function handleNavigateToListEvents(){
        navigate('Tabs');
    }

   return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
          

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToListEvents} style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.title}>
                        Hall {'\n'}
                    <Text style={styles.titleBold}>Eventos</Text>
                    </Text>
                </RectButton>
            </View>


        </View>    
   );
}

export default Landing;