## JCH - Jump Consistent Hash Library for Javascript in Deno.

A Fast, Minimal Memory, Consistent Hash Algorithm.

> We present jump consistent hash, a fast, minimal memory, consistent hash
> algorithm that can be expressed in about 5 lines of code. In comparison to
> the algorithm of Karger et al., jump consistent hash requires no storage, is
> faster, and does a better job of evenly dividing the key space among the
> buckets and of evenly dividing the workload when the number of buckets
> changes. Its main limitation is that the buckets must be numbered
> sequentially, which makes it more suitable for data storage applications than
> for distributed web caching.

Paper: <https://arxiv.org/abs/1406.2294>

### Usage
```javascript
const a = ch(286293355577, 500000) // support TS type Number. Since all JS numbers are 64 bits floating number.
const b = ch("127.0.0.1", 1073741824) // currently not support type String yet. Maybe can port outputs to crc32 or bkdr in the future.
```
or check example code located at `./ex/01.ts`.
