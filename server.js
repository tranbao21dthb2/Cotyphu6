const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Đường dẫn tuyệt đối tới index.html
const indexPath = path.join(__dirname, 'index.html');

// Phục vụ các file tĩnh từ thư mục hiện tại
app.use(express.static(__dirname));

// Xử lý route gốc
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

// Khai báo gameRooms để lưu trữ trạng thái trò chơi
const gameRooms = {};

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        const data = JSON.parse(message);

        if (data.action === 'createGame') {
            const { name, gameId } = data;

            // Tạo phòng mới nếu chưa tồn tại
            if (!gameRooms[gameId]) {
                gameRooms[gameId] = {
                    players: [],
                    currentTurn: 0,
                    squares: [], // Khởi tạo các ô cho trò chơi
                };
            }

            // Kiểm tra xem người chơi đã tồn tại trong phòng chưa
            const existingPlayer = gameRooms[gameId].players.find(player => player.name === name);
            if (existingPlayer) {
                ws.send(JSON.stringify({ error: "Player name already exists in this game." }));
                return;
            }

            // Thêm người chơi vào phòng
            gameRooms[gameId].players.push({ name: name, money: 1500, position: 0 });

            // Gửi trạng thái đã cập nhật đến tất cả người chơi trong phòng
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(gameRooms[gameId]));
                }
            });
        }

        if (data.action === 'joinGame') {
            const { name, gameId } = data;

            // Kiểm tra xem gameId có tồn tại không
            if (gameRooms[gameId]) {
                // Kiểm tra xem người chơi đã tồn tại trong phòng chưa
                const existingPlayer = gameRooms[gameId].players.find(player => player.name === name);
                if (existingPlayer) {
                    ws.send(JSON.stringify({ error: "Player name already exists in this game." }));
                    return;
                }

                // Thêm người chơi vào phòng
                gameRooms[gameId].players.push({ name: name, money: 1500, position: 0 });

                // Gửi trạng thái đã cập nhật đến tất cả người chơi trong phòng
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(gameRooms[gameId]));
                    }
                });
            } else {
                ws.send(JSON.stringify({ error: "Game ID does not exist." }));
            }
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        // Optional: Handle player disconnection and update game state if necessary
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

const PORT = process.env.PORT || 1611;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
