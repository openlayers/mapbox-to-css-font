/**
 * @param fonts - Mapbox GL Style fontstack or single font, e.g. `['Open Sans Regular', 'Arial Unicode MS Regular']` or `'Open Sans Regular'`.
 * @param size - Font size in pixels.
 * @param lineHeight - Line height as css line-height.
 * @returns CSS font definition, e.g. `'normal 400 16px/1.2 "Open Sans"'`.
 */
function parseFont(
    font: string | string[],
    size: number,
    lineHeight?: number | string,
): string;

export default parseFont;
