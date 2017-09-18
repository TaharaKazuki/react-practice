module.exports = {
	entry:'./src/main.js',
	output: {
		path: `${__dirname}/build`,
		filename: "bundle.js"
	},
	module: {
		rules:[
			{
				test:/\.js$/,
				use:[
					{
						loader: "babel-loader",
						options:{
							presets:[
									['env',{'modules':false}],
									'react'
							]
						}
					}
				],
				exclude:/node_modules/,
			},
			{
				test:/\.scss$/,
				loader:['style-loader','css-loader','sass-loader']
			}
		]
	},
	devtool:'source-map'
};