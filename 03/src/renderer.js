import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const render = content => {
  return `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

export default (req, res) => {
  const content = renderToString(<App />);
  const renderedPage = render(content);
  res.status(200).send(renderedPage);
};
