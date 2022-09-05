const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
loadEvents(client);

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login(client.config.token);