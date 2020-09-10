import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Events() {
    return (
        <View style={styles.container} >
            <PageHeader title="Eventos Disponíveis Empresas" />
        </View>
    );
}


export default Events;