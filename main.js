const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'veri.json');

app.use(express.json());
app.use(express.static(__dirname));

function loadData() {
    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    return { states: {}, journal: {} };
}

function saveData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

app.get('/load', (req, res) => {
    res.json(loadData());
});

app.post('/save', (req, res) => {
    saveData(req.body);
    res.json({ ok: true });
});

app.post('/groq', async (req, res) => {
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log('Site acik! Tarayicida su adresi ac: http://localhost:3000/almanca-sitem.html');
});