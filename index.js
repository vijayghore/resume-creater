const { response } = require('express');
const express = require('express');
const pdf = require('html-pdf');

const dynamicResume = require('./dynamic-resume');
const app = express();

//Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const options = {
    "format": "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "border": "8mm"
};

app.get('/', (req, res, next) => {
   console.log("This is Resume Creater");
});

app.post('/resume-creater', (req, res, next) => {
    const userName = req.body.name;
    const lowercaseName = userName.toLowerCase();
    const noSpaceName = lowercaseName.replace(' ', '');
    const shortName = noSpaceName.slice(0, 10);

    // HTML TO PDF CONVERTING
    pdf.create(dynamicResume(req.body), options).toFile(__dirname + "/" + shortName + "-resume.pdf", (error, response) => {
        if (error) throw Error("File is not created");
    });
});

let port = 4000;
app.listen(port, () => console.log('Server is running on : ' + port));