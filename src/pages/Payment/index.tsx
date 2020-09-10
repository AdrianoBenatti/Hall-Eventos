import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import flagsImg from '../../assets/images/bandeiras.png';

function Payment() {
    
    const { navigate } = useNavigation();

    function handleNavigateToInfo(){
        navigate('Info');
    }

    return (
        <View style={styles.container}  >
            <PageHeader title="Pagamento" />

            <View style={styles.form}  >
                <Text style={styles.title}>Cartão de crédito</Text>

                <TextInput style={styles.input} >
                    <Text style={styles.textInput}>Número do cartão</Text>    
                </TextInput>

                <TextInput style={styles.input} >
                    <Text style={styles.textInput}>Nome no cartão</Text>    
                </TextInput>

                <TextInput style={styles.input} >
                    <Text style={styles.textInput}>Expiração MM/AA</Text>    
                </TextInput>

                <TextInput style={styles.input} >
                    <Text style={styles.textInput}>Código de Segurança</Text>    
                </TextInput>

                <Image source={flagsImg} style={styles.flags} />

                <RectButton onPress={handleNavigateToInfo} style={styles.btn}>
                    <Text style={styles.textBtn}>Pagar</Text>
                </RectButton>
            </View>
        </View>
    );
}


export default Payment;