// 📁 server.js
// ─────────────────────────────────────
// Einfacher Express-Server für CI/CD-Demo

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Root-Route
app.get('/', (req, res) => {
    res.json({
        message: 'CI/CD Demo App',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
    });
});

// Healthcheck-Route
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Serverstart (nur, wenn Datei direkt ausgeführt wird)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

// Exports for tests
module.exports = app;