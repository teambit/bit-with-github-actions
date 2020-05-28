# Bit with GitHub Actions

## npm install for [Bit components](https://github.com/teambit/bit) during CI (for projects that install components)

- ...
- In your project root directory add an `.npmrc` file and put the following code inside:
```
@bit:registry=https://node.bit.dev
//node.bit.dev/:_authToken=$BIT_TOKEN
always-auth=true
```