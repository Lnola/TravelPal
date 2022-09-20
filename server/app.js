const express = require('express');
const router = require('./router');

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
