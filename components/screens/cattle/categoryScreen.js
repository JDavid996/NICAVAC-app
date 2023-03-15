import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const CategoryScreen = (props) => {

    const cattleId = props.route.params.cattleId

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.containerOptions}>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('cowsListScreen', { cattleId })}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/2395/2395765.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Vacas</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('bullsListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/3819/3819472.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Toros</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('oxenListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/3570/3570832.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Bueyes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('porkerListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/2298/2298414.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Cebones</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('steersListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/1660/1660788.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Novillos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('yearlingsListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/4478/4478312.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Añojos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('calvesListScreen', { cattleId })}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={50}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/4478/4478312.png',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontSize: 30, color: '#242424' }}>Terneros</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ListItem style={{ padding: 0 }}>
                    <TouchableOpacity style={styles.btnA}
                        onPress={() => props.navigation.navigate('newAnimalScreen', { cattleId })}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}>Agregar Animal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnA}
                        onPress={() => props.navigation.navigate('employeesScreen', { cattleId })}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: '#ffffff', fontWeight: 'bold' }}>Empleados</Text>
                    </TouchableOpacity>
                </ListItem>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    containerOptions: {
        flex: 1,
        justifyContent: 'center',
    },
    btn: {
        borderWidth: 1,
        borderColor: '#242424',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    btnA: {
        backgroundColor: '#346a4a',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        width: 170
    }
})
export default CategoryScreen;