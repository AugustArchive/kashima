console.log([
    '  _  __         _     _',
    ' | |/ /__ _ ___| |__ (_)_ __ ___   __ _',
    " | ' // _\` / __| '_ \\| | '_ \` _ \\ / _\` |",
    " | . \\ (_| \\__ \\ | | | | | | | | | (_| |",
    " |_|\\_\\__,_|___/_| |_|_|_| |_| |_|\\__,_|",
    "",
    "Kashima made by auguwu and other contributors!"
].join('\n'));
const { BrowserWindow, Menu, ipcMain, app } = require('electron');
const { join } = require('path');
const { format } = require('url');
const RPClient = require('./lib/rpc');

let rpc = new RPClient('519521041966563338');
let mainWindow;

const mountApplication = () => {
    mainWindow = new BrowserWindow({ title: 'Kashima', icon: join(__dirname, '..', 'dist', 'icon.ico') });
    mainWindow.setMenu(null);
    app.setName('Kashima');
    mainWindow.loadURL(format({
        pathname: join(__dirname, 'static', 'index.html'),
        slashes: true,
        protocol: 'file:'
    }));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

const mountMenu = () => Menu.setApplicationMenu(Menu.buildFromTemplate(
    [
        {
            role: 'reload'
        },
        {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: () => app.quit()
        }
    ]
));

app.on('ready', () => {
    mountApplication();
    mountMenu();
    rpc.start().catch(console.error);
    rpc.updateActivity('Idling...');
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) {
        mountApplication();
    }
});

ipcMain.on('kashima:play', (song) => {
    if (song.isRadio)
        rpc.updateActivity(`⏯ ${song.radio_station}`);
    else
        rpc.updateActivity(`⏯ ${song.artist} - ${song.title}`);
});

ipcMain.on('kashima:pause', () => rpc.updateActivity('⏸ Paused'));