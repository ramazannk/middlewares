import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";



const app = express();
const port = 3000;
let bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))

function bandNameGenerator (req, res, next){
  bandName = req.body["street"] + req.body["pet"]
  next()
}
app.use(bandNameGenerator)

app.post("/submit", (req, res) => {
  res.send(`h1>Your band name is:</h1><h2>${bandName}✌️</h2>`)
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
