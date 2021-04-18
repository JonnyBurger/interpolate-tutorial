import os from 'os';
import {Config} from 'remotion';

Config.Output.setCodec('h264');
Config.Output.setImageSequence(false);
Config.Rendering.setImageFormat('jpeg');
Config.Rendering.setConcurrency(os.cpus().length);
