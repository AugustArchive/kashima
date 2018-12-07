const DiscordRPC = require('discord-rpc');
const { Client } = require('discord-rpc');

module.exports = class KashimaRPCClient extends Client {
    /**
     * Kashima RPC constructor
     * 
     * @param {KashimaRPCOptions} options The kashima RPC options
     */
    constructor(options) {
        super({ transport: 'ipc' });

        this.options = options;
        DiscordRPC.register(options.clientID); // Registers the client ID

        this.on('ready', () => {
            console.log(`[KashimaRPC] [Process ${process.pid}] <=> Connected to Discord, setting RPC details...`);
            this.setClientActivity();
        });
    }

    /**
     * Start the RPC client
     */
    async start() {
        await super.login({ clientId: this.options.clientID });
    }

    /**
     * Destroy the RPC
     */
    destroy() { super.destroy(); }

    /**
     * Sets the activity of the RPC
     * 
     * @param {string} [details] The details
     * @returns {KashimaRPCClient} The client instance
     */
    setClientActivity(details = '⏯ Currently Idling...') {
        this.setActivity({
            details,
            smallImageKey: 'kashimasmall',
            smallImageText: 'https://github.com/auguwu/kashima',
            largeImageKey: 'kashimaicon'
        }, process.pid);
        return this;
    }
};

/**
 * @typedef {Object} KashimaRPCOptions
 * @prop {string} clientID The client ID to register
 * @prop {boolean} enabled If the RPC should be enabled in initial startup.
 */