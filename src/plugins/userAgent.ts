import { session } from "electron";
import constants from "../constants";

export default function UserAgent () {

    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders["user-agent"] = constants.useragent;
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

}