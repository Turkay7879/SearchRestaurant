import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ results, title, navigation }) => {
    if (!results.length) {
        return null;
    }
    
    return <View style={styles.list}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return <TouchableOpacity
                    onPress={() => {navigation.navigate("ResultsShow", { id: item.id })}}
                >
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    list: {
        margin: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default withNavigation(ResultsList);