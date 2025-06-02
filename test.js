const axios = require("axios")

async function fetch_api() {

    const apiKey = "sk_test_67701ef60df3b11a537281fc7fd2f6352a175aa7";

    const response = await axios({
        method: 'GET',
        url: `https://api.paystack.co/bank/resolve`,
        headers: {
            'Authorization': `Bearer ${apiKey}`
        },
        params: {
            account_number: "2291942573",
            bank_code: "033"
        },
       
    });
    const accountName = response.data.data.account_name
    console.log(accountName);
    console.log(response.data)

}

fetch_api()