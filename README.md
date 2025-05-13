# Mapbox/MapLibre to CSS Font

Utility to convert Mapbox/MapLibre GL Style fontstacks or fonts names to CSS compatible font definitions.

For fontstacks, the style and weight of the primary font (first font in the fontstack) will also be used for the fallback fonts.

Fonts commonly found in Mapbox/MapLibre styles, which are not available as free fonts on [Fontsource](https://fontsource.org/) or [Google Fonts](https://fonts.google.fonts/), will be replaced with a close match:

| Mapbox/MapLibre Font Name | Replacement Font Name |
|---------------------------|-----------------------|
| Klokantech Noto Sans      | Noto Sans             |
| DIN Pro                   | Barlow                |

## Usage

```js
import parseFont from 'mapbox-to-css-font';

parseFont('Open Sans Regular', 16, 1.2);
// returns 'normal 400 16px/1.2 "Open Sans"'
```

## API

**Parameters**

-  `fonts` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** Mapbox GL Style fontstack or single font, e.g. `['Open Sans Regular', 'Arial Unicode MS Regular']` or `'Open Sans Regular'`.

-  `size` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Font size in pixels.

- `lineHeight` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)|[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Line height as css [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height). Optional.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** CSS font definition, e.g. `'normal 400 16px/1.2 "Open Sans"'`.
