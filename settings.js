/*
  •> Script By FxSx
  •> Ini Sc Bot Masih Beta Dari Multi Device [Baileys]
  •> Dan Jangan Hapus Nama Yang Punya Script!
  •> Jangan copas bang, ingat allah maha mengetahui
  •> Kalo mau Izin dulu yang punya sc 
  •> kalo mau tambahin nama FxSx thanks to sc bot lu
*/
const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./src/imgnya.jpg')
global.thumb2 = fs.readFileSync('./src/imgnya2.jpg')
global.weel = fs.readFileSync('./src/wellcom.mp3')
global.beey = fs.readFileSync('./src/leavee.mp3')
global.vnerror = fs.readFileSync('./src/errorr.mp3')
global.roflix = 'https://roflixzy.vercel.app/'
global.roflix2 = 'https://roflix.my.id/'
global.linkgc = 'https://chat.whatsapp.com/Bh4Gk4ipq2pD3c3BJKyyk7'
global.userB = []
global.ownerNumber = ['6282239202895','6282239202895']
global.ownerNumber2 = '+6282239202895'
global.packname = 'XwanSano-MD'
global.packname2 = 'XwanSano-Bot'
global.author = '© Alwi Xwan'
global.author2 = '© Alwi Xwan'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'sesi'
global.mess = {
  admin: '*Fitur Khusus Admin Grup*',
  botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
  ownerBot: '*Fitur Khusus Owner*',
  group: '*Fitur Khusus Group*',
  private: '*Fitur Khusus Private Chat*',
  wait: '*Diproses...*',
  sukses: '*Sukses*',
  error: '*Error...*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
