# offline-lan-chat-app
A real-time offline chat application using Node.js, Express, and Socket.IO over local Wi-Fi.

This project allows multiple devices connected to the same Wi-Fi network to chat with each other in real time. It was built to understand **networking, client–server communication, and WebSockets**.

 Features
- Real-time messaging
- Works completely offline (LAN only)
- Multiple device support (phones + laptops)
- Simple web-based interface

Tech Stack
- Node.js
- Express.js
- Socket.IO
- HTML & JavaScript

 How It Works
1. One device runs the Node.js server
2. Other devices connect using the server’s **local IP address**
3. Messages are sent using **WebSockets** over the local network

 How to Run
```bash
npm install
node server.js
