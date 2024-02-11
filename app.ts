import { UsersApiController } from "./src/APIs/nearestCityAPI";
import express from 'express';
import cron from 'node-cron';
import { nearestCityServices } from "./src/services/services";
let config = require('./config/app.config.js');

const app = express();
const port = config.PORT || 3000;
const APIs = new UsersApiController(
    app
);
APIs.setupEndpoints();
app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
const job = cron.schedule('* * * * *', async () => {
    console.log('Cron job running every minute');
    await nearestCityServices.getParisZone();
});
job.start();
