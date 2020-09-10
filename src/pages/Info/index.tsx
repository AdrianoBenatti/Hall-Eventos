import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';


function Landing() {

    const { navigate } = useNavigation();

    function handleNavigateToLanding(){
        navigate('Tabs');
    }

   return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
          
            <View>
                <Text style={styles.titleBold}>
                     Obrigado pela compra! 
                </Text>
                <Text style={styles.text}>
                    Você recebrá o ingresso 
                    pelo e-mail cadastrado.
                </Text>

                <RectButton onPress={handleNavigateToLanding}>
                    <Text style={styles.textRegister}>
                       Voltar para Eventos
                    </Text>
                </RectButton>
            </View>


        </View>    
   );
}

export default Landing;