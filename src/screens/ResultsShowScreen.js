import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, FlatList, Image, ScrollView} from "react-native"
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {

        }
    }
    useEffect(() => { getResult(id) }, []);

    if (!result) {
        return null;
    }

    return <>
        <Text style={styles.name}>{result.name}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image
                    source={{ uri: item }}
                    style={styles.image}
                />
            }}
            style={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 10,
        borderRadius: 5,
    },
    list: {
        alignSelf: "center",
    }
});

export default ResultsShowScreen;