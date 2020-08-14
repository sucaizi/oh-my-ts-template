const packageJson = require('../../package.json');
const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');
const path = require('path');

module.exports = {
	title: packageJson.name,
	description: packageJson.description,
	base: '/algorithms/',
	port: '8080',

	themeConfig: {
		nav,
		sidebar,
	},

	plugins: [
		'vuepress-plugin-cat',
		[
			'mathjax',
			{
				target: 'svg',
				macros: {
					'*': '\\times',
				},
			},
		],
		// 增加 Markdown 文档对于 TypeScript 语法的支持
		[
			'vuepress-plugin-typescript',
			{
				tsLoaderOptions: {
					// ts-loader 的所有配置项
				},
			},
		],
	],

	chainWebpack: (config) => {
		config.resolve.alias.set('image', path.resolve(__dirname, 'public'));

		// 在文档中模拟库包的引入方式
		// 例如发布了 algorithms-utils 库包之后，
		// import greet from 'algorithms-utils/greet.ts' 在 Vuepress 演示文档中等同于
		// import greet from '~/src/greet.ts',
		// 其中 ~ 在这里只是表示项目根目录
		config.resolve.alias.set(
			'algorithms-utils',
			path.resolve(__dirname, '../../src')
		);
	},
};;
