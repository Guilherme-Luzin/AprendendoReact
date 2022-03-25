import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Picker from 'react-native-picker-select';
import logo from './Assets/user_4_add.png';

import Header from "./Header";

function Form() {
    const navigation = useNavigation();
    const sexo = [
        {label: 'Masculino', value: '1'},
        {label: 'Feminino', value: '2'},
        {label: 'Outros', value: '3'}
    ]
    const placeholder = { label:'Informe Seu Sexo', value: null, color: 'black'};

    return(
        <>
            <Header title="Cadastro" />
            <View style={styles.container}>
                <Image source={logo} style={styles.topImage} />
                <Text style={styles.title}>Preencha o Formulário Abaixo</Text>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Digite Seu Nome" autoCapitalize="words" />
                <TextInput style={styles.input} placeholder="Digite Sua Idade" keyboardType="numeric"/>
                <Picker placeholder={placeholder} onValueChange={() => {}} style={pickerSelectStyles} items={sexo} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    inputContainer: {
        margin: 20,
        alignItems: 'stretch',
    },
    topImage: {
        margin: 20,
    },
    title: {
        fontSize: 20,
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonCancel: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
    inputAndroid: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
});

export default Form;
