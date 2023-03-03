// COMMENTS WERE WRITTEN BY OPENAI CHAT BOT THE OTHER CODE IS COPYRIGHT TO OUR TEAM
// IF YOU HAVE ANY QUESTIONS CONTACT OUR TEAM contact.ct@supspace.ga

// Import necessary modules from Discord.js library
const { Client, Collection, MessageEmbed, WebhookClient } = require('discord.js');

// Export a function that takes a bot object as a parameter
module.exports = (bot) => {
    
    // Handle unhandled promise rejections and log them
    process.on('unhandledRejection', (reason, p) => {
        console.log(' [antiCrash] :: Unhandled Rejection/Catch');
        console.log(reason, p);
    });
    
    // Handle uncaught exceptions and log them
    process.on("uncaughtException", (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log(err, origin);
    }); 
    
    // Handle uncaught exceptions and log them (monitor version)
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.log(err, origin);
    });
    
    // Handle multiple promise resolves and log them
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [antiCrash] :: Multiple Resolves');
    });
}
