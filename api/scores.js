const express = require('express');
const app = express();
app.use(express.json());

let scores = [];

app.post('/api/scores', (req, res) => {
    const { nickname, score } = req.body;
    if (!nickname || !score) {
        return res.status(400).json({ error: 'Nickname ve score gerekli' });
    }
    scores.push({ nickname, score, date: new Date().toLocaleString() });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 10);
    res.status(200).json({ success: true });
});

app.get('/api/scores', (req, res) => {
    res.json(scores);
});

module.exports = app;
