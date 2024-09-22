const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


module.exports = {
  PREFIX: ".", //set Prefix
  OWNER: "94775228949",//Enter Owner Number
  USER_NAME: "> mr charuka",//Enter Your UserName 
  PASSWORD: "12345678",
  HIRU_GROUP_JID: ["120363307730093301@g.us"],
  DERANA_GROUP_JID: [""],
  ESANA_GROUP_JID: [""],
  NASA_GROUP_JID: [""],
  TECH_GROUP_JID: [""],
  NOTICE_GROUP_JID: [""]
};
