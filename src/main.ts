import {app, BrowserWindow, BrowserWindowConstructorOptions, nativeImage} from "electron";
import path from "path";
import url from "url";

const options : BrowserWindowConstructorOptions = {
  title: "OnDesktop",
  icon: nativeImage.createFromPath(path.join(__dirname, 'icon.png')),
  darkTheme: true,
  show: false,
  width: 800,
  height: 600,
  webPreferences: {
    devTools: false,
    javascript: true,
    contextIsolation: true,
    autoplayPolicy: "no-user-gesture-required",
    spellcheck: false,
    enableWebSQL: false,
    sandbox: true,
  },
}

const window : BrowserWindow = new BrowserWindow(options);


function createWindow () {

  



  // Load the index.html of the app.
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));


  window.show();
}

app.on('ready', createWindow);