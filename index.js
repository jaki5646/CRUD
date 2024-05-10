import express from 'express'
import { config } from 'dotenv';
import databaseService from './service/database.service.js';
import userRegister from './routes/register.route.js';
import userLogin from './routes/login.route.js';
import userLogout from './routes/logout.route.js';
import getProfile from './routes/getProfile.route.js';
import createProfile from './routes/createProfile.route.js';
import updateProfile from './routes/updateProfile.route.js';
import deleteProfile from './routes/deleteProfile.route.js';


config();
const app = express();
app.use(express.json())

app.use(userRegister)
app.use(userLogin)
app.use(userLogout)
app.use('/user', getProfile)
app.use('/user', createProfile)
app.use('/user', updateProfile)
app.use('/user', deleteProfile)



//test
app.get('/test', (req,res) => {
  const header = req.headers.authorization.split(" ")[1];
})

app.use((err, req, res, next) => {
    if (err.message) {
      return res.status(403).json({ error: err.message});
      // return res.status(err.status).json({ error: err.message });
    } else {
      console.log(err)
      return res.status(403).json({ err });
    }
});


app.listen(process.env.PORT || 8080, async (err) => {
    await databaseService.connect();
    console.log(`Banh truong lanh dia\nhttp://localhost:${process.env.PORT}`)
})