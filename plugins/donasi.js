let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Tri [0895618626337]
│ • Gopay [0895618626337]
│ • Saweria [https://saweria.co/BrayyLomli]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895618626337
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
