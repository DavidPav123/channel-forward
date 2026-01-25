import { Client, Events, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('./config.json', 'utf-8'));
const { TOKEN, READING_CHANNELS, WRITING_CHANNELS, EMBED_TITLE, EMBED_FOOTER } = config;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on(Events.Error, err => {
    console.error(err);
    process.exit(1);
});

client.on(Events.MessageCreate, (message) => {
    console.log(`${message.author.tag} said: ${message}`);

    if (READING_CHANNELS.includes(message.channel.id)) {
        const messages = [];
        if (message.content === '!embed') {
            // 1. Build the embed
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('TEST EMBED TITLE')
                .setDescription('TEST DESCRIPTION')
                .addFields(
                    { name: 'FIELD 1 NAME', value: 'FIELD 1 VALUE', inline: true },
                    { name: 'FIELD 2 NAME', value: 'FIELD 2 VALUE', inline: true },
                )
                .setFooter({ text: 'TEST EMBED FOOTER' });

            // 2. Send it (note: embeds is an array [])
            message.channel.send({ embeds: [exampleEmbed] });
        }

        if (message.embeds.length > 0) {
            message.embeds.forEach((embed) => {
                const newembed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle(EMBED_TITLE || 'Default Title')
                    .setDescription(embed.description)
                    .setFields(embed.fields)
                    .setFooter({ text: EMBED_FOOTER || 'Default Footer' });
                messages.push(newembed);
            });
            WRITING_CHANNELS.forEach(channel => {
                const channel_promise = client.channels.fetch(channel);
                channel_promise.then((discord_channel) => {
                    // Check if the channel is a TextChannel or has send method
                    if (
                        discord_channel &&
                        'send' in discord_channel &&
                        typeof (discord_channel).send === 'function'
                    ) {
                        (discord_channel).send({ embeds: messages });
                    }
                });
            });
        }

    }
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.login(TOKEN);
