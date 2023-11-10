import express from 'express';

const app = express();
const PORT = 5000;

import path from "path";

app.use(express.static("/workspaces/UsefullyUselessThings"));
app.use(express.static(path.join(__dirname), "scripts/index.css"));

app.get('/', (req, res) => {
  res.sendFile("/workspaces/UsefullyUselessThings/docs/index.html");

});

app.listen(PORT, () => {
  console.log(`Development app listening on PORT ${PORT}`);
});

// put this under app.get to have simple string appear -> res.send('Hello World');