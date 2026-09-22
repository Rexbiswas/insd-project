import express from 'express';
import next from 'next';
import apiApp from './api/server.js';

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = Number(process.env.PORT) || 5001;

const nextApp = next({
    dev,
    hostname,
    port
});

const nextHandler = nextApp.getRequestHandler();

await nextApp.prepare();

const server = express();

/*
 * Express API
 */
server.use(apiApp);

/*
 * Next.js frontend
 */
server.use((req, res) => {
    nextHandler(req, res).catch((error) => {
        console.error('Next.js error:', error);

        if (!res.headersSent) {
            res.status(500).send('Internal Server Error');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`INSD server running on port ${port}`);
});