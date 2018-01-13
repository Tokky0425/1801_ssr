import React from 'react';
import ReactDOM from 'react-dom';
import express from 'express';
import renderer from './renderer';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  renderer(req, res);
});

app.listen(9002, () => {
  console.log('Listening on port 9002');
});
