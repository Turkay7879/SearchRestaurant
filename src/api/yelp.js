import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer VKtS6iGrbOXB0CG6hB4vHir2wHtKIMnVHiMhPKD2Y08O5xLy7soH22H79oEH72Me7CpW_jcCmiCV3FL59ZHerIsl8Lx1Rwtqgbu40r9xoFufdgS09NTXxBCyIFjFYnYx"
    }
});