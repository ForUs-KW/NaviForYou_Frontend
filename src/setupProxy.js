const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use(createProxyMiddleware('/app', {
        target: 'http://3.34.118.226:8080', 
        changeOrigin: true,
        })
        );
}