import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';


function Landing() {

    const { navigate } = useNavigation();

    function handleNavigateToPayment(){
        navigate('Payment');
    }

    function handleNavigateToRegister(){
        navigate('Register');
    }

    

   return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
          
            <View>
                <Text style={styles.title}>
                    Login 
                </Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>E-mail</Text>    
                    </TextInput>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>Senha</Text>    
                    </TextInput>
                    <RectButton onPress={handleNavigateToPayment} style={styles.btn}>
                        <Text style={styles.textBtn}>Login</Text>
                    </RectButton>
                    <RectButton onPress={handleNavigateToRegister}>
                        <Text style={styles.textRegister}>
                            Não é cadastrado? {'\n'} 
                            Clique aqui e cadastre-se!
                        </Text>
                    </RectButton>
                </View>
            </View>


        </View>    
   );
}

export default Landing;