const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/static', express.static(`${__dirname}/css`, {
  maxAge: 0,
}));

app.get('*', (req, res, next) => {
  const page = req.path.replace('/', '');

  const htmlPath = path.resolve(__dirname, 'html', `${page}.html`);
  
  if (!fs.existsSync(htmlPath)) {
    res.redirect('/start');
  } else {
    fs.readFile(htmlPath, (err, content) => {
      if (err) {
          next('unknowing error')
      } else {
          res.send(`
        <!doctype html>
        <html>
            <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
              <link rel="stylesheet" href="/static/index.css">
            </head>
            <body>
            ${content}
            </body>
        </html>`);
      }
    });
  }
});

app.use((err, req, res) => {
  res.send(err);
})

app.listen(3000, () => { console.log('Listening 3000 port'); });