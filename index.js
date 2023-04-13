import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from 'express';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 6879;
const app = express();
const server = http.createServer(app);

app.use(express.static("public"))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

server.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});