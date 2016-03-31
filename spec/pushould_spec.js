'use strict';
let Pushould = require('../index.js');

const SERVER_TOKEN=process.env.SERVER_TOKEN;
const API_URL=process.env.URL;
const EMAIL=process.env.EMAIL;
const PASSWORD=process.env.PASSWORD;

let pushould = new Pushould({server_token: SERVER_TOKEN,
                            url: API_URL,
                            email: EMAIL,
                            password: PASSWORD});

pushould.trigger({room: 'private area',
                 event: 'send',
                 data: {
                   users: ['a', 'lot', 'of', 'users'],
                   message: 'hello world'
                 }});
