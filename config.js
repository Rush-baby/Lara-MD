const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yyAgVCbY#E8xec8Z0YXhGb3-lPVrLcGorLZL4-8BMercVs5S9ygU", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "public",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
