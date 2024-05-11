import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import {BuildOptions} from "./types/types";

export function buildWebpack(options:BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    const isDev = options.mode === 'development';

    return {
        mode: mode ?? 'development',
        //path is needed to support different operating systems
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map':'source-map',
        devServer: isDev ? buildDevServer(options) : undefined

    }
}