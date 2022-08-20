import {app, BrowserWindow, BrowserWindowConstructorOptions, nativeImage} from "electron";
import { w } from "./util";
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
    devTools: false,
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

  window = new BrowserWindow(options);;

  w.loadFile("index.html");


  window.show();
}

app.on('ready', createWindow);