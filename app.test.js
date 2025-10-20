// 📁 app.test.js
// ─────────────────────────────────────
// Integration Tests für Express-App mit Supertest

const request = require('supertest');
const app = require('./app');

// Test: Root Endpoint
describe('GET /', () => {
    it('should return app info', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('CI/CD Demo App');
    });
});

// Test: Health Endpoint
describe('GET /health', () => {
    it('should return healthy status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('healthy');
    });
});
