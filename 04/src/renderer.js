import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './router/Routes';

const render = req => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

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
  const renderedPage = render(req);
  res.status(200).send(renderedPage);
};
