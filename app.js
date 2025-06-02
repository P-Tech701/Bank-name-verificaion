const express = require("express")
const axios = require("axios")
const app = express()
const port = 3001

app.set("view engine", "ejs")

app.listen(port, () => {
    try {
       console.log(`server is running`) 
    } catch (error) {
        console.log(`error starting the server: ${error}`)
    }
})

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/resolve/:account_number/:bank_code", async (req, res) => {
    const { account_number, bank_code} = req.params
     const apiKey = "sk_test_67701ef60df3b11a537281fc7fd2f6352a175aa7";
    
        const response = await axios({
            method: 'GET',
            url: `https://api.paystack.co/bank/resolve`,
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            params: {
                account_number: account_number,
                bank_code: bank_code
            },
           
        });
        const accountName = response.data.data.account_name

        res.send({ accountName })
})