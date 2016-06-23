module.exports = {
  entry : './app/app.jsx',
  output : {
		path : __dirname,
		filename : './public/bundle.js'
  },
  resolve : {
 	root: __dirname,
 	alias: {
 		// Add your Alias and paths here
 		Main: 'app/components/Main.jsx',
 		Navbar: 'app/components/Navbar.jsx',
    Weather: 'app/components/Weather.jsx',
    WeatherForm: 'app/components/WeatherForm.jsx',
    WeatherMessage: 'app/components/WeatherMessage.jsx',
    About: 'app/components/About.jsx',
    Examples: 'app/components/Examples.jsx',
    openWeatherMap: 'app/api/openWeatherMap.jsx'

 	},
	extensions : ['','.js','.jsx']
  },
  module : {
    loaders : [
    	{
    		loader : 'babel-loader',
    		query : {
    			presets: ['react','es2015','stage-0']
    		},
    		test : /\.jsx?$/,
    		exclude : /(node_modules|bower_components)/
    	}
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
