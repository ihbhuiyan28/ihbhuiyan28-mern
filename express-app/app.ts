import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.get(`/`, (_req, res) => {
    res.status(200).json({
        code: 200,
        message: 'Hello World!'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
