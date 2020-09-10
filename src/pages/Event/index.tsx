import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventDetail from '../../components/EventDetail';


function Event() {
    
    return (
        <View style={styles.container}  >
            <PageHeader title="25/09/2020  Formatura Nova Odessa /SP" />

            <EventDetail />
        </View>
    );
}


export default Event;