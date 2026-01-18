/**
 * Deep Sea Theme
 *
 * A curated collection of bioluminescent creatures, structures, and environments
 * from the deep ocean. Designed for narrative experiences and interactive storytelling.
 */

import { Theme } from '../../core/types';
import { creatures } from './creatures';
import { structures } from './structures';
import { environment } from './environment';

export const deepSeaTheme: Theme = {
  name: 'deep-sea',
  description: 'Bioluminescent creatures and structures of the deep ocean',
  pieces: [...creatures, ...structures, ...environment],
};

export { creatures, structures, environment };
