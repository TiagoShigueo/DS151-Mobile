const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/yahoo-finance", async (req, res) => {
  const { symbol } = req.query;
  try {
    // const response = await axios.get(`https://finance.yahoo.com/quote/${symbol}`);
    const response = await axios.get(
      `https://finance.yahoo.com/quote/MXRF11.SA`
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados do Yahoo Finance.");
  }
});

app.listen(port, () => {
  console.log(`Servidor intermediário em execução em http://localhost:${port}`);
});
