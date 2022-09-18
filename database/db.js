import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-xqt84dl-shard-00-00.tqdn9c1.mongodb.net:27017,ac-xqt84dl-shard-00-01.tqdn9c1.mongodb.net:27017,ac-xqt84dl-shard-00-02.tqdn9c1.mongodb.net:27017/?ssl=true&replicaSet=atlas-w6iriv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting", error);
    }
}

export default Connection;