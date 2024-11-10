const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });



module.exports = {
  PREFIX: process.env.PREFIX || '.',
  OWNER: process.env.OWNER || '94775228949', //Enter Owner Number
  USER_NAME: process.env.USER_NAME || 'r charuka', //Enter Your UserName 
  PASSWORD: process.env.PASSWORD || '12345678',
  HIRU_GROUP_JID:process.env.HIRU_GROUP_JID || '120363339224309117@g.us',
};
