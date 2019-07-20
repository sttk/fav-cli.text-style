# [@fav/cli.text-style][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Decorate terminal text with ANSI escape code.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions as possible.
> At least, this package supports Node.js >= v0.10.

## Install

To install from npm:

```sh
$ npm install --save @fav/cli.text-style
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/cli.text-style/` directory manually.*

## Usage

```js
var textStyle = require('@fav/cli.text-style');

textStyle.underline('Hello!'); // => '\u001b[4mHello!\u001b[24m'
textStyle.red('Hello!'); // => '\u001b[31mHello!\u001b[39m'
textStyle.color(222)('Hello!'); // => '\u001b[38;222mHello!\u001b[39m' (256 colors)
textStyle.rgb(255,128,96)('Hello!'); // => '\u001b[38;2;255;128;96mHello!\u001b[39m' (16m colors)
```


## API

### <u>textStyle.<i>style</i>(<i>text</i>) => string</u>

Decorates <i>text</i> with the ANSI escape code corresponding to <i>style</i>.
This automatically detects the color depth of the terminal and disables decorations which requires more color depth.

### <u>textStyle(<i>colorDepth</i>).<i>style</i>(<i>text</i>) => string</u>

Decorates <i>text</i> with the ANSI escape code corresponding to <i>style</i>.
This disables decorations which requires more color depth than the specified <i>colorDepth</i>.

### <u>textStyle(<i>env</i>).<i>style</i>(<i>text</i>) => string</u>

Decorates <i>text</i> with the ANSI escape code corresponding to <i>style</i>.
This determines the color depth with `require('@fav/cli.get-color-depth')(env)`, and disables decorations which requires more color depth than the gotten <i>colorDepth</i>.

<i>**NOTE:** On Windows, the combination of `.bold` and `.faint/.dim` makes disable to be off bold. Since `.faint/.dim` looks ineffective, this package adds no decoration for `.faint/.dim` on Windows.</i>

#### Parameters:

| Parameter  |  Type  | Description                    |
|:-----------|:------:|:-------------------------------|
| text       | string | A text to be decorated.        |
| colorDepth | number | A color depth to be specified. |
| env        | object | An environment object to be used instead of `process.env`. |

#### Returns:

|  Type  | Description         |
|:------:|:--------------------|
| string | A decorated string. |

#### Styles:

##### Modifiers

| Name              | Effect                                           | ANSI ESC code |
|:------------------|:-------------------------------------------------|:--------------|
| `reset`           | Reset all styles                                 | `0`           |
| `bold`            | Increse intensity                                | `1`           |
| `faint`           | Decrease intensity                               | `2`           |
| `dim`             | Alias of `faint` (follow [chalk][chalk-url])     | `2`           |
| `italic`          | Italic style                                     | `3`           |
| `underline`       | Draw underline                                   | `4`           |
| `slowBlink`       | Slow blink                                       | `5`           |
| `blink`           | Alias of `slowBlink` (follow [chalk][chalk-url]) | `5`           |
| `reverse`         | Reverse foreground color and background color    | `7`           |
| `inverse`         | Alias of `reverse` (follow [chalk][chalk-url])   | `7`           |
| `conceal`         | Hide text                                        | `8`           |
| `hidden`          | Alias of `conceal` (follow [chalk][chalk-url])   | `8`           |
| `crossedOut`      | Draw strikethrough                               | `9`           |
| `strikethrough`   | Alias of `crossedOut` (follow [chalk][chalk-url])| `9`           |
| `doublyUnderline` | Draw doubly underline                            | `21`          |

##### Foreground colors

