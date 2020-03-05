const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/static', express.static(`${__dirname}/css`));

app.get('/details', (req, res) => {
  const page = req.path.replace('/', '');

  const htmlPath = path.resolve(__dirname, 'html', `${page}.html`);

  fs.readFile(htmlPath, (err, content) => {
    if (err) {
        res.send(err);
    } else {
        res.send(`
            <!doctype html>
            <html>
                <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
                <link rel="stylesheet" href="/static/index.css">
                <meta http-equiv="refresh" content="5"></meta>
                </head>
                <body>
                ${content}
                </body>
            </html>`);
    }
  });
});

app.listen(3000, () => { console.log('Listening 3000 port'); });