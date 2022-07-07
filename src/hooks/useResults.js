import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    const searchAPI = async searchTerm => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "San Jose"
                }
            });
            setResults(response.data.businesses);
            setErrMsg("");
        } catch (err) {
            setErrMsg("Something went wrong");
        }
    }

    // useEffect() lets us run given func. only once
    // (Only if 2nd arg. is an empty arr.)
    // This will let us show a boilerplate search screen
    // When the user opens app for the 1st time
    useEffect(() => {
        searchAPI("Pasta");
    }, []);

    return [searchAPI, results, errMsg];
}