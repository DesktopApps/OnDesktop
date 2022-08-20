import {app, BrowserWindow} from "electron";
import path from "path";
import url from "url";

function createWindow () {

  // Create the browser window.
  let window = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
}

app.on('ready', createWindow);