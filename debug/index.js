import express from 'express';

const app = express();
const PORT = 5000;


app.use(express.static("/workspaces/UsefullyUselessThings"));

app.get('/', (req, res) => {
  res.sendFile("/workspaces/UsefullyUselessThings/docs/index.html");
});

app.listen(PORT, () => {
  console.log(`Development app listening on PORT ${PORT}`);
});

// put this under app.get to have simple string appear -> res.send('Hello World');