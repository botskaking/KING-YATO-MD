const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/botskaking/KING-YATO-MD'
global.location = 'Haridwar IN'
global.gurl = 'https://m.youtube.com/@ironmanhindigaming' // add your username
global.sudo = process.env.SUDO || '918250895584,918279975767'
global.devs = '918250895584,918279975767';
global.website = 'https://m.youtube.com/@ironmanhindigaming' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'YATO MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'IRONMAN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU94MjBLQW1EbTJKSGZFdHNQRE1TOENoQ1JNWDVqWVVhWUptUm5rODBsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnN3ZFBwcHYzblg1UVRYdjFHeWJhbTdIT01nSHRJVjh2cVZyWFF1Z2duTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQlpYMHE4d1R0cC9oUzA0WHdxbDVLN09mYTlPeHU4aHpUSlZlWTJGaGtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVkFMZVlTUWlxQ1BkZlkwdHQ4VTNyU0I2RW1YWkp1cXhXY1E2T2FCUlZJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKM1hNOENXTnlYTEtwbE0wV1VpWGJRdExIRG41V2xYd2NraUJ0dWFVbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik16TTk4UGdWaDY4d1RrLzN4VWtWK3c0WGJMSmtRR1c2ZmFkN1NPVks1M2s9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSlhzK0hkL1JsNHUxeXoraTUwazdaYTFSNjI0N3hibExCQVUvUVNKL2kwb1d4dk15Z0xXMlRjMWNYbzZoWmNJMWxJQzRYVHYrSUVnSytjSTREMC9oUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNCwiYWR2U2VjcmV0S2V5IjoiL3d5RTVMZkhPN1RrRkNxeHJTL1NRSHhWd3hpblkvSFMvRXNMZzh5dFNrTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiemxoTDF0QkNSMEtEZzNKV0J4NHRlZyIsInBob25lSWQiOiJiOTk3NTYwMy0wNDQ4LTRmYjgtOGM4OC00OTU5NjhhOTVhYzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzY4aVVtdXRVYVJoMWl5MU5EWmZoc1ZpOWV3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cE9IU1o4QklQaE8razJlN1RVN2x2MlhCQlE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZWhwdGtCRVBiQnlhc0dHQTA9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRTMER2czgxbjFYaXlEL2ZwdEdCb1poeTJMVGRIakZNNVphWVZMNEtGMnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNsNTJwdS9wajhlVVpOcXlHQlVRR0k3MHZvR1NIY2xQTmhoeVk5M0FsZGE0WXVxZHlCQmdOdVVSZW0yUWpHdDlQTmQyT2ljZ1Q5a0ZaV3pLZ1o2eUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDdnliZXpLcUFNVE1YTXJzZjJJbmZpZi9LT2tyMEp3eU5CbHY4eDh5WUkyaVVlOEM5MllUQnJLQTRHdVg5TWpUZVZLZ3hVcTYyZDFZWGlPU0ZQOGhqdz09In0sIm1lIjp7ImlkIjoiOTE4MjUwODk1NTg0OjE0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODI1MDg5NTU4NDoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRMHRBNzdQTlo5VjRzZy8zNmJSZ2FHWWN0aTAzUjR4VE9XV21GUytDaGRyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxOTk0NzQ2fQ== : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'ᴷᴵᴺᴳ ʸᴬᵀᴼ' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'YATO-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '91' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['/'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
