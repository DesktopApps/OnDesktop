import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import constants from "./constants";
import adBlock from "./plugins/adBlock";
import EnforceDomain from "./plugins/domain";
import UserAgent from "./plugins/userAgent";


export let window : BrowserWindow;

function createWindow () {

    window = new BrowserWindow({
        title: "OnDesktop",
        width: constants.width,
        height: constants.height,
        icon: path.resolve(__dirname, "../assets/icon.png"),
        webPreferences: {
            autoplayPolicy: "no-user-gesture-required"
        }
    })

    UserAgent(); // Always use 
    EnforceDomain(); // Enforce  domain
    adBlock(); // Block all ads and analytics

    
    window.webContents.openDevTools()

    window.loadURL("", { userAgent: constants.useragent })
}

// Create a window when the app is ready.
app.on("ready", createWindow);

// End the process when all the windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});

// If activated and no windows are already existing, make a new window.
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
