const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `ndt!banned = Dene ve Gör! \ndt!avatarım = Avatarınınızı Gösterir. \ndt!herkesebendençay = Herkese Çay Alırsınız. \ndt!koş = Koşarsınız.\ndt!çayiç = Çay İçersiniz. \ndt!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ndt!çayaşekerat = Çaya Şeker Atarsınız. \ndt!yumruh-at = Yumruk Atarsınız. \ndt!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ndt!sunucuresmi = BOT Sunucunun Resmini Atar. \ndt!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ndt!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `ndt!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ndt!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ndt!unban = İstediğiniz Kişinin Yasağını Açar. \ndt!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \ndt!oylama = Oylama Açar. \ndt!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "dt!yardım = BOT Komutlarını Atar. \dt!bilgi = BOT Kendisi Hakkında Bilgi Verir. \dt!ping = BOT Gecikme Süresini Söyler. \dt!davet = BOT Davet Linkini Atar. \dt!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcım:**", " **@!DT HAYLAZDEAD#4532 ** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
