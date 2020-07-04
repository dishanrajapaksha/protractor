import { Config } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  allScriptsTimeout: 110000,
  framework: 'jasmine',
  maxSessions: 1,
  noGlobals: true,
  specs: ['**/*[sS]pec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      'excludeSwitches': ['enable-automation'],
      'args': [
        'incognito',
        'disable-extensions',
        'enable-automation',
        'disable-infobars',
        'start-maximized',
        'enable-crash-reporter-for-testing'
      ]
    }
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
  },
  params: {
    baseUrl: 'http://www.thejamstop.com/user/login'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: [],
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
};
