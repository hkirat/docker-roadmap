const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res)=>{
   res.send('hello from express app');
})

app.listen(port, ()=>{
   console.log(`App is running at ${port}`);
})
