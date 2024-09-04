import express from 'express';
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import { carbonTotal } from '../carbonTotal.js';

const express = require('express')



const db = await sqlite.open({
    filename: './carbon.db',
    driver: sqlite3.Database
})

await db.migrate();

app.post('/api/carbonadd', async (req, res) => {
    const { carbon_project, actions } = req.body
    const { availableCredits, issuedCredits } = await db.get(`select * from project_id where id  = 1`, [project_id])
    const total = carbonTotal(actions, availableCredits, issuedCredits)
    res.status(200).json({ carbon_project });
})





const app = express();
const PORT = process.env.PORT || 4011;
app.listen(PORT, () => `Server started ${PORT}`)

