import fs from 'fs';
import YAML from 'yaml';

const DEFAULT_SETTINGS = 'assets/default_settings.yaml';
const LOCAL_SETTINGS = 'assets/local_settings.yaml';
const EMPTY_SETTINGS = 'assets/empty_settings.yaml';


try {
  if (fs.existsSync(DEFAULT_SETTINGS)) {
    const D_SETTINGS = YAML.parse(fs.readFileSync(DEFAULT_SETTINGS, 'utf-8'));

    if (fs.existsSync(EMPTY_SETTINGS)) {
        const LOCAL_VALUE = YAML.parse(fs.readFileSync(EMPTY_SETTINGS, 'utf-8'));

        const JSON = LOCAL_VALUE.public.app;
        for(var key in JSON){
            //console.log(key+": "+D_SETTINGS.public.app[key]);
            D_SETTINGS.public.app[key] = LOCAL_VALUE.public.app[key];
        }

    } else {
        console.log('Local Configuration not found! Loading default configuration...');
    }


    console.log(D_SETTINGS.public.app);



  } else {
    throw new Error('File doesn\'t exists');
  }
} catch (error) {
  console.error('Error on load configuration file.', error);
}