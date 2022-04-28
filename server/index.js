const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/getData', (req, res) => {
    let data = require("./assets/data/data.json")
  res.send(data); 
}); 