/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const configs = {
    KEY: process.env.KEY,
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.PORT
};
module.exports = configs;