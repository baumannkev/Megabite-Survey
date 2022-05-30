// const path = require("path");
const fs = require("fs");

module.exports = {
    lintOnSave: false,
    //outputDir: path.resolve(__dirname, '../../pos/frontend/inventory'),
    // publicPath: "",
    publicPath: "/",
    //assetsSubDirectory: 'static',
    //assetsPublicPath: '/',

    //assetsDir: 'static',
    assetsDir: "static",

    //publicPath: '/customer/', // bunu koyunca subdomain altinda calisabiliyorsun
    devServer: {
        //host: '192.168.1.190',
        //public: 'mars.posale',
        //public: 'mars.posale/customer',
        //host: '0.0.0.0',
        //host: '24.84.228.58',
        //port: 9306,
        port: 4655,
        // public: "https://newconnect.megabitepizza.com/",
        // public: "https://megaconnect.androvega.ca/",
        //public: "http://connect.healthiboost.com",
        host: "0.0.0.0",
        compress: true,
        //hot: true,
        disableHostCheck: true,
        /*    https: {
              key: fs.readFileSync("/etc/ssl/healthiboost.com/ssl.key"),
              cert: fs.readFileSync("/etc/ssl/healthiboost.com/ssl.cert"),
            },*/
    },
};