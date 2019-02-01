module.exports = {
    // From: https://github.com/LiquidBlast/discord-urpc
    RPC: {
        Client: require('./rpc/client'),
        IPCTransport: require('./rpc/ipc')
    }
};