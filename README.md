# Channel Forward

A JavaScript program that will forward any embedded messages received in one Discord channel to another channel.

## Getting Started

1. Create a Discord bot and add it to your server by following the *Application Setup* and *Adding Your App* guides under *Getting Started* on the [discord.js guide](https://discordjs.guide/legacy). Make sure you give your bot the *Send Messages* permission on the OAuth2 step.

2. Install the [Bun JavaScript runtime](https://bun.com/) by copying and pasting the command on the website for your system type into a terminal. Once the command has run, close the terminal.

3. Download the files for this program by pressing the green *Code* dropdown menu on the top right of this page. Then click the *Download ZIP* button. Unzip the files.

4. In the unzipped folder, create a file named *.env*. Set up the *.env* in the following manner:
```
TOKEN=<Your_Bots_Token>
READING_CHANNELS=<Channel_ID>
WRITING_CHANNELS=<Channel_ID>,
EMBED_TITLE=Embed Title
EMBED_FOOTER=Embed Footer
```
Replacing <Your_Bots_Token> with your new bots token, <Channel_ID> with the IDs of the channels you wish to read from and write to, and the title and footer with your desired title and footer of the forwarded messages.

5. Open a new terminal and run the following to install the dependencies required for this program:
```bash
bun install
```

6. Once the dependencies have installed, you've set up your .env file, and you've invited your new bot to your server, you are ready to run the program.
```bash
bun run index.ts
```
Once the program has been run, it will log in to your bot, then it will begin listening to the READING_CHANNELS and forwarding the messages to the WRITING_CHANNELS.
