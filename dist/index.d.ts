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
export { AsciiArt, Theme, QueryOptions, ValidationResult, TagMetadata } from './core/types';
export { AsciiLibrary, library } from './core/library';
export { deepSeaTheme } from './themes/deep-sea/index';
export { validatePiece, validateRendering, validateLibrary, validateThemePieces, validateZoomVariants, } from './utils/validate';
//# sourceMappingURL=index.d.ts.map