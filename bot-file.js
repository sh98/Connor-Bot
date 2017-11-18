const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Type .cb help')
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.cb ping') {
    msg.channel.send('Pong!');
  }
  if (msg.content === '.cb invite') {
	console.log('Somebody loves your bot!')
    msg.channel.send('Here you go! ENTER-INVITE-HERE');
  }
  if (msg.content === '.cb help') {
    msg.channel.send('Commands: .cb ping | Replies with Pong | .cb help | Well... | .cb info | Displays info about this bot | Music commands... .cb play | Searches YouTube for videos and plays them | .volume a-value | Changes the volume of the MusicBot | .skip | Skips the current song');
  }
  if (msg.content === '.cb info') {
	console.log('Somebody just used the botinfo command.')
    msg.channel.send('Bot Owner: `Cøηηør#0941` | Bot Creator: Cøηηør and Person | Coder: Person | Online since: ENTER-DATE');
  }
  if (msg.content === '.cb botinfo') {
	console.log('Somebody just used the botinfo command.')
    msg.channel.send('.cb info');
  }
  if (msg.content === '.cb spam') {
	console.log('Somebody just used the spam command.')
    msg.channel.send('WARNING: Doing this in a non-spam channel is a bad idea. You have the right to be banned if you do not! ARE YOU SURE? Type .cb spam-yes if you are sure.');
  }
  if (msg.content === '.cb spam-yes') {
	console.log('Somebody just tried to spam your server.')
    msg.channel.send('Command is disabled.');
  }
  if (msg.content === '.cb die') {
	console.log('Somebody just used the die command. :P')
    msg.channel.send('Madachod');
  }
  if (msg.content === '.cb Die') {
	console.log('Somebody just used the die command. :P')
    msg.channel.send('Succ');
  }
  if (msg.content === '.help') {
	console.log('Somebody just used the MusicBot\'s help command.')
    msg.channel.send('Now showing information about MusicBot.');
  }
  if (msg.content === '.cb o') {
	console.log('Somebody just said o :p.')
    msg.channel.send('So you\'re Chaos?.');
  }
  if (msg.content === '.skip') {
    console.log('Somebody just used the skip command.')
  }
  if (msg.content === '.summon') {
    console.log('Somebody just used the summon command.')
  }
});

client.login('Enter-Token-Here');
