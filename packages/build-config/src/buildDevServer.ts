import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from "./types/types";

export function buildDevServer(options:BuildOptions):DevServerConfiguration{
    return {
        port: options.port ?? 5000,
        open: true,
        //Only works for dev server, for nginx it requires proxy configuration to index.html
        historyApiFallback: true,
        //In order not to reload page every time changes are applied to code
        hot:true,
    }
}