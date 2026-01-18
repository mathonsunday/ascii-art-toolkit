/**
 * ASCII Art Toolkit
 *
 * A curated library for organizing and accessing high-quality ASCII art
 * across multiple projects and themes.
 *
 * Usage:
 *
 *   import { library } from '@veronica/ascii-art-toolkit';
 *
 *   // Get random creature from deep-sea theme
 *   const creature = library.random('deep-sea');
 *
 *   // Query with tags
 *   const biolumCreatures = library.query({
 *     theme: 'deep-sea',
 *     tags: { bioluminescence: true },
 *   });
 */
export { AsciiLibrary, library } from './core/library';
// Themes
export { deepSeaTheme } from './themes/deep-sea/index';
// Utilities
export { validatePiece, validateRendering, validateLibrary, validateThemePieces, validateZoomVariants, } from './utils/validate';
// Register default theme
import { library } from './core/library';
import { deepSeaTheme } from './themes/deep-sea/index';
library.registerTheme(deepSeaTheme);
//# sourceMappingURL=index.js.map