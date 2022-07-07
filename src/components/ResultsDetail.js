import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    return <View style={styles.view}>
        <Image
            style={styles.image} 
            source={{ uri: result.image_url }} 
        />
        {
            result.name.length < 25 
                ? <Text style={styles.name}>{result.name}</Text> 
                : <Text style={styles.name}>{result.name.substring(0, 25)}...</Text>
        }
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        marginRight: 10,
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 5,
        marginVertical: 15,
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    }
});

export default ResultsDetail;