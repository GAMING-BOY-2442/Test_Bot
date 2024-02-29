module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "3.0.8",
  hasPermssion: 0,
  credits: "KHAN",//Please Don't Change The Credit
  description: "Send Prefix",
  category: "Help Zone",
  prefix: true,
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  
  var text = [`𝙷𝙸 👋🏻 𝙼𝚈 𝙳𝙴𝙰𝚁 𝙵𝚁𝙸𝙴𝙽𝙳 👀\n\n𝙸 𝙰𝙼 𝚂𝚃𝙸𝙻𝙻 𝙰𝙻𝙸𝚅𝙴 𝙽𝙾𝚆 🙋🏻‍♂️\n\n𝚄𝚂𝙴 [ 𝙷𝙴𝙻𝙿 ] 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝚃𝙾 𝚂𝙴𝙴 𝙰𝙻𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 🥹`];
  var know = text[Math.floor(Math.random() * text.length)];
  var link = [ "https://i.postimg.cc/wjShBTPT/prefix.gif"
];
  var callback = () => api.sendMessage({body:`${know}`,attachment: fs.createReadStream(__dirname + "/cache/canvas/photo.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/canvas/photo.png"));
  api.setMessageReaction("😛", event.messageID, (err) => {}, true);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/canvas/photo.jpg")).on("close",() => callback());
};
