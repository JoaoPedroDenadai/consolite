function getTimestamp(timestamp = "pt-br") {
    return new Date().toLocaleString(timestamp, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function getCallerInfo() {
    const stack = new Error().stack;
    const stackLines = stack.split("\n").slice(1);
    const callerLine = stackLines[3] ? stackLines[3].trim() : "";
    const nameFnRaw = callerLine.split(" ")[1] || "";
    const nameFn = (nameFnRaw && !nameFnRaw.includes("/") && !nameFnRaw.includes("\\") && !nameFnRaw.startsWith("file:")) ? nameFnRaw : "anonymous";
    const fileMatch = callerLine.match(/\((.+):(\d+):\d+\)/) || callerLine.match(/at\s+(.*[\/\\].+):(\d+):\d+/);
    const fileName = fileMatch ? fileMatch[1].split(/[\/\\]/).pop() : "unknown";
    const lineNumber = fileMatch ? fileMatch[2] : "?";
    return { nameFn, fileName, lineNumber };
}

function getVerifyParams(message, color, settings, type) {
    let params = {};
    let msg = `\x1b[1m${color}[${type}]`;
    if (settings.showTimestamp) {
        params.timestamp = getTimestamp();
        msg += ` [${params.timestamp}]`;
    }
    if (settings.showFileLine) {
        params.file = getCallerInfo().fileName;
        params.line = getCallerInfo().lineNumber;
        msg += ` [${params.file}:${params.line}]`;
    }
    if (settings.showFn) {
        params.fn = getCallerInfo().nameFn;
        msg += ` [${params.fn}]`;
    }
    msg += `\x1b[0m: `;
    return msg + message;
}

module.exports = { getTimestamp, getCallerInfo, getVerifyParams };
