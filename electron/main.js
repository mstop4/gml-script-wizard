const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const createWindow = () => {
  let window = new BrowserWindow({
    height: 720,
    width: 1280
  });

  window.loadURL(`file://${__dirname}/index.html`);
  window.setMenu(null);

  return window;
};

app.on('ready', () => {
  let mainWindow = createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }

    mainWindow = null;
  });

  app.on('activate', function() {
    if (mainWindow === null) {
      createWindow();
    }
  });
});