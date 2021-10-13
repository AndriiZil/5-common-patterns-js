class Logger {
    constructor(config) {
        if (!Logger.instance) {
            Logger.instance = this;
        }
    }
}
