import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Picker from 'react-native-picker-select';
import logo from './Assets/user_4_add.png';

import Header from "./Header";

function Form() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexos, setSexo] = useState('');

    const sexo = [
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Feminino', value: 'Feminino'},
        {label: 'Outros', value: 'Outros'}
    ]

    function handleNameChange(name){ setNome(name); }
    function handleAgeChange(idade){ setIdade(parseInt(idade)); }
    function handleSexChange(sexo){ setSexo(sexo); }

    const placeholderSexo = { label:'Informe o Sexo', value: null, color: 'black'};

    function Imprime() {
        alert(`Dados Salvos com sucesso: \n${nome}, \n${idade}, \n${sexos}`);
    }

    return(
        <>
            <Header title="Cadastro" />
            <View style={styles.container}>
                <Image source={logo} style={styles.topImage} />
                <Text style={styles.title}>Preencha o Formulário Abaixo</Text>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Informe o Nome" autoCapitalize="words" onChangeText={handleNameChange} />
                <TextInput style={styles.input} placeholder="Informe a Idade" keyboardType="numeric" onChangeText={handleAgeChange} />
                <Picker placeholder={placeholderSexo} onValueChange={handleSexChange} style={pickerSelectStyles} items={sexo} />
                <TouchableOpacity style={styles.button} onPress={Imprime}>
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
