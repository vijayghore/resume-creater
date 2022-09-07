const dynamicResume = (details) => {
    return `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>${details.name} Resume</title>
    <style>
        body {
            background-color: rgb(121, 128, 228);;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
            padding: 8mm;
        }

        img {
            width: 150px;
            border: 2px solid red;
            border-radius: 50%;
        }

        .section{
            padding: 5px 0px;
        }
        h3{
            color: red;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="address text-center">
            <img class="mx-auto d-block"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx_P1zJcOHhpA_PDhyNMToHfAIgOdkaMUzA&usqp=CAU"
                 alt="profile pic">
            <h1 class="text-center">${details.name} </h1>
            <p class="my-0">${details.email}</p>
            <p class="my-0">${details.phone}</p>
            <p class="my-0">${details.address}</p>
        </div>
        <hr>
        <div class="objective section">
            <h3>Career Objective: </h3>
            <p class="mx-4">Self-motivated team player seeking a position as a web developer where I can apply my
                advanced knowledge of web design with my skills to meet client needs and exceed their expectations
            </p>
        </div>
        <hr>
        <div class="edu-info section">
            <h3>Educational Information: </h3>
            <table class="table text-center" border="1">
                <tr>
                    <th>Qualification</th>
                    <th>Institute</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>SSC</td>
                    <td>${details.qualification.ssc.institute}</td>
                    <td>${details.qualification.ssc.percentage}</td>
                </tr>
                <tr>
                    <td>HSC</td>
                    <td>${details.qualification.hsc.institute}</td>
                    <td>${details.qualification.hsc.percentage}</td>
                </tr>
                <tr>
                    <td>BCA</td>
                    <td>${details.qualification.bca.institute}</td>
                    <td>${details.qualification.bca.percentage}</td>
                </tr>
                <tr>
                    <td>MCA</td>
                    <td>${details.qualification.mca.institute}</td>
                    <td>${details.qualification.mca.percentage}</td>
                </tr>
            </table>
        </div>
        <hr>
        <table class="table table-borderless section">
            <tr>
                <td><h3>Skills</h3></td>
                <td><h3>Hobbies</h3></td>
            </tr>
            <tr>
                <td>
                    <div class="skills">
                        <ul>
                            <li>${details.skills.s1} </li>
                            <li>${details.skills.s2} </li>
                            <li>${details.skills.s3} </li>
                            <li>${details.skills.s4} </li>
                            <li>${details.skills.s5} </li>
                            <li>${details.skills.s6} </li>
                        </ul>
                    </div>
                </td>
                <td>
                    <div class="hobbies">
                        <ul>
                            <li>${details.hobbies.h1}</li>
                            <li>${details.hobbies.h2}</li>
                            <li>${details.hobbies.h3}</li>
                        </ul>
                    </div>
                </td>
            </tr>
        </table>
        <hr>
        <div class="techknow section">
            <h3>Technical Knowledge: </h3>
            <ul>
                <li>Knowledge of Front-End, Back-End</li>
                <li>Hands on project done in technologies mentioned</li>
                <li>Expertise in database</li>
                <li>Attended the Workshops and Seminars on Webdevelopment</li>
                <li>Got awarded in the Hackathon.</li>
            </ul>
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = dynamicResume;