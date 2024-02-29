module.exports.config = {
    name: "adc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Apply code from buildtooldev and pastebin",
    commandCategory: "Bot Admin",
    prefix: true,
    usages: "[reply or text]",
    cooldowns: 0,
    dependencies: {
        "pastebin-api": "",
        "cheerio": "",
        "request": ""
    }
};

module.exports.run = async function ({ api, event, args }) {
    const permission = [`100045188618507`,`100087119239479`];
	if (!permission.includes(event.senderID)) return api.sendMessage("This Command Can Only Be Used By Boss Junaid - ⚠️", event.threadID, event.messageID);
    const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name) return api.sendMessage(`◆ FOR UPLOAD COMMAND - ✅\n\n» ${global.config.PREFIX}adc [ File Name ] - Reply Link\n━━━━━━━━━━━━━━━━━\n◆ FOR GET PASTEBIN LINK - ☑️\n\n» ${global.config.PREFIX}adc [ File Name ]`, threadID, messageID);
    if(!text && name) {
        var data = fs.readFile(
          `${__dirname}/${args[0]}.js`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`Command [ ${args[0]} ] Does Not Exist - ⚠️`, threadID, messageID);
            const { PasteClient } = require('pastebin-api')
            const client = new PasteClient("R02n6-lNPJqKQCd5VtL4bKPjuK6ARhHb");
            async function pastepin(name) {
              const url = await client.createPaste({
                code: data,
                expireDate: 'N',
                format: "javascript",
                name: name,
                publicity: 1
              });
              var id = url.split('/')[3]
              return 'https://pastebin.com/raw/' + id
            }
            var link = await pastepin(args[1] || 'noname')
            return api.sendMessage(link, threadID, messageID);
          }
        );
        return
    }
    var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    var url = text.match(urlR);
    if (url[0].indexOf('pastebin') !== -1) {
        axios.get(url[0]).then(i => {
            var data = i.data
            fs.writeFile(
                `${__dirname}/${args[0]}.js`,
                data,
                "utf-8",
                function (err) {
                    if (err) return api.sendMessage(`An Error Occurred While Applying The Code [ ${args[0]}.js ] - ⚠️`, threadID, messageID);
                    api.sendMessage(`» Applied The Code To [ ${args[0]}.js ]\n\n» Use [ ${global.config.PREFIX}cmd loadAll ] To Load The All Command - ☑️`, threadID, messageID);
                }
            );
        })
    } 
                                                                                          }
