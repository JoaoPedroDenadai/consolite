
const { getVerifyParams } = require('./utils.js');

class Log{
    static settings = {
        showFn: true,
        showTimestamp: true,
        showFileLine: true,
        defaultFilePath: "",
        saveHistory: false,
    };

    static colors = {
        log: "\x1b[36m",
        warn: "\x1b[33m",
        error: "\x1b[31m",
        query: "\x1b[35m",
        success: "\x1b[32m",
    }

    static new = {
        log: (message, ...additional) => {
            const msg = getVerifyParams(message, Log.colors.log, Log.settings, "LOG");
            console.log(msg, ...additional);
        },
        warn: (message, ...additional) => {
            const msg = getVerifyParams(message, Log.colors.warn, Log.settings, "WARNING");
            console.warn(msg, ...additional);
        },
        error: (message, ...additional) => {
            const msg = getVerifyParams(message, Log.colors.error, Log.settings, "ERROR");
            console.error(msg, ...additional);
        },
        success: (message, ...additional) => {
            const msg = getVerifyParams(message, Log.colors.success, Log.settings, "SUCCESS");
            console.log(msg, ...additional);
        },
        query: (message, ...additional) => {
            const msg = getVerifyParams(message, Log.colors.query, Log.settings, "QUERY");
            console.log(msg, ...additional);
        },

    }
}

module.exports = Log;
