### How to build

To build the browser viewer, I rely on `esbuild` (https://esbuild.github.io/) to bundle stuff.
run following so that main.html can rely on output js.

```
esbuild clients/main.js --bundle --outfile=clients/src/out.js
```
