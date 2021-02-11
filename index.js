import fs from 'fs';
import YAML from 'yaml';

const DEFAULT_SETTINGS_FILE_PATH = 'assets/default-settings.yaml';
const LOCAL_SETTINGS_FILE_PATH = 'assets/local-settings.yaml';
const EMPTY_SETTINGS_FILE_PATH = 'assets/empty-settings.yaml';


try {
  if (fs.existsSync(DEFAULT_SETTINGS_FILE_PATH)) {
    const SETTINGS = YAML.parse(fs.readFileSync(DEFAULT_SETTINGS_FILE_PATH, 'utf-8'));
    console.log(SETTINGS);

  } else {
    throw new Error('File doesn\'t exists');
  }
} catch (error) {
  console.error('Error on load configuration file.', error);
}