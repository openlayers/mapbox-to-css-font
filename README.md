# Mapbox to CSS Font

Utility to convert Mapbox GL Style font names to CSS compatible font definitions.

## API

### parseFont

Utility to convert Mapbox GL Style font names to CSS font definitions.

**Parameters**

-  `font` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Mapbox GL Style font name, e.g. `'Open Sans Regular'`.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Parts of the CSS font definition, i.e. `[font-style font-weight font-size font-family]`. The size will be `16`. Call
`asCss` with this array and a size to get a CSS font definition string.

### asCss

Applies a size to an array of CSS font definition parts and returns a CSS font definition string.

**Parameters**

-  `cssData` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Parts of the CSS font definition, i.e. `[font-style font-weight font-size font-family]`.

-  `size` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Font size in pixels.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** CSS font definition, e.g. `'normal 400 16px Open Sans'`.
