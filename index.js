import fs from 'fs';
import YAML from 'yaml';

const YAML_FILE_PATH = 'assets/settings.yaml';

try {
  if (fs.existsSync(YAML_FILE_PATH)) {
    const SETTINGS = YAML.parse(fs.readFileSync(YAML_FILE_PATH, 'utf-8'));
    console.log(SETTINGS);

  } else {
    throw new Error('File doesn\'t exists');
  }
} catch (error) {
  console.error('Error on load configuration file.', error);
}