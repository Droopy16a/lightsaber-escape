// WebSocket server for sharing coordinates
const fs = require('fs');
const https = require('https');
const { Server } = require('ws');
const os = require('os');
const dns = require('dns');

const port = 4000;

// Load SSL certificate and key
const server = https.createServer({
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem'),
});

const wss = new Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');
  ws.on('message', (message) => {
    // Broadcast received message to all other clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });
});

// Get hostname and IPv4 address
const hostname = os.hostname();
dns.lookup(hostname, { family: 4 }, (err, server_ip) => {
  if (err) {
    console.error('Error getting server IPv4 address:', err);
  } else {
    console.log(`Server hostname: ${hostname}`);
    console.log(`Server IPv4 address: ${server_ip}`);
    server.listen(port, server_ip, () => {
      console.log(`WebSocket Secure server running at wss://${server_ip}:${port}`);
    });
  }
});
