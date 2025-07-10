# REAL-TIME-CHAT-APPLICATION
COMPANY: CODTECH IT SOLUTIONS
NAME: DIVYANJALI DINKAR
INTERN ID: CT04DN697
DOMAIN : FRONT END DEVELOPMENT
DURATION : 4 WEEKS
MENTOR : NEELA SANTOSH
##Project Title: Real-Time Chat Application
Description:
The Real-Time Chat Application is an interactive and responsive web application communication platform where users can send messages in real-time utilizing contemporary web technologies. The project illustrates the use of full-duplex communication through WebSockets by means of Socket.IO, with a stylishly styled front-end crafted in React.js.

The main objective of this project was to create an operational chat system that allows various users to communicate in real-time, mimicking the operations of contemporary messaging applications. The user interface is minimalistic and responsive, intended to appear smart both on the desktop and smaller screens. It displays a timestamped chat view, visually distinguishes between the receiver and sender, and refreshes immediately as messages are being sent.

The application is segregated into two primary components:

Backend (Server-side): Built with Node.js and Express.js, the server sets up a WebSocket connection via Socket.IO. The server listens for messages from clients and sends them out to all other connected users.

Frontend (Client-side): Developed with React.js, the frontend is connected to the server via the Socket.IO client. It has a live UI with an interactive interface where users can input messages, send them through a button or Enter press, and read the entire conversation history in real-time.
The chat interface is also beautified using custom CSS styling to produce bubble-like messages with separate colors for both sender and receiver, and automatic scrolling for prolonged chats. It even supports timestamping in order to monitor when every message was sent.
For modularity and maintainability, the code is neatly divided into directories (/server and /client). This makes future additions such as authentication, presence indicators, or private rooms easy.

Used Technologies:
Frontend: React.js, HTML5, CSS3, Socket.IO-client
Backend: Node.js, Express.js, Socket.IO, CORS
Tools: VS Code, npm, WebSockets

Important Features:
Real-time, bi-directional communication
Clean and responsive chat interface
Auto-refreshing message history
Timestamped messages
Distinctive message styling (self and others)

This project illustrates an awareness of WebSocket-based structure, frontend-backend integration, and component-based UI development. It makes for a solid starting point for scalable real-time applications such as group chats, customer support systems, or collaborative platforms.
