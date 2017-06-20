const nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
const options = {
  name       :  'Graphcool',
  targetUrl  :  'https://console.graph.cool/',
  platform   :  'linux',
  version    :  '1.0.0',
  out        :  '../src/linux',
  icon       :  '../static/graphcool_512x512.png',
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});
