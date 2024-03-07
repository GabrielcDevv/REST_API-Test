import  express  from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port =  3000;
const API_URL = " http://numbersapi.com/";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function getNumber(){
    const randomNumber = Math.floor(Math.random() * 1000);
    return randomNumber;
}

app.get("/", async (req, res)=>{
 const toGetNumber = getNumber();
 const toGet = await axios.get(API_URL + toGetNumber);
 const string = JSON.stringify(toGet.data);
 const newString = string.replace(/"/g, " ");
 res.render("index.ejs",{content: newString, thenumber:toGetNumber});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });