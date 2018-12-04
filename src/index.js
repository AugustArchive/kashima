const KashimaClient = require('./structures/client');
const KashimaRPC    = require('./structures/rpc');

const app = new KashimaClient(require('electron').app);
const rpc = new KashimaRPC({
    clientID: '',
    enabled: true
});

rpc.start();

app
    .getApplication()
    .on('ready', app.createBrowserWindow())
    .on('window-all-closed', () => {
        if (process.platform !== 'darwin')
            app.getApplication().quit();
    })
    .on('activate', () => {
        if (app.window === null)
            app.createBrowserWindow();
    });