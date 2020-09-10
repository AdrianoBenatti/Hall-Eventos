import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function EventItem() {
    const { navigate } = useNavigation();

    function handleNavigateToEvent(){
        navigate('Event');
    }


    return (
        <View style={styles.container}>
            <RectButton onPress={handleNavigateToEvent} style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>25/09/2020 - Formatura Nova Odessa /SP</Text>
                    <Text style={styles.subject}>Lorem ipsum dolor sit amet consectetur adipiscing elit...</Text>
                </View>
            </RectButton>
        </View>
    );
}

export default EventItem;