export default [
	'npm run deploy:dev',
	'npm run deploy:doc',
	// high command lines
	'npm install',
	'npm run dev',
	'npm run serve',
	'npm run build',
	'npm run deploy',
	'npm run deploy:sl',
	'npm run sync',
	'npm run watch',
	'service mongod start',
	'pm2 start all',
	'pm2 stop all',
	'pm2 list',
	'pm2 logs',
	'pm2 status',
	// devDependencies
	'-D eslint-config-teslint@latest',
	'-D @types/node',
	'-D gulp@^4.0.0 ',
	'-D gulp-autoprefixer',
	'-D gulp-babel',
	'-D gulp-clean-css',
	'-D gulp-clean',
	'-D gulp-htmlmin',
	'-D gulp-rename',
	'-D gulp-replace',
	'-D gulp-ssh',
	'-D gulp-strip-css-comments',
	'-D gulp-uglify',
	// dependencies
	'cheerio@^1.0.0-rc.2',
	'joi',
	'lodash',
	'md5',
	'moment',
	'nconf',
	'normalize.css',
	'request',
	'request-promise',
	'require-dir',
	'superagent',
	'superagent-charset',
	'-g @vue/cli',
	'-g eslint',
	'-g gulp@^4.0.0',
	'-g nodemon',
	'-g supervisor',
	'-g ts-node',
	'-g typings',
	'-g vsce',
	'-g yo generator-code',
	// command lines
	'vsce package',
	'code --install-extension',
];
