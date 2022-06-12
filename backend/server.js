const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log('on home page')
})

app.listen(8080)