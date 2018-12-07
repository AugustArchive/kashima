const { BrowserWindow, app } = require('electron');
const { format }             = require('url');
const { join }               = require('path');

module.exports = class KashimaClient {
    /**
     * Kashima client constructor
     */
    constructor() {
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
        if (this.window)
            return; // If the window was created already

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