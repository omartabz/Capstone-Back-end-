import express from 'express';
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import { carbonTotal } from './carbonTotal.js';
const app = express();


app.use(express.static('public'))
app.use(express.json())
app.use(cors())


const db = await sqlite.open({
    filename: './carbon.db',
    driver: sqlite3.Database
})


await db.migrate();


app.post('/api/carbon/add', async (req, res) => {
    const {projects,id,project_id,project_name,total_credits_available,total_credits_issued} = req.body   
    const total = await db.get(`INSERT INTO projects (id, project_id,project_name,total_credits_available,total_credits_issued) VALUES (?,?,?,NULL,NULL) RETURNING *`, [id,project_id,project_name,total_credits_available,total_credits_issued]);
    res.status(200).json({ message: 'Project Created Successfully'});
})

app.post('/api/carbon/delete', async(req,res) =>{
    const {id} = req.body;
    const total = await db.run(`DELETE FROM projects WHERE id =1`, [id]);
    res.status(200).json({ message: 'Project Deleted Successfully'});
})

const PORT = process.env.PORT || 4003
app.listen(PORT, () => console.log(`Server started ${PORT}`))

