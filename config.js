const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });



module.exports = {
  PREFIX: ".", //set Prefix
  OWNER: "94775228949",//Enter Owner Number
  USER_NAME: "mr charuka",//Enter Your UserName 
  PASSWORD: "12345678",
  HIRU_GROUP_JID: ["120363339224309117@g.us"],
};
