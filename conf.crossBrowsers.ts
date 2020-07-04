import { config as baseConfig} from './conf';

baseConfig.capabilities = undefined;
baseConfig.multiCapabilities = [
  {'browserName': 'chrome'},
  {'browserName': 'firefox'}
];
