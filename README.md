# Template DOM Loader
> Dead simple webpack loader for importing HTML templates as DOM elements

## Usage
```html
<!-- component.html.tpl -->
<div class="widget">
  <button>Do it!</button>
  <p class="description">Lorem ipsum dolor sit amet</p>
</div>
```
```javascript
// component.js
import tpl from './component.html.tpl;
tpl.tagName === 'TEMPLATE'; // => true
tpl.content instanceof DocumentFragment; // => true
```

## Notes
template-dom-loader creates a `template` element with the file source as its `innerHTML`. You may want to pass your html through html-loader before passing it to template-dom-loader.

## Disclaimer
I created this loader as a convenience for use in a side project. I have not tested the code or refined the concept. If you want to use it, great!
