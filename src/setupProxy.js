const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/app', createProxyMiddleware({
        target: 'http://3.34.118.226:8080', // Swagger 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/app': '', // 프록시된 URL에서 제거할 경로
        },
      }));
}