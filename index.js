const express = require('express');
const app = express()
const port = 5100
const { default: mongoose } = require('mongoose');


mongoose.connect('mongodb+srv://ksebin96:tpqls0417!@cluster0.34voyd1.mongodb.net').then(() => {console.log('MongoDB Connected')})
 .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}`));

