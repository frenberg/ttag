---
id: changelog
title: Changelog
---

## 1.7.8

### ttag-cli

Flow support - https://github.com/ttag-org/ttag-cli/pull/69

## 1.7.7

### ttag-cli

Fixed comments extraction for windows - https://github.com/ttag-org/babel-plugin-ttag/pull/125
Fixed postinstall script for windows - https://github.com/ttag-org/ttag-cli/issues/67#event-2238630687

## 1.7.5

#### ttag-cli

Fixed merge method with predefined charset - https://github.com/ttag-org/ttag-cli/issues/56

## 1.7.4

#### ttag-cli

Fixed wrong plural forms in the headers in .po - https://github.com/ttag-org/ttag/issues/154

#### ttag

Fixed translations expressions substitution - https://github.com/ttag-org/ttag/issues/153

## 1.6.0

#### ttag-cli

This minor release adds some new useful features to _ttag-cli_

-   ttag cli can extract translations from `ts` and `tsx` by default - https://github.com/ttag-org/ttag-cli/pull/58
-   ttag validate will now return status 1 if validation fails - https://github.com/ttag-org/ttag-cli/pull/59

## 1.5.0

This update touches only `ttag-cli`.
`extractLocation` option is added to `extract` and `update` commands.
https://github.com/ttag-org/ttag/issues/135

## 1.4.2

CRA support, integration with `babel-plugin-macro` + better typings.
Read the [blog post](/blog/2018/11/07/1.4.2-relase.html) for details.

## 1.3.4

#### babel-plugin-ttag

Added support for require aliases - https://github.com/ttag-org/babel-plugin-ttag/pull/112

## 1.3.1

1.3.x version comes with a couple important changes:

#### ttag-cli

Added `discover` and `numberedExpressions` - https://github.com/ttag-org/ttag-cli#update-opts-pofile-src

#### ttag

`gettext` has a default alias - `_`.

#### babel-plugin-ttag

All dependencies were updated to use @babel 7

Read more about details in our [blog](/blog/2018/09/17/1.3.1-release.html)

## 1.2.1

#### ttag-cli

Added `po2json` command (thanks @vharitonsky - https://github.com/ttag-org/ttag-cli/pull/40)

#### 1.1.0

Fix for `addComments` - https://github.com/ttag-org/babel-plugin-ttag/issues/105

## 1.1.0-0

#### babel-plugin-ttag

ttag now can discover translations from `require` and can be used in purely nodejs projects with commonjs modules. https://github.com/ttag-org/ttag/issues/44

## 1.0.3

#### ttag

Fixed behavior for untranslated strings - https://github.com/ttag-org/ttag/issues/111

## 1.0.1

Renaming project to `ttag` and `babel-ttag-plugin`

## 0.8.0

#### c-3po lib

-   Deleted `setDefaultHeaders` method. You should call new [setDefaultLang](#configuration-c-3po-lib.html#setdefaultlang-string-lang) to change
    the default language.
-   removed `c-3po/loader` and `gettext-parser` dependency, beacause it is little bit out of the scope of the library. You should import and call parser separately.

```js
import gt from 'gettext-parser';
import fs from 'fs';

gt.po.parse(fs.readFileSync('file.po'));
```

#### c-3po-plugin

-   Deleted `defaultHeaders` setting from the config. You should use [defaultLang](#configuration.html#configdefaultlang-string) instead.
-   Added new setting [numberedExpressions](configuration.html#confignumberedexpressions-boolean) to allow any expressions inside translated strings.

## 0.7.3

##### c-3po-plugin

Fixed issue with contexts extraction

## 0.7.2

##### c-3po lib

Added typescript types definitions [PR-89](https://github.com/ttag-org/ttag/pull/89) [PR-88](https://github.com/ttag-org/ttag/pull/88)

## 0.7.0

---

1. Added context's feature to c-3po lib and babel-plugin-c-3po [see doc](reference-contexts.md)
2. Validation for libarary (addLocale, ngettext).
3. Skipped deprecated _replaceVariableNames_ argument for addLocale func.

## 0.6.1

##### c-3po lib:

Fixed multiline for jt [PR](https://github.com/ttag-org/ttag/pull/76)

## 0.6.0

##### c-3po lib:

Implemented useLocales method [PR](https://github.com/ttag-org/ttag/pull/71)

##### c-3po-plugin

Validation fix for the computed properties [PR](https://github.com/ttag-org/babel-plugin-ttag/issues/90)

## 0.5.8

Fixes for fuzzy translations issue - [68](https://github.com/ttag-org/ttag/issues/68)

##### c-3po-plugin

Validation fix for the computed properties [PR](https://github.com/ttag-org/babel-plugin-ttag/issues/90)

## 0.5.7

##### c-3po-plugin

Validation fix for the computed properties [PR](https://github.com/ttag-org/babel-plugin-ttag/issues/90)

## 0.5.6

##### c-3po-plugin

Add validation for variable expressions mismatch. [PR](https://github.com/ttag-org/babel-plugin-ttag/pull/84)

## 0.5.5

##### c-3po lib:

Fix for multiline translations. [PR](https://github.com/ttag-org/ttag/pull/67)

## 0.5.4

##### c-3po-plugin

Fixed extraction for member expressions with computed properties. [PR](https://github.com/ttag-org/babel-plugin-ttag/pull/86)

##### c-3po lib:

Removed module attribute from package.json.

## 0.5.3

##### c-3po-plugin

Fix for member expressions extraction with `this`. (checkout [PR](https://github.com/ttag-org/babel-plugin-ttag/pull/82) for the details)

## 0.5.2

##### c-3po-plugin

Fix for `ngettext` validation in jsx (multiple presets [issue](https://github.com/ttag-org/babel-plugin-ttag/pull/81)).

## 0.5.1

##### c-3po lib:

Renamed `setHeaders` to `setDefaultHeaders` for consistency with babel plugin setting.

##### c-3po-plugin

Applied sort for file references. Can be handy for avoiding merge conflicts.

## 0.5.0

---

1. Default headers setup - [doc](/configuration-c-3po-lib.html#setheaders-object-headers)
2. Multiline support for c-3po lib + setDedent setting - [doc](/configuration-c-3po-lib.html#setdedent-bool-value)
3. Tutorial about [development and production setup with c-3po and webpack](/localization-with-webpack-and-c-3po.html)
4. Removed `nt`from the core lib.
5. `pkg.module` support (details [here](https://github.com/rollup/rollup/wiki/pkg.module))

Migration guide - [from 0.4.x to 0.5.x](/MIGRATION.html#from-04x-to-05x)

## 0.4.x

Extracted format changed from `${ 0 }` to `${ name }`.
