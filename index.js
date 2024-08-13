import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));
const API_URL = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data="

app.get("/", (req, res) =>{
    res.render("index.ejs", {testo: "Inserisci URL", URL: "images/qr-code-feature.jpg"});
});

app.post("/generate", async (req, res) =>{
    const URL = req.body["link"];
    res.render("index.ejs", {testo : "Success generation of QR-CODE",URL : API_URL+URL });
});

app.listen(port, () =>{
    console.log("Server runnig on port "+port);
});