# libswe

This is a fork of the [Swiss Ephemeris][sweph].  There is no plan to carry on independent development in alternative directions: instead, this is about making the Swiss Ephemeris available for easier integration with selected platforms.

# HMTL5

To produce `libswe.js` for use in HTML5 applications, build the Swiss Ephemeris with [Emscripten][emscripten] using the included `emscripten.mk` Makefile:

    cd src
    emmake make -f emscripten.mk

# To Do

- [ ] Add emscripten.mk, producing a JavaScript build that can be used in HTML5 applications.
- [ ] Add Android.mk for use with the Android NDK and conforming to [best practices][vleu-authors].

# License

See [src/LICENSE](src/LICENSE).

[emscripten]: https://github.com/kripken/emscripten
[sweph]: http://www.astro.com/swisseph/
[vleu-authors]: http://ndkinfo.vleu.net/best-practices-authors
