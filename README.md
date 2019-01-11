# Universal (a.k.a isomorphic) Swipe.js

[![npm version](http://badge.fury.io/js/swipe-js-iso.svg)](http://badge.fury.io/js/swipe-js-iso)
[![Download Count](http://img.shields.io/npm/dm/swipe-js-iso.svg?style=flat)](http://www.npmjs.com/package/swipe-js-iso)
<a href="https://www.buymeacoffee.com/voronianski" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height="20" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

> Fork of original [Swipe](https://github.com/thebird/Swipe) in order to be published to NPM (has no deps) and being compatible with universal apps.

# Install

```bash
npm install swipe-js-iso --save
```

**✅ PRO HINT:** Use [ReactSwipe](https://github.com/jed/react-swipe) component

## Usage

Swipe only needs to follow a simple layout pattern. Here is an example:

```html
<div id="slider" class="swipe">
  <div class="swipe-wrap">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

Above is the initial required structure – a series of elements wrapped in two containers. Place any content you want within the items. The containing div will need to be passed to the Swipe function like so:

```js
const mySwipe = Swipe(document.getElementById('slider'));
```

I always place this at the bottom of the page, externally, to verify the page is ready.

Also Swipe needs just a few styles added to your stylesheet:

```css
.swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float: left;
  width: 100%;
  position: relative;
}
```

## Config Options

Swipe can take an optional second parameter– an object of key/value settings:

- **startSlide** Integer _(default:0)_ - index position Swipe should start at

- **speed** Integer _(default:300)_ - speed of prev and next transitions in milliseconds.

- **widthOfSiblingSlidePreview** Integer - Width of next and previous slide preview in pixels

- **auto** Integer - begin with auto slideshow (time in milliseconds between slides)

- **continuous** Boolean _(default:true)_ - create an infinite feel with no endpoints

- **disableScroll** Boolean _(default:false)_ - stop any touches on this container from scrolling the page

- **stopPropagation** Boolean _(default:false)_ - stop event propagation

- **swiping** Function - invoked while swiping with the percentage (0-1) of the full width that has been swiped.

- **callback** Function - runs at slide change.

- **transitionEnd** Function - runs at the end slide transition.

### Example

```js
const mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 2,
  speed: 400,
  widthOfSiblingSlidePreview: 10,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});
```

## Swipe API

Swipe exposes a few functions that can be useful for script control of your slider.

`prev()` slide to prev

`next()` slide to next

`getPos()` returns current slide index position

`getNumSlides()` returns the total amount of slides

`slide(index, duration)` slide to set index position (duration: speed of transition in milliseconds)

`disableScrolling(disableScroll)` directly control scrolling (disableScroll: same as the config option )

## Browser Support

Swipe is now compatible with all browsers, including IE7+. Swipe works best on devices that support CSS transforms and touch, but can be used without these as well. A few helper methods determine touch and CSS transition support and choose the proper animation methods accordingly.

## Who's using Swipe

<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/cnn.png' width='80'>
<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/airbnb.png' width='170'>
<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/nhl.png' height='80'>
<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/htc.png' height='80'>
<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/thinkgeek.png' height='80'>
<img src='https://raw.githubusercontent.com/voronianski/swipe-js-iso/master/assets/snapguide.png' height='80'>

---

**MIT License**
