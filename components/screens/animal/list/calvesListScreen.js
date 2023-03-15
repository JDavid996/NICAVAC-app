import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../../../../database/firebase';
import moment from 'moment';

const CalvesListScreen = (props) => {

    const [animals, setAnimals] = useState([]);

    const cattleId = props.route.params.cattleId

    //lectura de los datos de los animales
    useEffect(() => {
        firebase.db.collection('animals').onSnapshot((querySnapshot) => {
            const animals = [];
            querySnapshot.docs.forEach((doc) => {
                const { animalCode, animalName, animalGenerer, animalBirth, animalCattle } = doc.data();
                const date = animalBirth
                if (date != null) {
                    const timestamp = date.toString()
                    const milliseconds = timestamp.substring(18, 28) + timestamp.substring(42, 45)
                    const dateFormatl = new Date(parseInt(milliseconds))
                    const now = moment();
                    const mo = now.diff(dateFormatl, 'months');
                    if ((mo <= 12) && (animalCattle === cattleId)) {
                        animals.push({
                            animalId: doc.id,
                            animalCode,
                            animalName,
                            animalGenerer,
                            animalBirth,
                            animalCattle,
                        });
                    }
                }

            });
            setAnimals(animals);
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            {animals.map((animal) => {
                return (
                    <ListItem style={styles.list} key={animal.animalId}
                        onPress={() => props.navigation.navigate('animalDetailsScreen', {
                            animalId: animal.animalId
                        })}>
                        <Avatar
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/4478/4478312.png',
                            }}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={{ fontWeight: "bold" }}>{animal.animalName}</ListItem.Title>
                            <ListItem.Subtitle>Código: {animal.animalCode}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    list: {
        borderRadius: 10,
    },
    txt: {
        backgroundColor: '#bfbfbf'
    }
})

export default CalvesListScreen;