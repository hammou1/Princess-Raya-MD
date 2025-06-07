/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ❄️Project
    Princess Raya MD
    
    😇Developer
     Ryan T Ropah 
     
    ✨Team
     P17 Bots
     
    💙Our Website
     https://ryantropah.com

© Do not mod this or I will take action⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "
{"noiseKey":{"private":{"type":"Buffer","data":"QIP7i3LJS36ucLqGEEjy5y0rfHK4S2q4TZVhXnGdwWs="},"public":{"type":"Buffer","data":"3rNS7c6AsiF2wrjwmFyD/lG0tTwK/LsxrEWwyP1a7x8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"UINzq8njBGU6agoYDPnIoEAoZptrM2+Sw9gPY9aDrF0="},"public":{"type":"Buffer","data":"t+eCfHXKKGOpfw0qJgAoSlakKOxkD/p4+apQV7t8EHY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KHX6E8HZ28oXkHZELuNmmmsXI2Uk/F4QYFGZOhYz834="},"public":{"type":"Buffer","data":"QBZLpIDXZFMr4CUbCw4eCMIf63nX/2aqh0NxBmkmEls="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sCUe8/Bzsr4vV9edgcdvLa/3U7gnrVQbCE2d2qcldEs="},"public":{"type":"Buffer","data":"Ww4w8nlQVSPn3E80y2OR1jLk0xH4MovhXFZN0cS4Q1c="}},"signature":{"type":"Buffer","data":"nlSyLLSzvSx5aVCG5dgRedw9AzhRPNLm2zO20L2JsbEM1U7MY08PE9GFcfSYDp+DN4emDepK5n7UMoARgQ3+gQ=="},"keyId":1},"registrationId":196,"advSecretKey":"cIQ017ZGtZ1/MbMPL+aawO48UBRY+btK/jbieA53b34=","processedHistoryMessages":[{"key":{"remoteJid":"212770545369@s.whatsapp.net","fromMe":true,"id":"89274A11E3A5D659477210E27630AF0C"},"messageTimestamp":1749326767}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"CYRILDEV","me":{"id":"212770545369:15@s.whatsapp.net","lid":"281187398471697:15@lid","name":"ٍ"},"account":{"details":"CIeLroUHEKK3ksIGGAEgACgA","accountSignatureKey":"BIVFq+KgRuugtiv/igwn9P3HxIchT6NIMxSM/kyUkAs=","accountSignature":"YR/kPm6grXBdOrI70FhXmLkCA/k2tk+QWON9WfOhAkaEu8n3ADgbFLS350uHiQx7sGV1lGpeNG/SRky9e1N7CQ==","deviceSignature":"ISswvAcgSlCiV8m12DVFJewb6OjJEqW/DO86TmOK9DquiE3D0cX1kplw2FU1V8yBxNKojDN0RsMQjVD/TNYTgg=="},"signalIdentities":[{"identifier":{"name":"212770545369:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQSFRavioEbroLYr/4oMJ/T9x8SHIU+jSDMUjP5MlJAL"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAIIBQ=="},"lastAccountSyncTimestamp":1749326762,"lastPropHash":"1K4hH4","myAppStateKeyId":"AAAAACHm"}
                        ",
 
PREFIX: process.env.PREFIX || ".",
// Enter Your Desired Prefix

BOT_NAME: process.env.BOT_NAME || "Princess Raya",
// Enter Your Bot Name

CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji reaction
  
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "❄️,🇿🇼,✨",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links without removing member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263780177755",
// Set Owner Name

OWNER_NAME: process.env.OWNER_NAME || "Ryan T Ropah",
// Set Footer

DESCRIPTION: process.env.DESCRIPTION || "_❄️ Downloaded by Princess Raya MD ❄️_",
// add bot owner name   
 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/9t74nx.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "_❄️ Princess Raya is Alive! ❄️_",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "_❄️ Hi dear, Princess Raya MD bot has just viewed your status! ❄️_",

// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing  
 
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ❄️Project
    Princess Raya MD
    
    😇Developer
     Ryan T Ropah 
     
    ✨Team
     P17 Bots
     
    💙Our Website
     https://ryantropah.com

© Do not mod this or I will take action⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/
