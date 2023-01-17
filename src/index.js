import { Client, Events, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on(Events.ClientReady, () =>
  console.log(`Logged in as ${client.user.tag}!`)
)

client.on(Events.MessageCreate, async (message) => {
  console.log(message.content)
})

client.login(process.env.TOKEN)
