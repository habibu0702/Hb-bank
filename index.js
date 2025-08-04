const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const ratelimit = require('express-rate-limit');
const cors = require('cors');
const pool = require('./db');
const router = require('./register');



const app = express();
const PORT  = process.env.PORT || 5000;

const limiter = ratelimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'too many requirets, please try again later'
});

app.use(express.json());
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use('/api', router);



app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({message: true, time: result.rows[0].now });
        console.log('success:', result.rows[0].now);
    } catch (err) {
        console.log('error', err);
        res.status(500).json({success: false, message: 'database error'});
    }
})


app.listen(PORT, () => {
    console.log(`api is runign  on ${PORT}`);
})