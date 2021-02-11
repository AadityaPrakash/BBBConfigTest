import fs from 'fs';
import YAML from 'yaml';

const DEFAULT_SETTINGS = 'assets/default_settings.yaml';
const LOCAL_SETTINGS = 'assets/local_settings.yaml';
const EMPTY_SETTINGS = 'assets/empty_settings.yaml';


try {
  if (fs.existsSync(DEFAULT_SETTINGS)) {
    const SETTINGS = YAML.parse(fs.readFileSync(DEFAULT_SETTINGS, 'utf-8'));
    console.log(SETTINGS);

  } else {
    throw new Error('File doesn\'t exists');
  }
} catch (error) {
  console.error('Error on load configuration file.', error);
}