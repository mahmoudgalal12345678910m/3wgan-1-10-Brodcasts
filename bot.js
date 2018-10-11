const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setActivity("!help | تــوفـيـق بوت ",{type: 'WATCHING'})

});

client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('!bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "SmartBot";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))

  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed: bc })
  msg.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });


    const devs = ['456616044623298585' , '' , '' , ''];
    const control = "!";
    client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!devs.includes(message.author.id)) return;

      if (message.content.startsWith(control + 'ply')) {
        client.user.setGame(argresult);
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'watch')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'listen')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'stream')) {
        client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
          message.channel.sendMessage(`**✅   ${argresult}**`)
      }
      });











  client.on('message', message => {
                   var prefix = "!"
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 /*let b5bzlog = client.channels.find("name", "5bz-log");
                 if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });





               client.on('message', message => {
                   var prefix = "!"
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "kick" )) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "kick") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).kick();

                 const kickembed = new Discord.RichEmbed()
                 .setAuthor(`KICKED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : kickembed
                 })
               }
               });



 client.on('message', msg => {
     if(msg.content === 'توفيق')
                 setTimeout(function() {
   msg.reply('غور ياض توفيق بطل ينيك عيال')
                 }, 10000)
   });




client.on('message', msg => {
     if(msg.content === 'توفيق راجل')
                 setTimeout(function() {
   msg.reply('راجل من ابل منتا تتولد يا خول توفقيق دا باشا')
                 }, 10000)
   });

  client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='!members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });






client.on('message', message => {
                 if(message.content.startsWith("!clear")) {
                     var args = message.content.split(" ").slice(1);
             if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
              if (!args[0]) return message.channel.send('  مثل .clear 1 ضح عدد الرسائل التى تريد مسحها!!!');

              message.channel.bulkDelete(args[0]).then(() => {
                const embed = new Discord.RichEmbed()
                  .setColor(0xF16104)
                  .setDescription(`Cleared ${args[0]} messages.`);
                message.channel.send({ embed });

                const actionlog = message.guild.channels.find('name', 'logs');

                if (!actionlog) return message.channel.send('تم المسح بنجاح');
                const embedlog = new Discord.RichEmbed()
                  .setDescription('~Purge~')
                  .setColor(0xF16104)
                  .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
                  .addField('Purged in', message.channel)
                  .addField('Time', message.createdAt);
                actionlog.send(embedlog);

              });
            };

            });





  client.on('message', message => {
                           if (message.content.startsWith(".bot")) {
                    let embed = new Discord.RichEmbed()
               .setThumbnail(message.author.avatarURL)
               .addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
               .addField(' الاعضاء👥 ',` [${client.users.size}] `)
               .addField('الرومات📚 ',`[${client.channels.size}]`)
               .addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`)
               .addField(`ONEFaMilY-Makers`)
               .setColor('#7d2dbe')
                 message.channel.sendEmbed(embed);
                   }
               });


               client.on('message', message => {
                   var args = message.content.split(/[ ]+/)
                   if(message.content.includes('كسمك')){
                       message.delete()
                     message.channel.sendMessage("", {embed: {
                       title: "لا تسب",
                       color: 0x06DF00,
                       description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
                       footer: {
                         text: "By Abo Galal"
                       }
                     }}).then(msg => {msg.delete(4000)});
                                         }


               });




client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
General's Commands. 
${prefix}members - معلومات عن الاعضاء التى بسيرفرك :scroll:
${prefix}server - معلومات عن السيرفر :smile:
${prefix}clear - يمسح الشات بس حط عدد  :eyeglasses: 
${prefix}id - معلومات عنك  :scroll:
${prefix}ban - يعطى بان بس حط سبب :flashlight:
${prefix}kick - يعطى كيك مع السبب :frame_photo:
${prefix}bc - انشا رساله جماعيه لكل الى فسيرفر بالخاص:microphone:
${prefix}mc - يغلق الشات :nut_and_bolt:
${prefix}unmc - يفتح الشات :nut_and_bolt:
Game's Commands
${prefix}marry / لعبه التزاوج بس منشن للى تبيه』
${prefix}sra7a / اساله وتجاوب بصراحه』
${prefix}8ball ثم اساله سؤوال وهو سوف يجاوبك 


            bot info       
!inv - لدعوة البوت :pen_fountain:  **`)
    message.author.send(embed)
}
});

client.on('message', message => {
    if(message.content.startsWith('!help')) {
        
        message.channel.send('**[ لقد تم أرسال جميع أوامر البوت في الخاص :envelope_with_arrow: | Check your DM. ]**')
    }
});



      client.on('guildMemberAdd', member => {
          member.createDM().then(function (channel) {
       return channel.send("**`سيرفر للمحترفين والجيمر تعالى` \n [https://discord.gg/BbecTYm]**")
          }
          )});

          client.on('message', message => {
                 if(message.content === "!mc") {
                                     if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false

                        }).then(() => {
                            message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                        });
                          }

              if(message.content === "!unmc") {
                                  if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: true

                        }).then(() => {
                            message.reply("**__تم فتح الشات__:white_check_mark:**")
                        });
              }

          });






   client.on('message', msg => {
     if(msg.content === '!inv')
                 setTimeout(function() {
   msg.reply('**تم الارسال بالخاص رابط البوت**')
                 }, 10000)
   });









 client.on('message' , message => {
    if (message.content === '!inv') {
             let embed = new Discord.RichEmbed()

           .setThumbnail(message.author.avatarURL)
           .addField("**رابط اضافه البوت**","**[https://discordapp.com/api/oauth2/authorize?client_id=495264842790338561&permissions=8&scope=bot] **")
           .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});









client.on('message', message => {
    if (message.content.startsWith("!id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('**المعلومات التى توصل لها البوت** ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**عدد السيرفرات التى بها البوت**', [client.guilds.size], true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("** اسمك **", `${message.author.username}`)
            .addField('** التاج **', message.author.discriminator)
            .addField('**الايدى حقك**', message.author.id)
            .addField('**Bot**', message.author.bot)
            .addField('**تاريخ دخولك الديسكورد**', message.author.createdAt)
    })
}
});








client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});












        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})







 client.on('message', message => {
                   if(message.channel.type === "dm") return;
                     if(message.content.startsWith ("!marry")) {
                     if(!message.channel.guild) return message.reply(' This command only for servers ')
                     var proposed = message.mentions.members.first()

                     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
                      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                             message.channel.send(`**${proposed}
                بدك تقبلي عرض الزواج من ${message.author}
                العرض لمدة 10 ثانية
                اكتب موافقة او لا**`)

               const filter = m => m.content.startsWith("موافقة");
               message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
               })
                  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

                  const filte = m => m.content.startsWith("لا");
               message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                  message.channel.send(`**${message.author} تم رفض عرضك**`);
               })




                 }
               });




               const Sra7a = [
                   'صراحه  |  صوتك حلوة؟',
                   'صراحه  |  ضربت عشره قبل كدا؟',
                   'صراحه  |  كم مره اتبعبصت؟',
                   'صراحه  |  ما هو اكثر موقف محرج حصل لك؟',
                   'صراحه  |  التقيت الناس مع وجوهين؟',
                   'صراحه  |  هل بصيت على طياز البنات من قبل؟',
                   'صراحه  |  شيء وكنت تحقق اللسان؟',
                   'صراحه  |  أنا شخص ضعيف عندما؟',
                   'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
                   'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
                   'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
                   'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
                   'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
                   'صراحه  |  أشجع شيء حلو في حياتك؟',
                   'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
                   'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
                   'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
                   'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
                   'صراحه  |  نظرة و يفسد الصداقة؟',
                   'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
                   'صراحه  |  شخص معك بالحلوه والمُره؟',
                   'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
                   'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
                   'صراحه  |  وش تتمنى الناس تعرف عليك؟',
                   'صراحه  |  ابيع المجرة عشان؟',
                   'صراحه  |  أحيانا احس ان الناس ، كمل؟',
                   'صراحه  |  مع مين ودك تنام اليوم؟',
                   'صراحه  |  صدفة العمر الحلوة هي اني؟',
                   'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
                   'صراحه  |  صفة تحبها في نفسك؟',
                   'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
                   'صراحه  |  تصلي صلواتك الخمس كلها؟',
                   'صراحه  |  ‏تجامل أحد على راحتك؟',
                   'صراحه  |  اشجع شيء سويتة بحياتك؟',
                   'صراحه  |  وش ناوي تسوي اليوم؟',
                   'صراحه  |  وش شعورك لما تشوف المطر؟',
                   'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
                   'صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  اي الدول تتمنى ان تزورها؟',
                   'صراحه  |  متى اخر مره بكيت؟',
                   'صراحه  |  تقيم حظك ؟ من عشره؟',
                   'صراحه  |  هل تعتقد ان حظك سيئ؟',
                   'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
                   'صراحه  |  كلمة تود سماعها كل يوم؟',
                   'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
                   'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
                   'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
                   'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
                   '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
                   'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
                   '‏صراحه | هل تحب عائلتك ام تكرههم؟',
                   '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
                   '‏صراحه  |  هل خجلت من نفسك من قبل؟',
                   '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
                   '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
                   '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
                    '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
                   '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
                   '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
                   'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
                   '‏صراحه  |  ما هو عمرك الحقيقي؟',
                   '‏صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
               ]
                 client.on('message', message => {
               if (message.content.startsWith('!sra7a')) {
                   if(!message.channel.guild) return message.reply('** This command only for servers **');
                var client= new Discord.RichEmbed()
                .setTitle("لعبة صراحة ..")
                .setColor('RANDOM')
                .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
                .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                                .setTimestamp()

                 message.channel.sendEmbed(client);
                 message.react("??")
               }
               });





















  client.on('message', async ReBeLL => {
if(ReBeLL.author.bot) return;
if (ReBeLL.channel.guild) {
if (ReBeLL.content.startsWith(prefix + `8ball`)) {
    let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
    let authorReBeL = ReBeLL.author.username;

    // https://en.wikipedia.org/wiki/Magic_8-Ball
    let ReBeL = [
        //إجآبآت إجآبيه
"هذا مؤكد.",
        "إنه بالتأكيد كذلك" ,
        "بدون أدنى شك.",
        "نعم بالتأكيد.",
        "يمكنك الاعتماد عليه.",
        "كما أرى أنه نعم.",
        "على الأرجح.",
        "توقعات جيدة.",
        "نعم فعلا.",
        "وتشير الدلائل إلى نعم.",

        // إجابات غير ملتزمة
        "الرد المحاولة مرة أخرى ضبابية.",
        "اسأل مرة اخرى لاحقا.",
        "الأفضل أن لا أقول لكم الآن.",
        "لا يمكن التنبؤ الآن.",
        "التركيز والمحاولة مرة أخرى." ,

        // إجابات سلبية
        "لا تعتمد على." ,
        "ردي هو لا.",
        "وتقول مصادري لا.",
        "أوتلوك ليس جيد بما فيه الكفاية.",
        "مشكوك فيه جدا."
    ]
    let randomReBeL = Math.floor(Math.random() * ReBeL.length);

    if (!argsReBeL) return ReBeLL.reply("ask him something.");
    ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
}}});







  
client.login(process.env.BOT_TOKEN);
  
