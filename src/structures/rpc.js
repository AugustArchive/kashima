const DiscordRPC, { Client } = require('discord-rpc');

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
     * @returns {KashimaRPCClient} The client instance
     */
    setClientActivity() {
        this.setActivity({
            largeImageKey: 'kashima',
            details: '⏯ Currently Idling...',
            smallImageKey: 'kashimaIcon',
            smallImageText: 'https://github.com/auguwu/kashima'
        }, process.pid);
        return this;
    }
};

/**
 * @typedef {Object} KashimaRPCOptions
 * @prop {string} clientID The client ID to register
 * @prop {boolean} enabled If the RPC should be enabled in initial startup.
 */