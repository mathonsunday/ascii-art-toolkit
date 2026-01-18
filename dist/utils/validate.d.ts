/**
 * ASCII Art Toolkit - Validation Utilities
 *
 * Functions for validating library integrity and piece quality.
 */
import { AsciiArt, ValidationResult } from '../core/types';
/**
 * Validate an individual piece for required fields and structure.
 */
export declare function validatePiece(piece: AsciiArt): {
    valid: boolean;
    errors: string[];
};
/**
 * Check if ASCII art renders without issues.
 */
export declare function validateRendering(art: string): {
    valid: boolean;
    warnings: string[];
};
/**
 * Validate entire library for consistency and completeness.
 */
export declare function validateLibrary(): ValidationResult;
/**
 * Validate all pieces in a theme.
 */
export declare function validateThemePieces(theme: string): {
    valid: boolean;
    errors: string[];
    warnings: string[];
};
/**
 * Validate zoom variants for a piece.
 */
export declare function validateZoomVariants(piece: AsciiArt): {
    valid: boolean;
    warnings: string[];
};
//# sourceMappingURL=validate.d.ts.map