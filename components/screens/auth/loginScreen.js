import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../../database/firebase';

export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticaded, setAuthenticaded] = useState(false);
    const [isloading, setIsloading] = useState(false);

    //función para iniciar sesión
    const signInUser = async () => {
        setIsloading(true)
        await firebase.authentication.signInWithEmailAndPassword(email, password)
            .then(() => {
                setAuthenticaded(true)
                navigation.push('cattlesListScreen');
            })
            .catch(() => {
                Alert.alert(
                    "¡Ha ocurrido un error!",
                    "Las credenciales son incorrectas",
                    [
                        { text: "Ok" }
                    ]
                );
            })
        setIsloading(false)
    }

    return (
        <ScrollView style={styles.container}>{
            isloading ? (
                <View style={styles.containerLoading}>
                    <ActivityIndicator size="large" color='#346A4A' />
                </View>
            ) : !authenticaded ? (
                <View>
                    <View style={styles.containerLogo}>
                        <Image
                            source={require('../../src/Nicavacverde.png')}
                        />
                        <Text style={{ fontSize: 40, color: '#346a4a', fontWeight: "bold", marginBottom: 50 }}>NICAVAC</Text>
                    </View>
                    <View style={styles.containerOptions}>

                        <TextInput placeholder='Correo' style={styles.input} value={email} onChangeText={text => setEmail(text)}></TextInput>
                        <TextInput secureTextEntry={true} placeholder='Contraseña' style={styles.input} value={password} onChangeText={text => setPassword(text)}></TextInput>

                        <TouchableOpacity style={styles.btnLogin} onPress={signInUser}>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#ffffff', fontWeight: "bold" }}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRegister} onPress={() => props.navigation.navigate('registerScreen')}>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#242424', fontWeight: "bold" }}>Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null
        }</ScrollView>);
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#ffffff'
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#346a4a',
        fontSize: 20
    },
    btnLogin: {
        backgroundColor: '#346a4a',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    btnRegister: {
        backgroundColor: '#B0B0B0',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    containerOptions: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 0,
    }
});