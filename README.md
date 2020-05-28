# Bit with GitHub Actions
How to integrate Bit in your workflow with GitHub Actions.

## npm install for public or private [Bit components](https://github.com/teambit/bit) during CI (for projects that install components)

For installing public components you just need to config the bit registry, to do so create in your project root directory an `.npmrc` file and put the following code inside:
```
@bit:registry=https://node.bit.dev
always-auth=true
```

For installing private components, we need to save our `BIT_TOKEN` in the repository settings.
Follow these setups to do this:
- Creating encrypted secrets for a repository (https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository).
- Name the new scret `BIT_TOKEN` and set your Bit token in the value, to get your token, run `bit config get user.token` on your local terminal.