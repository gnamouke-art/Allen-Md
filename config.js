const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="death69ban@proton.me"
global.location="Asia/kolkata"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Garuna69/Allen-Md";
global.gurl =process.env.GURL  || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919034941583,918318542882";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250585256740,918318542882";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/hGbxMP35/IMG-20241211-WA0045.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_29_03_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUE1iY2JRRTNuQlRFMHlYM2hZdGc2YXg2RlZqcUw0ckJQSms5UURwcStQRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiazVKVjlEYkpRS2V0WGNBMlV6aFZMQVwiLFxuICBcInBob25lSWRcIjogXCI4MGY0MjlmMC00ZWE2LTQ0ODYtOTU5NS1jMGM5NGFmZTE0MjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjUwLFxuICAgICAgMTQ0LFxuICAgICAgMTI0LFxuICAgICAgNzcsXG4gICAgICAxODAsXG4gICAgICA3LFxuICAgICAgMTIwLFxuICAgICAgMTQsXG4gICAgICAxOTEsXG4gICAgICAyNDMsXG4gICAgICAxNzUsXG4gICAgICAxNDgsXG4gICAgICAyMDksXG4gICAgICA2NyxcbiAgICAgIDksXG4gICAgICA5LFxuICAgICAgNSxcbiAgICAgIDEyMCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICA5MSxcbiAgICAgIDEyNCxcbiAgICAgIDgsXG4gICAgICAyMixcbiAgICAgIDE0MyxcbiAgICAgIDI5LFxuICAgICAgNTksXG4gICAgICA3LFxuICAgICAgOTMsXG4gICAgICAyNTEsXG4gICAgICAxNzUsXG4gICAgICAxNTEsXG4gICAgICAxNjgsXG4gICAgICAyMjcsXG4gICAgICAxMzUsXG4gICAgICAxNDksXG4gICAgICA2NyxcbiAgICAgIDEwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZSVzhUVERUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU4NTI1Njc0MDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsSY4Y634Y6u4Y+L4Y+S4Y+L4Y+s4Y+SIMW44Y+X4Y+B4Y+m4Y+L4Y+LIPCdmqvwnZq78J2ar/CdmrPwnZqw8J2QkPCdkJTwnZq1XCIsXG4gICAgXCJsaWRcIjogXCIyNzE3Mzg5OTA1MjY1MTM6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9udkk4SEVObngxcjRHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxUE54K1l1dHZFWnZQbGhTTHk0UWNFTmtlR3ZFUTM1UDJhSlE3ZEQ1RDFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBWdTFrVHF3N29PN2RVSjJrS2dvQnlhUmd3ZWRrbWk2L3lLeU82NkRHbURrVUo4bFRHaUJDM0VrYWhldmdwY1Q0dDhIcWpMU2R4d0Q2QVEvTmxaUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZpNkdyZldMQ2d6cUlyN2xaUDhhajNnenZ2a0x3Y3h4R1ArN2VUaXdwLzV1MkppbzRRRkJhWUpOY3JJbUFmQzF1L0JhMjcxdXhTS0NMNnhSVURud2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTg1MjU2NzQwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDIwNTk3NDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍃",
  packname: process.env.PACK_NAME || "⏤͟͟͞➣⃟⃟🖤Ꮓᴀʀᴀ~ ⃟⃟⃟⃟🦇",
  botname : process.env.BOT_NAME  || "❤‍🩹𝚯𝚪𝚰𝚴💸",
  ownername:process.env.OWNER_NAME|| "Allen",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
