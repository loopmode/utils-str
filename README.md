# utils-str

A set of javascript string utilities.

## Installation

```
yarn add @loopmode/utils-str
```

## Usage

```javascript
import Str from '@loopmode/utils-str';

console.log(Str.ucFirst('foo'));                    // 'Foo'
console.log(Str.lcFirst('Foo'));                    // 'foo'
console.log(Str.joinPath('foo/', '/bar', 'baz'));   // 'foo/bar/baz'
console.log(Str.normalizePath('foo/'));             // '/foo'
console.log(Str.removeTrailingSlash('foo/'));       // 'foo'
console.log(Str.removeLeadingSlash('/foo'));        // 'foo'
console.log(Str.forceTrailingSlash('foo'));         // 'foo/'
console.log(Str.forceLeadingSlash('foo'));          // '/foo'
console.log(Str.endsWith('foo', 'o'));              // true
console.log(Str.startsWith('foo', 'f'));            // true
console.log(Str.leftPad(7, 3));                     // '007'

```

## Docs

See /docs folder