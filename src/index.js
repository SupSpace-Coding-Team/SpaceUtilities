// Import required modules
const Aoijs = require("aoi.js"); // A module for creating Discord bots
const {Panel} = require("@akarui/aoi.panel"); // A module for creating a web-based control panel for the bot
const os = require("os"); // A module for getting information about the operating system
const { Client, Collection, MessageEmbed, WebhookClient } = require('discord.js'); // A module for interacting with the Discord API
const fs = require('fs'); // A module for working with the file system
const path = require('path'); // A module for working with file and directory paths
const config = require('./config.js'); // A custom module with configuration settings for the bot

// Create a new AoiClient object and set it to the 'bot' variable
const bot = new Aoijs.AoiClient(config.AoiClient);


// Create a new Panel object and set it to the 'panel' variable
const panel = new Panel({
    username: process.env.USERNAME1, // Username for logging into the control panel
    password: process.env.PASSWORD1, // Password for logging into the control panel
    secret: "aoijs", // Session secret for the control panel
    port: 3000, // Port on which the control panel will be hosted (default is 3000)
    bot: bot, // The AoiClient object that will be controlled by the control panel
    mainFile: "src/index.js", // The main file where the bot's code is running (default is taken from package.json)
    commands: "./src/commands" // The directory where command files are located
})

// Set the bot's status using the status.js file in the handler directory
bot.status(...require('./handler/status.js'));

// Load the control panel
panel.loadPanel();

// Handle errors in the control panel
panel.onError();

// Load commands from the './src/commands' directory using the LoadCommands class from aoi.js
const loader = new Aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./src/commands/');

// Require the 'colors.js' file to set up the terminal color.
require('./colors.js')(loader);

// Load additional functionality from all .js files in the './src/prev' directory
const files = fs.readdirSync('./src/prev').filter(file => file.endsWith('.js'))
files.forEach(x => {
  require(`./prev/${x}`)(bot)
});

// Require the 'variables.js' file to set up global variables for the bot
bot.variables(require('./handler/variables.js'));
