import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventItem from '../../components/EventItem';

function SchoolList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Eventos Disponíveis Universidades" />

            <EventItem />
        </View>
    );
}

export default SchoolList;