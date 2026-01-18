/**
 * ASCII Art Toolkit - Validation Utilities
 *
 * Functions for validating library integrity and piece quality.
 */
import { library } from '../core/library';
/**
 * Validate an individual piece for required fields and structure.
 */
export function validatePiece(piece) {
    const errors = [];
    // Required string fields
    if (!piece.id)
        errors.push('Missing id');
    if (!piece.name)
        errors.push('Missing name');
    if (!piece.category)
        errors.push(`Piece ${piece.id}: missing category`);
    if (!piece.theme)
        errors.push(`Piece ${piece.id}: missing theme`);
    if (!piece.art)
        errors.push(`Piece ${piece.id}: missing art`);
    if (!piece.description)
        errors.push(`Piece ${piece.id}: missing description`);
    if (!piece.whyEffective)
        errors.push(`Piece ${piece.id}: missing whyEffective`);
    // Required arrays
    if (!Array.isArray(piece.keyCharacters) || piece.keyCharacters.length === 0) {
        errors.push(`Piece ${piece.id}: missing keyCharacters`);
    }
    if (!Array.isArray(piece.buildingBlocks) || piece.buildingBlocks.length === 0) {
        errors.push(`Piece ${piece.id}: missing buildingBlocks`);
    }
    if (!Array.isArray(piece.techniques) || piece.techniques.length === 0) {
        errors.push(`Piece ${piece.id}: missing techniques`);
    }
    // ID format check
    if (piece.id && piece.theme && !piece.id.startsWith(`${piece.theme}:`)) {
        errors.push(`Piece ${piece.id}: ID should be prefixed with "${piece.theme}:" to match theme`);
    }
    // Tags validation
    if (!piece.tags || typeof piece.tags !== 'object') {
        errors.push(`Piece ${piece.id}: tags should be an object`);
    }
    return {
        valid: errors.length === 0,
        errors,
    };
}
/**
 * Check if ASCII art renders without issues.
 */
export function validateRendering(art) {
    const warnings = [];
    const lines = art.split('\n');
    // Check line count
    if (lines.length < 2) {
        warnings.push('ASCII art is very short (< 2 lines)');
    }
    else if (lines.length > 50) {
        warnings.push('ASCII art is very tall (> 50 lines) - may not display well');
    }
    // Check line lengths
    const lengths = lines.map((l) => l.length);
    const maxLen = Math.max(...lengths);
    const minLen = Math.min(...lengths);
    if (maxLen > 100) {
        warnings.push(`ASCII art is very wide (${maxLen} chars) - may not display well`);
    }
    if (maxLen - minLen > 20) {
        warnings.push('Inconsistent line lengths - may appear misaligned');
    }
    // Check for trailing spaces (common rendering issue)
    const hasTrailingSpaces = lines.some((l) => /\s+$/.test(l));
    if (hasTrailingSpaces) {
        warnings.push('Some lines have trailing spaces - be careful with rendering');
    }
    return {
        valid: warnings.length === 0,
        warnings,
    };
}
/**
 * Validate entire library for consistency and completeness.
 */
export function validateLibrary() {
    return library.validate();
}
/**
 * Validate all pieces in a theme.
 */
export function validateThemePieces(theme) {
    const pieces = library.getByTheme(theme);
    const errors = [];
    const warnings = [];
    if (pieces.length === 0) {
        errors.push(`Theme "${theme}" has no pieces`);
    }
    // Validate each piece
    pieces.forEach((piece) => {
        const { valid, errors: pieceErrors } = validatePiece(piece);
        if (!valid) {
            errors.push(...pieceErrors);
        }
        // Validate rendering
        const { warnings: renderingWarnings } = validateRendering(piece.art);
        if (renderingWarnings.length > 0) {
            warnings.push(`${piece.id}: ${renderingWarnings.join(', ')}`);
        }
    });
    // Check for required categories
    const categories = new Set(pieces.map((p) => p.category));
    if (!categories.has('creature')) {
        warnings.push('Theme has no creatures');
    }
    return {
        valid: errors.length === 0,
        errors,
        warnings,
    };
}
/**
 * Validate zoom variants for a piece.
 */
export function validateZoomVariants(piece) {
    const warnings = [];
    if (!piece.zoom) {
        return { valid: true, warnings: [] };
    }
    const { far, medium, close } = piece.zoom;
    if (!far && !medium && !close) {
        warnings.push(`${piece.id}: zoom object exists but no variants defined`);
    }
    // Validate each variant
    ['far', 'medium', 'close'].forEach((level) => {
        const art = piece.zoom[level];
        if (art) {
            const { warnings: renderWarnings } = validateRendering(art);
            if (renderWarnings.length > 0) {
                warnings.push(`${piece.id} [${level}]: ${renderWarnings.join(', ')}`);
            }
        }
    });
    return {
        valid: warnings.length === 0,
        warnings,
    };
}
//# sourceMappingURL=validate.js.map