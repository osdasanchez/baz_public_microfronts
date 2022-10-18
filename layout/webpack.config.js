const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => {
    const envPublicPath = argv.mode === "development"
        ? "http://localhost:8081/"
        : "http://baz-web-layout-microfront.s3-website-us-east-1.amazonaws.com/";
    return ({
        output: {
            publicPath: envPublicPath,
        },

        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        },

        devServer: {
            port: 8081,
            historyApiFallback: true,
        },

        module: {
            rules: [
                {
                    test: /\.m?js/,
                    type: "javascript/auto",
                    resolve: {
                        fullySpecified: false,
                    },
                },
                {
                    test: /\.(css|s[ac]ss)$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4 * 1024 // 4kb
                        }
                    }
                },

            ],
        },

        plugins: [
            new ModuleFederationPlugin({
                name: "layout",
                filename: "remoteEntry.js",
                remotes: {},
                exposes: {
                    "./Header": "./src/components/header/Header",
                    "./Footer": "./src/components/footer/Footer",
                    "./Button": "./src/components/button/Button",
                },
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
            }),
        ],
    });
}
