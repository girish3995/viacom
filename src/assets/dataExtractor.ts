const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

app.get('/cities', cors(), (req,result) => {
    let city=['Mumbai', 'Punjab', 'Hyderabad']
  result.end(JSON.stringify(city));
});

app.get('/description', cors(), (req,result) => {
    let description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  result.end(JSON.stringify(description));
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });