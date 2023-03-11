// COMMENTS WERE WRITTEN BY OPENAI CHAT BOT THE OTHER CODE WAS WRITTEN BY SOMEONE ELSE.
// IF YOU HAVE ANY QUESTIONS CONTACT OUR TEAM contact.ct@supspace.ga

// Export a function that takes a 'loader' parameter
module.exports = (loader) => {
    // Set custom colors for the loader
    loader.setColors({
        walking: ["blink", "dim", "fgWhite"],
        failedWalking: {
            name: ["bright", "fgYellow", "underline"],
            text: ["gray", "fgRed"]
        },
        typeError: {
            command: ["bright", "fgYellow"],
            type: ["fgYellow"],
            text: ["bright", "fgRed"]
        },
        failLoad: {
            command: ["bright", "fgMagenta"],
            type: ["fgRed"],
            text: ["bright", "fgRed"],
        },
        loaded: {
            command: ["bright", "fgRed"],
            type: ["bright", "fgWhite"],
            text: ["bright", "fgBlue"]
        },
    })
}
