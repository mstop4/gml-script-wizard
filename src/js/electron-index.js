const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Global reference to window object to prevent it from being garbage-collected
let win;

function createWindow() {
  win = new BrowserWindow({width: 1280, height: 720});

  win.loadURL('http://localhost:8080');

  win.webContents.openDevTools();

  // dereference window when it is closed
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // If current OS is not macOS, quit the app
  // macOS apps are able to still run after all its windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, create a window in the app when the dock icon is clicked and there
  // are no other windows present
  if (win === null) {
    createWindow();
  }
});