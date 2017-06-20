const nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
const options = {
  name              : 'Graphcool',
  targetUrl         : 'https://console.graph.cool/',
  platform          : 'mac',
  version           : '1.0.0',
  out               : '../src/macOS',
  icon              : '../static/graphcool.icns',
  fastQuit          : true,
  disableContextMenu: true,
  disableDevTools   : true,
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});
