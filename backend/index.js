const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", (ws) => {
  ws.send("Welcome");
  ws.on("message", (message) => {
    ws.send(`got your message!`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.get("/", (req, res) => res.send("Hello from chat app"));

server.listen(8080, () => console.log("listening to 8080"));
