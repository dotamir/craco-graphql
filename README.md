# craco-graphql

A craco plugin to load `.graphql` query documents into your create-react-app application.

## Installation

Run the following command to install `craco-graphql` in your project:

```sh
npm install --save-dev craco-graphql @craco/craco
```

OR

```sh
yarn add --dev craco-graphql @craco/craco
```

## Usage

Add this configuration to your `craco.config.js` configuration file:

```js
// craco.config.js
const CracoGraphQLPlugin = require('craco-graphql');

module.exports = {
	plugins: [{ plugin: CracoGraphQLPlugin }],
};
```

## License

The MIT license
