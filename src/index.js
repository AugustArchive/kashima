console.log([
    '  _  __         _     _',
    ' | |/ /__ _ ___| |__ (_)_ __ ___   __ _',
    " | ' // _\` / __| '_ \\| | '_ \` _ \\ / _\` |",
    " | . \\ (_| \\__ \\ | | | | | | | | | (_| |",
    " |_|\\_\\__,_|___/_| |_|_|_| |_| |_|\\__,_|",
    "",
    "Kashima made by auguwu and other contributors!",
    `Node.js: ${process.version}`,
    `Electron: ${require('../node_modules/electron/package.json').version}`,
    "",
    "State: Loading..."
].join('\n'));
const { BrowserWindow, app } = require('electron');
const DiscordRPC             = require('discord-rpc');
const { format }             = require('url');

let mainWindow;

const load = () => {
    mainWindow = new BrowserWindow({ title: 'Kashima', width: 340, height: 380 });
    mainWindow.setMenu(null);
    app.setName('Kashima');
    mainWindow.loadURL(format({
        pathname: require('path').join(__dirname, 'static', 'index.html'),
        slashes: true,
        protocol: 'file:'
    }));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', load);
app.on('window-all-closed', () => { app.quit(); });
app.on('activate', () => {
    if (mainWindow === null)
        load();
});

DiscordRPC.register('519521041966563338');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    rpc.setActivity({
        smallImageKey: 'kashimasmall',
        smallImageText: 'https://github.com/auguwu/kashima',
        largeImageKey: 'kashimaicon',
        details: 'Idling'
    });
});

rpc.login({ clientId: '519521041966563338' });