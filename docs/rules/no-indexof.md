# Disallow using the method indexOf (no-indexof)

## Rule Details

Older versions of IE do not support the indexOf method on arrays. This rule
disallows using it anywhere.

The following patterns are considered warnings:

```js

myArray.indexOf(myValue);

```

### Options

#### exceptOn

If you have some libraries which implement safe `.indexOf()` methods, you can
specify a list of variable names on which which it is safe to call
`.indexOf()`.

It will not warn for these patterns:
```js
/*indexof/no-indexof: [2, {"exceptOn": ["_", "R"]}*/

_.indexOf(myArray, myValue);
```

