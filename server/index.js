import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/creature/:creature_id', (req, res) => {
  const id = req.params.creature_id;
  axios.get(`${process.env.API_ENDPOINT}/creature/${id}`, {
    headers: {
      'X-Api-Key': process.env.API_KEY,
    }
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.get('/api/5etools/creature/:creature_id(\\.json)?', (req, res) => {
  const id = req.params.creature_id;
  axios.get(`${process.env.API_ENDPOINT}/creature/${id}`, {
    headers: {
      'X-Api-Key': process.env.API_KEY,
    }
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.listen(process.env.PORT, () => {
  console.log(`App now listening at port ${process.env.PORT}`);
});
