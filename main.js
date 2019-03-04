const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    height: 720,
    width: 1280
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  mainWindow.setMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});