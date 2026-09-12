const express = require('express');
const http = require('http');
const path = require('path');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');

const app = express();
const server = http.createServer(app);

app.use('/uv/', express.static(uvPath));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Servidor ativo na porta ${PORT}`));
