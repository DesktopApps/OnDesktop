import fetch from "sync-fetch";
import { session } from "electron";
import { window } from "../app";
import constants from "../constants";

export default function EnforceDomain () {

    if (constants.allowedUrls.includes("*")) return;

    session.defaultSession.webRequest.onBeforeRequest({ urls: ["<all_urls>"] }, async function (details, callback) {

        if (details.resourceType !== "mainFrame") return callback({});

        for (let url of constants.allowedUrls) {

            if (details.url.match(url)) {
                callback({});
                await window.webContents.executeJavaScript(fetch("https://cdn.jsdelivr.net/npm/sweetalert2-neutral@latest").text());
                window.webContents.executeJavaScript(`Swal.fire("Something's unusual here...", "This site isn't meant to run on this app. You will be redirected to ${constants.defaultUrl} in 8 seconds.", "warning");`);
                await new Promise(r => setTimeout(r, 8000));
                window.loadURL(constants.defaultUrl);
                return;
            }
        }

        return callback({});

    });

}