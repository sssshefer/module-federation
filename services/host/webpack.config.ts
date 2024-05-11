import webpack from 'webpack';
import {buildWebpack, BuildPaths, BuildPlatform, BuildMode, BuildOptions} from "@packages/build-config";
import path from "path";
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildMode,
    port?: number,
    analyzer?:boolean,
    platform?:BuildPlatform,
    SHOP_REMOTE_URL?:string,
    ADMIN_REMOTE_URL?:string
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';
    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths,
        analyzer:env.analyzer,
        platform:env.platform ?? 'desktop'
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
       remotes : {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
       },
        shared: {
            ...packageJson.dependencies,
            react: {
                //eager is used to load the module immediately. Opposite to lazy loading
                eager: true,
                requiredVersion: packageJson.dependencies['react']
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom']
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom']
            }
        }
    }));
    return config
}