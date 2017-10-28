require('dotenv').config();

const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');
const Settings = require('./src/settings.js');

const environment = process.env.NODE_ENV;

let mainWindow;


const settings = new Settings({
  configName: 'user-preferences',
  defaults: {
    windowBounds: { width: 800, height: 600 }
  }
});


function createWindow(){

  // test
  console.log(settings.get('windowBounds'));

  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600
  });

  if(environment.toLowerCase() === 'development'){
    mainWindow.loadURL('http://localhost:3000');
  }else{
    /*
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
    */
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
  if (process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', function(){
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.