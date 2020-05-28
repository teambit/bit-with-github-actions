# Bit with GitHub Actions
How to integrate Bit in your workflow with GitHub Actions.

## npm install for public or private [Bit components](https://github.com/teambit/bit) during CI (for projects that install components)

For public components you just need to config the bit registry, to do so create in your project root directory an `.npmrc` file and put the following code inside:
```
@bit:registry=https://node.bit.dev
```