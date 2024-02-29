module.exports.config = {
  name: "prefix",
  version: "3.0.8",
  hasPermssion: 0,
  credits: "KHAN",//Please Don't Change The Credit
  description: "Send Prefix",
  commandCategory: "Help Zone",
  prefix: true,
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  if (!(event.body.toLowerCase().startsWith("prefix") || event.body.toLowerCase().startsWith("Prefix"))) return;
const args = event.body.split(/\s+/);
  args.shift();
  api.setMessageReaction("🆗", event.messageID, (err) => {}, true);
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

  var text = [`𝙷𝙸 👋🏻 𝙼𝚈 𝙳𝙴𝙰𝚁 𝙵𝚁𝙸𝙴𝙽𝙳 👀\n\n𝙼𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 : [ ${global.config.PREFIX} ]\n\n𝚄𝚂𝙴 [ ${global.config.PREFIX}help ] 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝚃𝙾 𝚂𝙴𝙴 𝙰𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 🥹`];
  var know = text[Math.floor(Math.random() * text.length)];
  var link = [ "https://i.imgur.com/wGmbept.gif", "https://i.imgur.com/BSuoeRE.gif", "https://i.imgur.com/YjUpsjh.gif"
];
  var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/canvas/photo.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/canvas/photo.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/canvas/photo.jpg")).on("close",() => callback());
};

module.exports.run = async function ({ api, event }) {};
