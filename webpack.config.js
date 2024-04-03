// webpack.config.js

const path = require("path"); // 노드에서 제공하는 패스모드 활용
// const HtmlWebpackPlugin = require("html-webpack-plugin"); // 터미널에 설치후 사용

module.exports = {
	entry : './src/index.js', // 시작파일
    output : { // 만들어지는 최종파일을 내보내는 옵션
    	filename : "main.js",
        path : path.resolve(__dirname, "dist"), // 폴드 현재경로 하위 -> 폴더명
    },
}