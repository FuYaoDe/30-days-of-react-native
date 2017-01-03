const envMode = 'development';
const localServerDomain = 'henrysheu.ddns.net';
let config = {};

const defaultConfig = {
  userType: 'U',
};

// --------------- dev mode -------------
if (envMode === 'development') {
  config = {
    ...defaultConfig,
    envMode,
    serverDomain: `http://${localServerDomain}`,
  };
}

// --------------- qa mode -------------
if (envMode === 'qa') {
  config = {
    ...defaultConfig,
    envMode,
    serverDomain: 'http://qa.trademuch.co.uk',
    socketDomain: 'qa.trademuch.co.uk:1337',
  };
}

// --------------- prod mode -------------
if (envMode === 'prod') {
  config = {
    ...defaultConfig,
    envMode,
    serverDomain: 'http://www.trademuch.co.uk',
    socketDomain: 'www.trademuch.co.uk:1337',
  };
}



export default config;
