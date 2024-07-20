# CONTRIBUTING

## Development

Install dependencies with:

```sh
npm i
```

Then start the [Rollup](https://rollupjs.org) dev server:

```sh
npm run dev
```

The local app is hot-reloading local app is available at http://localhost:5173. Reloading happens on file saves.

### Tools

On [VS Code](https://code.visualstudio.com/) there's an official extension: [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

### PRing Changes

1. Create a branch with a short descriptive name, starting with the `mfe-**` ID
1. Commit changes early and often
1. Bump app version with `npm version <patch|minor|major>`
1. Push branch and open a PR, named after the branch `MFE-**: ...`

## Building

To create a production-optimized version of the app, run:

```sh
npm run build
```

## Deployment

### Deploying Infrastructure with Terraform

Get Terraform service account GCP credentials:

```sh
gcloud iam service-accounts keys create key.json --iam-account=terraform@mattmanzi-com.iam.gserviceaccount.com
mv key.json gcp_credentials.json
export GOOGLE_APPLICATION_CREDENTIALS=./gcp_credentials.json
```

#### Deploying Code to Firebase

```sh
npx firebase login
npx firebase deploy
```

#### Deploying Code to Servers/Containers

_This is enabled by [sirv](https://github.com/lukeed/sirv)._

Copy the **/build** folder to the server's web hosting directory and run:

```sh
npm run start
```
