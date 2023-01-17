import { Client } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === '!ping') {
    msg.reply('pong!')
  }
})

client.login(process.env.TOKEN)
