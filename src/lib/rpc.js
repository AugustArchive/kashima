const { register, Client } = require('discord-rpc');

module.exports = class KashimaRPC extends Client {
    /**
     * Construct the Kashima RPC state
     * 
     * @param {string} clientID The discord app client ID
     */
    constructor(clientID) {
        super({ transport: 'ipc' });
        if (typeof clientID !== 'string')
            throw new SyntaxError("clientID is not a string.");
        register(clientID);

        this.clientID = clientID;
    }

    /**
     * Set the activity
     * 
     * @param {string} details The details to set for the RPC
     */
    updateActivity(details) {
        return super.setActivity({
            details,
            largeImageKey: 'kashima',
            largeImageText: 'https://kashima.augu.me',
            smallImageKey: 'kashimasmall'
        }, process.pid);
    }

    start() {
        return this
            .login({ clientId: this.clientID });
    }
};