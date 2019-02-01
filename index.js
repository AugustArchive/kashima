const {
    app,
    BrowserWindow,
    Menu,
    Tray,
    ipcMain,
    nativeImage
} = require('electron');
const {
    RPC: { Client }
} = require('./modules');
const { format } = require('url');
const { join }   = require('path');
const Statuses   = require('./util/statuses');

const rpc = new Client({
    clientID: '519521041966563338',
    debug: true
});
let win;

const mountApplication = () => {
    win = new BrowserWindow({ title: 'Kashima' });
    win.setMenu(null);
    app.setName('Kashima');
    win.loadURL(format({
        pathname: join(__dirname, 'src', 'index.html'),
        slashes: true,
        protocol: 'file:'
    }));
    win.on('closed', () => {
        win = null;
    });
    const icon = nativeImage.createFromPath(join(__dirname, 'assets/icon.png'));
    const tray = new Tray(icon);
    const ctxMenu = Menu.buildFromTemplate([
        {
            role: 'reload'
        },
        {
            label: 'Hide',
            accelerator: 'CmdOrCtrl+H',
            click: (_, win) => win.hide()
        },
        {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: () => {
                app.isQuiting = true;
                tray.destroy();
                process.exit(-3);
            }
        }
    ]);
    tray.setContextMenu(ctxMenu);
};

app.on('ready', () => {
    mountApplication();
    rpc.send('SET_ACTIVITY', Statuses.IDLE());
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (win === null)
        mountApplication();
});

const setActivities = () => {
    ipcMain.on('kashima:play:normal', (_, info) => rpc.send('SET_ACTIVITY', Statuses.PLAYING('normal', info)));
    ipcMain.on('kashima:play:qt', () => rpc.send('SET_ACTIVITY', Statuses.PLAYING('qt')));
    ipcMain.on('kashima:pause', () => rpc.send('SET_ACTIVITY', Statuses.IDLE()));
};

rpc.on('ready', () => {
    setActivities();
    setTimeout(setActivities, 15e3);
});