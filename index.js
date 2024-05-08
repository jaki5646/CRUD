import express from 'express'
import { config } from 'dotenv';
import databaseService from './service/database.service.js';
import userRegister from './routes/register.route.js';
import userLogin from './routes/login.route.js';

config();
const app = express();
app.use(express.json())

app.use('/user', userRegister)
app.use(userLogin)

app.use((err, req, res, next) => {
    if (err.message) {
      return res.json({ error: err.message });
    } else {
      return res.json({ err });
    }
});


app.listen(process.env.PORT || 8080, async (err) => {
    await databaseService.connect();
    console.log(`Banh truong lanh dia\nhttp://localhost:${process.env.PORT}`)
})