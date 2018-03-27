module.exports = {
	sections: [
		{
			name: 'Base',
			components: 'src/components/base/**/*.js',
		},
		{
			name: 'Helpers',
			content: 'src/helpers/Readme.md'
		},
		{
			name: 'Common',
			components: 'src/components/common/**/*.js'
		}
	],
	defaultExample: true,
	webpackConfig: require('./webpack.local.config.js')
};
