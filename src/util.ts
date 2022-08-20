import { window } from "./main";
import path from "path";
import url from "url";

export class w {

    /** Loads a file */
    public static loadFile (fileName : string) {
        window.loadURL(url.format({
            pathname: path.join(__dirname, "/assets/" + fileName),
            protocol: 'file:',
            slashes: true
          }));
    }

    /** Load a site from host, path, and port. */
    public static loadSite (host : string, path : string, port? : number | string | null | undefined) {
        window.loadURL(url.format({
            protocol: 'https:',
            slashes: true,
            hostname: host,
            pathname: path,
            port: port,
          }));
    }

    /** Load a site from a complete (href) URL. */
    public static loadUrl (URL : string) {
        window.loadURL(url.format({
            href: URL,
          }));
    }
 
}