| Name           | Effect                                              | ANSI ESC code |
|:---------------|:----------------------------------------------------|:--------------|
| `black`        | Make foreground black                               | `30`          |
| `red`          | Make foreground red                                 | `31`          |
| `green`        | Make foreground green                               | `32`          |
| `yellow`       | Make foreground yellow                              | `33`          |
| `blue`         | Make foreground blue                                | `34`          |
| `magenta`      | Make foreground magenta                             | `35`          |
| `cyan`         | Make foreground cyan                                | `36`          |
| `white`        | Make foreground white                               | `37`          |
| `brightBlack`  | Make foreground bright black                        | `90`          |
| `blackBright`  | Alias of `brightBlack` (follow [chalk][chalk-url])  | `90`          |
| `gray`         | Alias of `brightBlack` (follow [chalk][chalk-url])  | `90`          |
| `grey`         | Alias of `brightBlack` (follow [chalk][chalk-url])  | `90`          |
| `brightRed`    | Make foreground bright red                          | `91`          |
| `redBright`    | Alias of `brightRed` (follow [chalk][chalk-url])    | `91`          |
| `brightGreen`  | Make foreground bright green                        | `92`          |
| `greenBright`  | Alias of `brightGreen` (follow [chalk][chalk-url])  | `92`          |
| `brightYellow` | Make foreground bright yellow                       | `93`          |
| `yellowBright` | Alias of `brightYellow` (follow [chalk][chalk-url]) | `93`          |
| `brightBlue`   | Make foreground bright blue                         | `94`          |
| `blueBright`   | Alias of `brightBlue` (follow [chalk][chalk-url])   | `94`          |
| `brightMagenta`| Make foreground bright magenta                      | `95`          |
| `magentaBright`| Alias of `brightBlue` (follow [chalk][chalk-url])   | `95`          |
| `brightCyan`   | Make foreground bright cyan                         | `96`          |
| `cyanBright`   | Alias of `brightCyan` (follow [chalk][chalk-url])   | `96`          |
| `brightWhite`  | Make foreground bright white                        | `97`          |
| `whiteBright`  | Alias of `brightWhite` (follow [chalk][chalk-url])  | `97`          |
| `color(n)`     | Make foreground one of 256 colors (n = color code)  | `38;n`        |
| `rgb(r,g,b)`   | Make foregournd one of 16m colors (r,g,b = intensity of red, green, and blue) | `38;2;r;g;b` |

##### Background colors

| Name             | Effect                                            | ANSI ESC code |
|:-----------------|:--------------------------------------------------|:--------------|
| `bgBlack`        | Make background black                             | `40`          |
| `bgRed`          | Make background red                               | `41`          |
| `bgGreen`        | Make background green                             | `42`          |
| `bgYellow`       | Make background yellow                            | `43`          |
| `bgBlue`         | Make background blue                              | `44`          |
| `bgMagenta`      | Make background magenta                           | `45`          |
| `bgCyan`         | Make background cyan                              | `46`          |
| `bgWhite`        | Make background white                             | `47`          |
| `bgBrightBlack`  | Make background bright black                      | `100`         |
| `bgBlackBright`  | Alias of `bgBrightBlack` (follow [chalk][chalk-url])| `100`       |
| `bgGray`         | Alias of `bgBrightBlack` (follow [chalk][chalk-url])| `100`       |
| `bgGrey`         | Alias of `bgBrightBlack` (follow [chalk][chalk-url])| `100`       |
| `bgBrightRed`    | Make background bright red                        | `101`         |
| `bgRedBright`    | Alias of `bgBrightRed` (follow [chalk][chalk-url])| `101`         |
| `bgBrightGreen`  | Make background bright green                      | `102`         |
| `bgGreenBright`  | Alias of `bgBrightGreen` (follow [chalk][chalk-url])| `102`       |
| `bgBrightYellow` | Make background bright yellow                     | `103`         |
| `bgYellowBright` | Alias of `bgBrightYellow` (follow [chalk][chalk-url])| `103`      |
| `bgBrightBlue`   | Make background bright blue                       | `104`         |
| `bgBlueBright`   | Alias of `bgBrightBlue` (follow [chalk][chalk-url]) | `104`       |
| `bgBrightMagenta`| Make background bright magenta                    | `105`         |
| `bgMagentaBright`| Alias of `bgBrightBlue` (follow [chalk][chalk-url]) | `105`       |
| `bgBrightCyan`   | Make background bright cyan                       | `106`         |
| `bgCyanBright`   | Alias of `bgBrightCyan` (follow [chalk][chalk-url]) | `106`       |
| `bgBrightWhite`  | Make background bright white                      | `107`         |
| `bgWhiteBright`  | Alias of `bgBrightWhite` (follow [chalk][chalk-url])| `107`       |
| `bgColor(n)`     | Make background one of 256 colors (n = color code)| `48;n`        |
| `bgRgb(r,g,b)`   | Make background one of 16m colors (r,g,b = intensity of red, green, and blue) | `48;2;r;g;b` |


## References

* ANSI escape code (Wikipedia) : [https://en.wikipedia.org/wiki/ANSI\_escape\_code](https://en.wikipedia.org/wiki/ANSI_escape_code)
* chalk : [https://github.com/chalk/chalk][chalk-url]
* ansi-colors : [https://github.com/doowb/ansi-colors](https://github.com/doowb/ansi-colors)

## Checked
                                                                    
### Node.js (11〜12)

| Platform  |   11   |   12   |
|:---------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|

### Node.js (4〜10)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   11   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

## License

Copyright (C) 2019 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-cli.text-style/
[npm-img]: https://img.shields.io/badge/npm-v0.2.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/cli.text-style
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-cli.text-style.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-cli.text-style
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-cli.text-style?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-cli-text-style
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-cli.text-style/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-cli.text-style?branch=master

[chalk-url]: https://github.com/chalk/chalk
