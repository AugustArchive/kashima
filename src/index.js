const KashimaClient = require('./structures/client');
const KashimaRPC    = require('./structures/rpc');

const app = new KashimaClient();
const rpc = new KashimaRPC({
    clientID: '519521041966563338', // Only change this when you know what a Discord snowflake is
    enabled: true
});

rpc.start();

app
    .getApplication()
    .on('ready', app.createBrowserWindow())
    .on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app
                .getApplication()
                .quit();
        }

        rpc.destroy();
    })
    .on('activate', () => {
        if (app.window === null)
            app.createBrowserWindow();
    });