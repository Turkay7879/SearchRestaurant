import React, { useState } from "react";
import {Text, StyleSheet, ScrollView} from "react-native"
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchAPI, results, errMsg] = useResults();

    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return <>
        <SearchBar 
            term={term} 
            onTermChange={(newTerm => setTerm(newTerm))} 
            onTermSubmit={() => { searchAPI(term) }}
        />
        { errMsg ? <Text>{errMsg}</Text> : null}

        <ScrollView>
            <ResultsList 
                results={filterByPrice('$')} 
                title="Cost Effective"
            />
            <ResultsList 
                results={filterByPrice('$$')} 
                title="Bit Pricier"
            />
            <ResultsList 
                results={filterByPrice('$$$')} 
                title="Big Spender"
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({});

export default SearchScreen;