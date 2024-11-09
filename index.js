const {

  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  getContentType,
  jidNormalizedUser,
  Browsers,
  jidDecode
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const pino = require('pino')
const qrcode = require('qrcode-terminal')
const { Boom } = require('@hapi/boom')
const util = require('util')



const {
  News_Connect,
  News_Msg,
  Hiru_newsModule,
  get_HiruPosted,
} = require('queen-news')



const {

  OWNER,

  PREFIX,

  USER_NAME,

  PASSWORD,

  HIRU_GROUP_JID,

  


} = require("./config")



async function NewsWa() {

  const { state, saveCreds } = await useMultiFileAuthState(__dirname + "./ADD-CRED-JSON");

  const conn = makeWASocket({

    auth: state,

    printQRInTerminal: true,

    logger: pino({ level: "silent" }),

    browser: Browsers.macOS("Desktop"),

    downloadHistory: false,

    syncFullHistory: false,

  });



  conn.ev.on('creds.update', saveCreds);



  conn.ev.on("connection.update", async (update) => { News_Connect(conn, NewsWa, update, jidNormalizedUser, Boom, DisconnectReason, USER_NAME, PASSWORD); });


  Hiru_newsModule( conn, post_HiruPosted, get_HiruPosted, HIRU_GROUP_JID);

  conn.ev.on("messages.upsert", async (mek) => { News_Msg(conn, mek, PREFIX, OWNER, getContentType); });

}



const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => { res.send("Hello World!"); });

app.listen(port, () => console.log(`NEWS Server listening on port http://localhost:8000`));

setTimeout(() => { NewsWa() }, 7000);
