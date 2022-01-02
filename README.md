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

The algorithm works by using a hash of the key as the seed for a random number generator. It then uses the random numbers to “jump forward” in the list of buckets until it falls off the end. The last bucket it lands in is the result. The paper has a more complete explanation of how it works and a derivation of this optimized loop.

> While evenly divide keys into buckets uniformly, we can change total bucket amount(add/remove buckets) but still remain the old key values as possible.

You may see results like this:
```
┌────────────┬─────┬────────┐
│ (iter idx) │ Key │ Values │
├────────────┼─────┼────────┤
│          0 │   1 │   7527 │
│          1 │   7 │   7392 │
│          2 │   4 │   7505 │
│          3 │   0 │   7523 │
│          4 │   3 │   7487 │
│          5 │   8 │   7683 │
│          6 │   2 │   7484 │
│          7 │   6 │   7510 │
│          8 │   5 │   7547 │
│          9 │   9 │   7342 │
└────────────┴─────┴────────┘
buckets after add two nodes:
┌────────────┬─────┬────────┐
│ (iter idx) │ Key │ Values │
├────────────┼─────┼────────┤
│          0 │   1 │   6275 │
│          1 │   7 │   6151 │
│          2 │   4 │   6249 │
│          3 │   0 │   6190 │
│          4 │   3 │   6226 │
│          5 │   8 │   6413 │
│          6 │   2 │   6251 │
│          7 │   6 │   6264 │
│          8 │   5 │   6325 │
│          9 │   9 │   6137 │
│         10 │  10 │   6140 │
│         11 │  11 │   6277 │
└────────────┴─────┴────────┘
```

Jump Hash addresses the two disadvantages of ring hashes: it has no memory overhead and virtually perfect key distribution. (The standard deviation of buckets is 0.000000764%, giving a 99% confidence interval of 0.99999998 to1.00000002).

Jump Hash is also fast. The loop executes O(ln n) times, faster by a constant amount than the O(log n) binary search for Ring Hash, and made faster even still by the fact that the computation is done entirely in a few registers and doesn’t pay the overhead of cache misses.
