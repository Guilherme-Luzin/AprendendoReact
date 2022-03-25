import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from './Assets/adduser.ico';

import Header from "./Header";

function Form() {
    const navigation = useNavigation();
    return(
        <>
            <Header title="Cadastro" />
            <View style={styles.container}>
                <Image source={logo} style={styles.topImage} />
                <Text style={styles.title}>Preencha o Formulário Abaixo</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    topImage: {
        margin: 20,
    },
    title: {
        fontSize: 20,
    }
});

export default Form;
