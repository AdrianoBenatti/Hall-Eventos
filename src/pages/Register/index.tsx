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

 

   return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
          
            <View>
                <Text style={styles.title}>
                    Cadastro 
                </Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>Nome</Text>    
                    </TextInput>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>E-mail</Text>    
                    </TextInput>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>Senha</Text>    
                    </TextInput>
                    <TextInput style={styles.input} >
                        <Text style={styles.textInput}>Confirmar Senha</Text>    
                    </TextInput>
                    <RectButton onPress={handleNavigateToPayment} style={styles.btn}>
                        <Text style={styles.textBtn}>Cadastrar</Text>
                    </RectButton>
                </View>
            </View>


        </View>    
   );
}

export default Landing;