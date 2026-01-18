/**
 * Deep Sea Theme
 *
 * A curated collection of bioluminescent creatures, structures, and environments
 * from the deep ocean. Designed for narrative experiences and interactive storytelling.
 */

import { Theme } from '../../core/types.js';
import { creatures } from './creatures.js';
import { structures } from './structures.js';
import { environment } from './environment.js';

export const deepSeaTheme: Theme = {
  name: 'deep-sea',
  description: 'Bioluminescent creatures and structures of the deep ocean',
  pieces: [...creatures, ...structures, ...environment],
};

export { creatures, structures, environment };
