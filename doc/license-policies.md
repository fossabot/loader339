# License Policies

Because this project's codebase contains a number of permissively-licensed
libraries and documentation content with custom modifications, it takes a
semi-centralized approach at managing license information.

While the license of the published package is
[MIT](https://opensource.org/licenses/mit), because of MIT's attribution
provision, source code and documentation content are maintained under their
individual licenses.

## Source Code

License information for this project's source code is maintained in individual
files, in a central location, or some combination of both.

This hybrid approach at managing license information — placing the primary
license in a top-level `LICENSE` file, and also including some license
information in each source code file's header — allows for most of this
project's source code to be available under the
[BSD Zero Clause License](https://opensource.org/licenses/0BSD).

File-scoped license information uses the
[`@license` JSDoc tag](https://jsdoc.app/tags-license.html), which identifies
the software license that applies to any portion of code.

### Source Code File Headers

JavaScript source files use JSDoc for the standardized header format, which
overrides directory-scoped license information defined in top-level LICENSE
files. The SPDX short-form identifier of the license for each Loader339 source
file is indicated by the value of its `@license` JSDoc tag, which correlates
with its full-text version found in [`LICENSES/`](../LICENSES/).

SPDX maintains a [License List](https://spdx.org/licenses/), which contains all
licenses potentially compatible with this project. Their
[License List Data](https://github.com/spdx/license-list-data/tree/master/text)
repository contains plaintext licenses from which to source those found in
[`LICENSES/`](../LICENSES/).

## Documentation Content

The text of this project's documentation is generally licensed under
[CC-BY-SA-3.0][cc-by-sa-3.0] or [CC-BY-4.0][cc-by-4.0], as indicated. All
embedded code samples are licensed under 0BSD.

The specific license that applies to individual documentation assets, such as
images, may be located at the top level of the directories they're kept in.

[cc-by-sa-3.0]: https://creativecommons.org/licenses/by-sa/3.0/
[cc-by-4.0]: https://creativecommons.org/licenses/by/4.0/
