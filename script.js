let isWebSocketOpen = false;

const ws = new WebSocket(`${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}`);


ws.onopen = () => {
    console.log('Connected to the server');
    isWebSocketOpen = true; // Đánh dấu rằng WebSocket đã mở
    document.getElementById('joinGameButton').disabled = false; // Enable Join Game button
    document.getElementById('createGameButton').disabled = false; // Enable Create Game button
};

ws.onclose = () => {
    console.log('Disconnected from the server');
    isWebSocketOpen = false; // Đánh dấu rằng WebSocket đã đóng
    document.getElementById('joinGameButton').disabled = true; // Disable Join Game button
    document.getElementById('createGameButton').disabled = true; // Disable Create Game button
};

ws.onmessage = (event) => {
    const gameState = JSON.parse(event.data);
    console.log('Game state updated:', gameState);
    updateGameBoard(gameState);
};

ws.onerror = (error) => {
    console.error('WebSocket Error:', error);
};

// Hàm để cập nhật giao diện người dùng
function updateGameBoard(gameState) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Xóa nội dung cũ

    // Cập nhật bảng trò chơi
    gameState.squares.forEach((square) => {
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        squareDiv.style.backgroundColor = square.color;
        squareDiv.innerHTML = `
            <h3>${square.name}</h3>
            <p>Price: ${square.pricetext}</p>
            <p>Owner: ${square.owner === 0 ? 'Bank' : `Player ${square.owner}`}</p>
        `;
        gameBoard.appendChild(squareDiv);
    });

    // Cập nhật thông tin người chơi
    updatePlayerInfo(gameState.players);
}

// Hàm để cập nhật thông tin người chơi
function updatePlayerInfo(players) {
    const playerInfoDiv = document.getElementById('player-info');
    playerInfoDiv.innerHTML = ''; // Xóa nội dung cũ

    players.forEach((player) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.innerHTML = `
            <h4>${player.name}</h4>
            <p>Money: $${player.money}</p>
            <p>Position: ${player.position}</p>
        `;
        playerInfoDiv.appendChild(playerDiv);
    });
}

// Gửi thông điệp đến server
function sendMessage(message) {
    if (isWebSocketOpen) {
        ws.send(message);
    } else {
        console.error("WebSocket is not open. Current state: " + ws.readyState);
    }
}

function joinGame() {
    if (!isWebSocketOpen) {
        alert("Please wait for the connection to be established.");
        return;
    }

    const gameId = document.getElementById('gameIdInput').value; // Lấy mã ID từ input
    const playerName = prompt("Enter your name:"); // Yêu cầu người chơi nhập tên
    if (playerName && gameId) {
        sendMessage(JSON.stringify({ action: 'joinGame', name: playerName, gameId: gameId }));
    } else {
        alert("Please enter both your name and Game ID.");
    }
}

function createGame() {
    if (!isWebSocketOpen) {
        alert("Please wait for the connection to be established.");
        return;
    }

    const gameId = generateGameId(); // Tạo mã ID ngẫu nhiên
    const playerName = prompt("Enter your name:"); // Yêu cầu người chơi nhập tên
    if (playerName) {
        sendMessage(JSON.stringify({ action: 'createGame', name: playerName, gameId: gameId }));
        displayGameId(gameId); // Hiển thị Game ID
    } else {
        alert("Please enter your name.");
    }
}

// Hàm để tạo mã ID ngẫu nhiên
function generateGameId() {
    return Math.random().toString(36).substring(2, 8); // Tạo mã ID ngẫu nhiên
}

// Hàm để hiển thị mã Game ID
function displayGameId(gameId) {
    document.getElementById('generatedGameId').innerText = gameId; // Cập nhật nội dung mã Game ID
    document.getElementById('gameIdDisplay').style.display = 'block'; // Hiển thị phần tử chứa mã Game ID
}
