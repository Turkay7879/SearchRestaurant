import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather 
            name="search" 
            size={40} 
            color="black"
            style={styles.icon}
        />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Search" 
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#DDDDDD",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        margin: 20,
        marginBottom: 0,
    },
    icon: {
        alignSelf: "center",
        padding: 5
    },
    input: {
        flex: 1,
        padding: 5,
        fontSize: 18
    }
});

export default SearchBar;