import fs from 'fs';
import YAML from 'yaml';
import _ from 'lodash';

const DEFAULT_SETTINGS = 'assets/default_settings.yaml';
const LOCAL_SETTINGS = 'assets/local_settings.yaml';
const EMPTY_SETTINGS = 'assets/empty_settings.yaml';


try {
  if (fs.existsSync(DEFAULT_SETTINGS)) {
    const SETTINGS = YAML.parse(fs.readFileSync(DEFAULT_SETTINGS, 'utf-8'));
    console.log(SETTINGS);
    if (fs.existsSync(LOCAL_SETTINGS)) {
        console.log('Local configuration found! Overriding default configuration...');
        const L_SETTINGS = YAML.parse(fs.readFileSync(LOCAL_SETTINGS, 'utf-8'));

        _.merge(SETTINGS, L_SETTINGS);

    } else {
        console.log('Local Configuration not found! Loading default configuration...');
    }

    console.log(SETTINGS);

  } else {
    throw new Error('File doesn\'t exists');
  }
} catch (error) {
  console.error('Error on load configuration file.', error);
}