
# Resume Creater | Create Resume Easily

**(This App is in development phase so some features may not work properly)**

Here is the new resume creater app by which you can create your resume.
You can integrate it in your project to create resume.
From front end you will all the necessary information and send it to this api in body
then it will create resume for you from the data you provided.
## Tech Stack

- Node, Express
- Html, Css
- Bootstrap


## How to start with iCalc
Clone the project
```bash
    git clone https://github.com/vijayghore/resume-creater
```
Go to the project directory
```bash
    cd resume-creater
```
Install Dependencies
```bash
    npm install
```
Start the server
```bash
    nodemon index.js
```

## API Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Not - Required**.        | 

#### Endpoints
```http
  GET /
```
```http
  POST /resume-creater
```
Body will be given in json format as below in post request:

#### Sample Body
```http
{
    "name":"Vijay Ghore",
    "email": "abc@gmail.com",
    "phone": "123456789",
    "address": "Amt, MH",
    "skills": {
        "s1": "Html",
        "s2": "Css",
        "s3": "JavaScript",
        "s4": "ReactJs",
        "s5": "NodeJs",
        "s6": "MongoDb"
    },
    "hobbies": {
        "h1": "Photography",
        "h2": "Trekking",
        "h3": "Cycling"
    },
    "qualification": {
        "ssc":{
            "institute": "Sample 10th School",
            "percentage": "68.18"
        },
        "hsc":{
            "institute": "Sample 12th College",
            "percentage": "54.45"
        },
        "bca":{
            "institute": "Graduation College",
            "percentage": "74.65"
        },
        "mca":{
            "institute": "Post Grad College",
            "percentage": "65.86"
        }
    }
}
```

## Authors

- [@vijayghore](www.linkedin.com/in/vijay-17)

## 🚀 About Me
I'm a Full Stack Web Developer love to code things in simple way. Follow me on social platforms
- [Linkedin](www.linkedin.com/in/vijay-17)
- [Github](https://github.com/vijayghore)

## Feedback

If you have any feedback or suggestion, please reach out to me at vijayghore@gmail.com