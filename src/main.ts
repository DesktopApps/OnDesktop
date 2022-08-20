import {app, BrowserWindow, BrowserWindowConstructorOptions, nativeImage} from "electron";
import { w } from "./util";
import { random } from "make-random";
import path from "path";


/** Browser options */
const options : BrowserWindowConstructorOptions = {
  title: "OnDesktop",
  icon: nativeImage.createFromPath(path.join(__dirname, 'icon.png')),
  darkTheme: true,
  show: false,
  width: 800,
  height: 600,
  webPreferences: {
    devTools: true,
    javascript: true,
    contextIsolation: true,
    autoplayPolicy: "no-user-gesture-required",
    spellcheck: false,
    enableWebSQL: false,
    sandbox: true,
  },
}

/** The Electron Window */
export let window : BrowserWindow;


function createWindow () {

  window = new BrowserWindow(options);

  random().then((r) => {

    console.log(r);

    if (r) {
      w.loadFile("index.html");
    } else {
      w.loadSite("ondesktop.cyou", "/", 443)
      console.log(window.webContents)
    }

  });

  


  window.show();
}

app.on('ready', createWindow);