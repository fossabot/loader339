# ⬡ Loader339

𝗪𝗜𝗣：A prototype of a patching/instrumenting ES module loader.

[![Node.js](https://img.shields.io/badge/Node.js-black?logo=Node.js&logoColor=green)](https://nodejs.org/en/about/)
[![Node.js](https://img.shields.io/badge/node%40latest-%3E%3D%2013.7.0-brightgreen)](https://nodejs.org/en/download/current/)
![](https://img.shields.io/badge/status-experimental-blue)
![](https://img.shields.io/github/languages/top/DerekNonGeneric/loader339)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B15970%2Fgit%40github.com%3ADerekNonGeneric%2Floader339.git.svg?type=shield)](https://app.fossa.com/projects/custom%2B15970%2Fgit%40github.com%3ADerekNonGeneric%2Floader339.git?ref=badge_shield)

**Table of Contents**

- [<span class="tocnumber">1</span> <span class="toctext">Installation</span>](#installation)
- [<span class="tocnumber">2</span> <span class="toctext">Usage</span>](#usage)
- [<span class="tocnumber">3</span> <span class="toctext">Basic System Goals</span>](#basic-system-goals)
  - [<span class="tocnumber">3.1</span> <span class="toctext">Status per User Goal</span>](#status-per-user-goal)
  - [<span class="tocnumber">3.2</span> <span class="toctext">Status per Platform Goal</span>](#status-per-platform-goal)
- [<span class="tocnumber">4</span> <span class="toctext">Key Terms</span>](#key-terms)
- [<span class="tocnumber">5</span> <span class="toctext">Contributing</span>](#contributing)
- [<span class="tocnumber">6</span> <span class="toctext">Credits</span>](#credits)
- [<span class="tocnumber">7</span> <span class="toctext">License</span>](#license)

## Installation

1. `npm install`

## Usage

1. `npm test`

1. `npm start`

## Basic System Goals<a id="basic-system-goals"></a>

_The goals below represent requirements voiced in issues about outstanding user
needs related to custom module loading. The custom module loader, which is
currently experimental, has been employed to solve for use cases that were
prohibitive to ES module adoption._

### <a id="status-per-user-goal">Status per User Goal</a>

○ patch a module w/o changing its URL in the
[_module map_](./doc/atlas.md#module-map)  
○ rewrite the URL of an import request before loader resolution  
○ more than one active [APM](./doc/atlas.md#apm)/transformer within a single
app  
△ safe hook application in an arbitrary sequence  
△ patch/wrap a module's exports  
├── ○ wrap `export default ...` w/ IIFE  
├── △ wrap APIs and don't patch away exports  
├── △ wrap all of a module's exported functions  
└── △ wrap only a few of a module's exported functions  
△ keep track of imported modules  
├── ○ format  
├── △ specifier  
└── ○ URL  
△ access a module's compiled source code  
├── △ user module code  
└── △ node builtin module code  
× insert Modules into a module's local ES module cache  
× insert Modules into the global ES module cache  
× rewrite a module's compiled source code  
├── × user module code  
└── × node builtin module code  
△ [_monkey patch_](./doc/atlas.md#monkey-patch) a module at import time  
├── ○ user module code  
└── × node builtin module code

### Status per Platform Goal<a id="status-per-platform-goal"></a>

△ way to create custom ES module implementations à la
[jsdom](https://github.com/jsdom/jsdom)  
└── △ [`vm.Module`](https://nodejs.org/api/vm.html#vm_class_vm_module)  
× way to declare a list of exports and expose a reflection API to them  
└── × `vm.ReflectiveModule`  
△ way to intercept `import()`  
├── × available to
[`vm.Script`](https://nodejs.org/api/vm.html#vm_class_vm_script)  
└── △ available to
[`vm.Module`](https://nodejs.org/api/vm.html#vm_class_vm_module)

---

<table>
<caption><small>Key</small></caption>
<tbody>
<tr><td>◎</td><td>supported/demonstrated w/ tests</td></tr>
<tr><td>○</td><td>supported/demonstrated</td></tr>
<tr><td>△</td><td>partially supported/demonstrated</td></tr>
<tr><td>×</td><td>unsupported/undemonstrated</td></tr>
<tbody>
</table>

## Contributing

Contributions are both welcomed and encouraged!

First contributors, be sure to add yourself to:

- the [Credits](#credits) section of this README file
- the `contributors` object in the [package.json](./package.json) file

## Credits

- [@DerekNonGeneric](https://github.com/DerekNonGeneric) - Derek Lewis
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins

## License

`loader339` is Open Source and [MIT](https://opensource.org/licenses/MIT)
licensed. The codebase contains permissively-licensed content and takes a
semi-centralized approach at managing license information. For details, see the
[license policies](./doc/license-policies.md).

You are free to use `loader339` for commercial or personal purposes. Enjoy!

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B15970%2Floader339.svg?type=large)](https://app.fossa.com/projects/custom%2B15970%2Floader339?ref=badge_large)
