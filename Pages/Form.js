import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header";

function Form() {
    return(
        <>
            <Header title="Cadastro" />
            <View style={styles.container}>
                <Text>Future Form</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Form;
