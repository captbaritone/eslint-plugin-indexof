# eslint-plugin-indexof

Disallow using the method indexOf.

__Note:__ This plugin will likely cause many false positives. For example,
Backbone collections offer an `indexOf` method, which will be have to be
manually ignored.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-indexof`:

```
$ npm install eslint-plugin-indexof --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-indexof` globally.

## Usage

Add `indexof` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "indexof"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "indexof/rule-name": [2, {exceptOn: ['_']}]
    }
}
```

## Supported Rules

* [no-indexof](docs/rules/no-indexof.md) Disallow using the `indexOf()` method.







