# Benchmark of @fav/cli.text-style

## v0.1.0

Comparing with following modules:

* [chalk](https://www.npmjs.com/package/chalk)
* [ansi-colors](https://www.npmjs.com/package/ansi-colors)

|        | @fav/cli.text-style(0.1.0) | chalk(2.4.2)  | ansi-colors(4.1.1) |
|:-------|---------------------------:|--------------:|-------------------:|
| Colors |            177,363 ops/sec | 4,756 ops/sec |    106,909 ops/sec |
| Nested |             30,618 ops/sec | 4,532 ops/sec |     23,434 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

