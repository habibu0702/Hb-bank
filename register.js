const express = require('express');
const pool = require('./db');
const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/signUp', async (req, res) => {
 const {first_name, last_name, user_name, phone_number, password} = req.body;
 if (!first_name || !last_name || !user_name || !phone_number || !password) {
    return res.status(400).json({error: 'invalid! credantial'});
 }

 try {
    const check1 = await pool.query('SELEC * FROM register WHERE user_name = $1', [user_name]);
    if (check1.rows.length > 0) {
       return res.status(400).json({error: 'user name Already exists'});
    }

     const check2 = await pool.query('SELEC * FROM register WHERE phone_number = $1', [phone_number]);
    if (check2.rows.length > 0) {
       return res.status(400).json({error: 'phone number Already exists'});
    }
    
    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
    'INSET INTO register (first_name, last_name, user_name, phone_number, password) VALUES($1, $2, $3, $4, $5',
    [first_name, last_name, user_name, phone_number, hashed]);
    return res.status(200).json({message: 'registered successfully'});
 } catch (err) {
    console.error('error', err);
    return res.status(500).json({error: 'connection failed try again later'});
 }
});

router.get('/', async (req, res) => {
    try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({success: true, message: 'successful', time: result.rows[0].now});
    } catch (err) {
    console.error('erro', err);
    res.status(500).json({success: false, message: 'connection error'});
 }
});

module.exports = router;