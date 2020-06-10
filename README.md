# Bit with GitHub Actions

![Build CI](https://github.com/teambit/bit-with-github-actions/workflows/Build%20CI/badge.svg)
![Bit export CI](https://github.com/teambit/bit-with-github-actions/workflows/Bit%20export%20CI/badge.svg)
[![components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fbit-with-github-actions)](https://bit.dev/joshk/bit-with-github-actions)
[![Slack](https://badgen.now.sh/badge/chat/on%20Slack/cyan)](https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg)

How to integrate Bit in your workflow with GitHub Actions.

## npm install for public or private [Bit components](https://github.com/teambit/bit) during CI (for projects that install components)

For installing public components you just need to config the bit registry, to do so create in your project root directory an `.npmrc` file and put the following code inside:

```
@bit:registry=https://node.bit.dev
always-auth=true
```

For installing private components, we need to save our `BIT_TOKEN` in the repository settings.
Follow these setups to do this:

- Read how creating encrypted secrets for a repository (https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository).
- Create a new secret and name it `BIT_TOKEN` and set your Bit token in the value, to get your token, run `bit config get user.token` on your local terminal.
- Update the `.npmrc` file to include the token registry:

```
@bit:registry=https://node.bit.dev
//node.bit.dev/:_authToken=${BIT_TOKEN}
always-auth=true
```

- Now use your secret in the [main workflows file](.github/workflows/main.yml), [read more about it](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#using-encrypted-secrets-in-a-workflow).

## bit export during during CI

- Create your collection in [bit.dev](bit.dev).
- Import the [compiler you need](https://bit.dev/bit/envs).
- Import the [tester you need](https://bit.dev/bit/envs).
- Track, tag and export components to your collection, [Alert component for example](src/components/Alert).
- Read how creating encrypted secrets for a repository (https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository).
- Create a new secret and name it `BIT_COLLECTION` and set your collection in the value: `<USER_NAME>.<COLLECTION_NAME>`. For example: `joshk.bit-with-github-actions`.
- Create a new workflow file for bit export commands. Inside the file we need to do the following: configure Bit token, install Bit, run bit import, build&test, tag and export.
  Check out the [workflows file](.github/workflows/bitexport.yml) I created for this, it will run when push to master are made(you can change it to your needs).
  Bit will export components only if changes are made.

## Run Bit build & test on PR's

When someone in your team made a change to a component, you want to be sure that everything is working well before exporting a new version of it.  
For this, I wrote another [workflows file](.github/workflows/bitbuildandtest.yml), and it will run when pull requests are made to master(you can change it to your needs).
After all the checks has passed, you can merge it, and what happens now?  
The [bit export workflows file](.github/workflows/bitexport.yml) will run automatically, and it will export and commit back to master the changes that are made to the `.bitmap` file.
