const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot_reply",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Extra - Files",
  prefix: false,
  usages: "Bot / বট",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID); 

  var bot = ["আমি আপনাকে কিভাবে সাহায্য করতে পারি...? 🤔","আদেশ করুন বস...🙂","হুম শুনছি আমি আপনি বলুন 😐","আমার সব কমান্ড দেখতে /help টাইপ করুন ✅","Ji bolen ki korte pari ami apnar jonno...?","কোনো সমস্যা হলে /called কমান্ড দিয়ে এডমিন কে জানান ☑️","আরো ২-৩ বার ডাকো সোনা আমি তোমাকে আস্তে করে স্পেম রিপোর্ট দিয়ে দেই 😋","আদেশ করুন যাহাপানা 😎","আবার যদি আমারে বট কইয়া ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏","I am your personal assistant","তুই বট তোর নানি বট 😤 তোর কত বড় সাহস তুই আমারে বট কস 😤 তোর টা খাই নাকি পড়ি যে তুই আমারে বট কস 😤","আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨","ডাকছোত কেন ফাস্ট কো 😒","তুমি কি আমাকে ডেকেছো...? 😇"];
  var rand = bot[Math.floor(Math.random() * bot.length)]

  if ((event.body.toLowerCase().startsWith("বট") || event.body.toLowerCase().startsWith("বট"))) {
 let userH = event.senderID
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;
    api.setMessageReaction("😷", event.messageID, (err) => {}, true);

    var msg = {
      body: firstname + " - " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
  };

  if ((event.body.toLowerCase().startsWith("bot") || event.body.toLowerCase().startsWith("Bot"))) {
  let userH = event.senderID
    const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true);

    var msg = {
      body: firstname + " - " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
