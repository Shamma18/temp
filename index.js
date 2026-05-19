import express from "express";
import os from "os";

export const app = express();

app.get("/", (req, res) => {
    res.send("How are you!!!");
});

app.get("/cpu", (req, res) => {
    for (let i = 0; i < 10000000000; i++) {
        Math.random();
    }
    res.send("Hello World!");
});

app.get("/host", (req, res) => {
    res.send(os.hostname());
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});