import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/creature/:creature_id', (req, res) => {
  const id = req.params.creature_id;
  console.log(id);
  console.log(process.env.API_ENDPOINT);
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