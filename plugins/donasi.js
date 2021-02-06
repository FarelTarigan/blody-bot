let handler = async m => m.reply(`
╭─「 donasi • pulsa 」
│ • indosat ooredoo [085834362737]
│ • telkomsel []
╰────
`.trim()) // tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler 