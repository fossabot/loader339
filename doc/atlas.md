# Atlas

## Key Terms<a id="key-terms"></a>

<dl>
<dt id="apm">application performance management (APM)</dt>
<dd>

the monitoring and management of performance and availability of software
applications — strives to detect and diagnose complex application performance
problems to maintain an expected level of service

</dd>
<dt id="module-map">

[module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map)

</dt>
<dd>

A **module map** is a [map](https://infra.spec.whatwg.org/#ordered-map) of
[URL records](https://url.spec.whatwg.org/#concept-url) to values that are
either a [module script](https://html.spec.whatwg.org#module-script), null (used
to represent failed fetches), or a placeholder value "`fetching`".
[Module maps](https://html.spec.whatwg.org#module-map) are used to ensure that
imported JavaScript modules are only fetched, parsed, and evaluated once per
[`Document`](https://html.spec.whatwg.org/dom.html#document) or
[worker](https://html.spec.whatwg.org/workers.html#workers)
([[HTML]](#refs-html), section 8.1.3.8).

![](./img/25_module_map.png) _A cartoon module map. <sup>[1](#note-1)</sup>_

</dd>

<dt id="monkey-patch">monkey patch</dt>
<dd>

a way for a program to extend or modify a module or class while the program is
running locally (affecting only the running instance of the program)

</dd>
</dl>

## References

<dl>
<dt id="refs-html" name="refs-html">[HTML]</dt>
<dd><cite><a href="https://html.spec.whatwg.org/">HTML Language Specification</a></cite>. WHATWG.</dd>
<dt id="refs-javascript" name="refs-javascript">[JAVASCRIPT]</dt>
<dd><cite><a href="https://tc39.es/ecma262/">ECMAScript Language Specification</a></cite>. Ecma International.</dd>
</dl>

---

<!-- Foootnotes -->

<sub><sup>1</sup> This image is from
[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/),
by [Lin Clark](https://twitter.com/linclark).</sub>

<!-- Footer -->

<sub>Portions of this page are modifications based on work created and
[shared by Mozilla](https://www.mozilla.org/en-US/foundation/licensing/) and
used according to terms described in the
**[Creative Commons Attribution Share-Alike License v3.0](https://creativecommons.org/licenses/by-sa/3.0/)**.
Except as otherwise noted, the content on this page is licensed under a
**[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/)**.
For details, see the [License Policies](license-policies.md).</sub>
