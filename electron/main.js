const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    height: 720,
    width: 1280
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.setMenu(null);

  mainWindow.on('window-all-closed', () => {
    mainWindow = null;
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});