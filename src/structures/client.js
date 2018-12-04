const { BrowserWindow } = require('electron');
const { format }        = require('url');
const { join }          = require('path');

module.exports = class KashimaClient {
    /**
     * Kashima client constructor
     * 
     * @param {import('electron').App} app The application
     */
    constructor(app) {
        this.app = app;
        this.ready = false;
        this.window = null;
    }

    /**
     * Creates the Browser window.
     * 
     * @returns {KashimaClient} The client instance
     */
    createBrowserWindow() {
        this.window = new BrowserWindow({ title: 'Kashima' });
        this.window.setMenu(null);
        this.window.webContents.openDevTools();
        this.app.setName('Kashima');
        this.window.loadURL(format({
            pathname: join(__dirname, '..', 'static', 'index.html'),
            protocol: 'file:',
            slashes: true
        }));

        this.window.on('closed', () => this.window = null);
    }

    /**
     * Gets the application
     * 
     * @returns {import('electron').App}
     */
    getApplication() { return this.app; }
};