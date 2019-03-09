# Mapbox to CSS Font

Utility to convert Mapbox GL Style fontstacks or fonts names to CSS compatible font definitions.

For fontstacks, the style and weight of the primary font (first font in the fontstack) will also be used for the fallback fonts.

The ["Klokantech Noto Sans"](https://github.com/klokantech/klokantech-gl-fonts) font is recognized and returned as "Noto Sans", so it can be loaded as web font from Google fonts.

## Usage

```js
var parseFont = require('mapbox-to-css-font');
parseFont('Open Sans Regular', 16);
// returns 'normal 400 16px "Open Sans"'
```

## API

**Parameters**

-  `fonts` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|[Array(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)]<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** Mapbox GL Style fontstack or single font, e.g. `['Open Sans Regular', 'Arial Unicode MS Regular']` or `'Open Sans Regular'`.

-  `size` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Font size in pixels.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** CSS font definition, e.g. `'normal 400 16px "Open Sans"'`.
