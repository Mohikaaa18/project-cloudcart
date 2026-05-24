const express = require('express')

const app = express()

app.get('/', (req, res) => {

    res.send(`
    
    <html>
    <head>
        <title>CloudCart DevSecOps</title>

        <style>

            body{
                font-family: Arial;
                background-color: #f4f4f4;
                text-align: center;
                padding-top: 50px;
            }

            .container{
                background: white;
                width: 60%;
                margin: auto;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px gray;
            }

            h1{
                color: #2c3e50;
            }

            .success{
                color: green;
                font-size: 20px;
                margin-top: 20px;
            }

            .section{
                margin-top: 25px;
                text-align: left;
            }

        </style>

    </head>

    <body>

        <div class="container">

            <h1>CloudCart DevSecOps Pipeline</h1>

            <p class="success">
                Application Running Successfully
            </p>

            <div class="section">
                <h3>Integrated Features</h3>

                <ul>
                    <li>Jenkins CI/CD Pipeline</li>
                    <li>GitHub Actions YAML Pipeline</li>
                    <li>SAST Security Scan</li>
                    <li>Dependency Scan</li>
                    <li>Trivy Vulnerability Scan</li>
                    <li>Terraform IaC Validation</li>
                    <li>Policy Gates</li>
                    <li>Secrets Management</li>
                    <li>DEV → STAGE → PROD Deployment</li>
                </ul>
            </div>

        </div>

    </body>

    </html>

    `)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})