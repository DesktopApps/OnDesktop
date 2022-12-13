import { ElectronBlocker } from '@cliqz/adblocker-electron';
import fetch from "cross-fetch"; // required 'fetch'
import { session } from "electron";



/**
 * Load ad blocker
 */
export default function adBlock () {

    ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then(blocker => {
        blocker.enableBlockingInSession(session.defaultSession);
    });

}