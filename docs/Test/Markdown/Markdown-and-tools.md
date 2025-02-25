## Markdown Basics

Markdown is a simple language for formatting plain text, widely used on platforms like GitHub to style README files, pull requests, and issue comments. It offers features like **bold**, *italic*, lists, links, and images. Its goal is to make text easy to read and write without complex syntax.

Markdown was developed by [John Gruber](https://en.wikipedia.org/wiki/Markdown#History) and **Aaron Swartz** in 2004. Gruber created the first markdown-to-HTML converter in Perl, and by 2014, there were many implementations in different languages.

[John Gruber's description](https://daringfireball.net/projects/markdown/syntax) of Markdown is intentionally vague, leading to various implementations. Tools like [MDTest](https://github.com/michelf/mdtest/) and [Babelmark3](https://babelmark.github.io/) help resolve inconsistencies by comparing Markdown outputs from different implementations.

## CommonMark Adoption

The CommonMark specification has been adopted by many platforms:

- Discourse
- GitHub
- GitLab
- Reddit
- Qt
- Stack Overflow
- Swift

There is a list of third-party libraries in a dozen different languages [here](https://github.com/commonmark/CommonMark/wiki/List-of-CommonMark-Implementations).

---

## MarkdownLint Tool

[Markdownlint](https://github.com/markdownlint/markdownlint) checks Markdown files for style issues, ensuring consistent formatting. It detects problems like incorrect indentation or header structure.

### Installation

Markdownlint is available via package managers and RubyGems:

```bash
gem install mdl
```

### Usage

To lint files, run:

```bash
mdl README.md
```

To lint a directory:

```bash
mdl docs/
```

For more options, use:

```bash
mdl --help
```

Markdownlint lists issues by line number. Check [RULES.md](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md) for more details.

Markdownlint has many more options you can pass on the command line, run `mdl --help` to see what they are, or see the documentation on [configuring markdownlint](https://github.com/markdownlint/markdownlint/blob/main/docs/configuration.md).

---

## Styles

Markdown comes in various flavors and styles, all of which are valid. Markdownlint's default settings reflect the author's preferences, but your project may have its own guidelines.

Markdownlint doesn't enforce a single style but supports *style files*, which allow you to enable specific rules and customize settings. For example, rule [MD013](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md#md013---line-length) flags lines longer than 80 characters, but this limit can be adjusted or disabled in a style file.

If the default rules don't meet your needs, you can create custom rules and rulesets. 

For details, see the [creating styles](https://github.com/markdownlint/markdownlint/blob/main/docs/creating_styles.md) and *creating rules* documents.

 see the [creating rules](https://github.com/markdownlint/markdownlint/blob/main/docs/creating_rules.md) document.

## Related projects

**CLI**

- [markdownlint](https://github.com/DavidAnson/markdownlint) - A similar project, but limited in Node.js

- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) command-line interface for Node.js ([works with pre-commit](https://github.com/igorshubovych/markdownlint-cli#use-with-pre-commit))

- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) command-line interface for Node.js ([works with pre-commit](https://github.com/DavidAnson/markdownlint-cli2#pre-commit))

**GitHub**

- [GitHub Action for markdownlint-cli2](https://github.com/marketplace/actions/markdownlint-cli2-action)
- [GitHub Super-Linter Action](https://github.com/super-linter/super-linter)
- [GitHub Actions problem matcher for markdownlint-cli](https://github.com/xt0rted/markdownlint-problem-matcher)

**Editor**

- [vscode-markdownlint extension for VS Code](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Sublime Text markdownlint for Sublime Text](https://packagecontrol.io/packages/SublimeLinter-contrib-markdownlint)
- [coc-markdownlint extension for Vim/Neovim](https://github.com/fannheyward/coc-markdownlint)

**Tooling**

- [eslint-plugin-markdownlint for the ESLint analyzer](https://github.com/paweldrozd/eslint-plugin-markdownlint)
- [grunt-markdownlint for the Grunt task runner](https://github.com/sagiegurari/grunt-markdownlint)
- [Cake.Markdownlint addin for Cake build automation system](https://github.com/cake-contrib/Cake.Markdownlint)
- [Lombiq Node.js Extensions for MSBuild (.NET builds)](https://github.com/Lombiq/NodeJs-Extensions)

**Ruby**

- [markdownlint/mdl gem for Ruby](https://rubygems.org/gems/mdl)

The following specifications are considered authoritative in cases of ambiguity:

- [CommonMark](https://spec.commonmark.org/current/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

---

## Basic writing and formatting syntax

[Get started with GitHub documentation](https://docs.github.com/en/get-started)

[Markdown Here Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)

 [Styling text](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text)

You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and `.md` files.

| Style                  | Syntax             | Keyboard shortcut                         | Example                                  | Output                                 |
| ---------------------- | ------------------ | ----------------------------------------- | ---------------------------------------- | -------------------------------------- |
| Bold                   | `** **` or `__ __` | Command+B (Mac) or Ctrl+B (Windows/Linux) | `**This is bold text**`                  | **This is bold text**                  |
| Italic                 | `* *` or `_ _`     | Command+I (Mac) or Ctrl+I (Windows/Linux) | `_This text is italicized_`              | *This text is italicized*              |
| Strikethrough          | `~~ ~~`            | None                                      | `~~This was mistaken text~~`             | ~~This was mistaken text~~             |
| Bold and nested italic | `** **` and `_ _`  | None                                      | `**This text is _extremely_ important**` | **This text is *extremely* important** |
| All bold and italic    | `*** ***`          | None                                      | `***All this text is important***`       | ***All this text is important***       |
| Subscript              | `<sub> </sub>`     | None                                      | `This is a <sub>subscript</sub> text`    | This is a subscript text               |
| Superscript            | `<sup> </sup>`     | None                                      | `This is a <sup>superscript</sup> text`  | This is a superscript text             |

[Quoting text](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-text)

Here's a revised version of the content:

---

# CommonMark Implementations

### Recently Maintained Projects

#### C

- [cmark](https://github.com/commonmark/cmark): Reference implementation with a high-performance executable and library.
- [cmark-gfm](https://github.com/github/cmark): GitHub's fork of cmark, includes extensions for tables, task lists, and more.
- [MD4C](https://github.com/mity/md4c): Fast parser implementation with a minimalistic interface, akin to a SAX parser in XML parsing.

#### C#

- [CommonMark.NET](https://github.com/Knagis/CommonMark.NET): Available on [NuGet](https://www.nuget.org/packages/CommonMark.NET).
- [Markdig](https://github.com/lunet-io/markdig): Feature-rich and extensible, available on [NuGet](https://www.nuget.org/packages/Markdig/).

#### Common Lisp

- [cl-cmark](https://gitlab.com/HiPhish/cl-cmark): Wrapper for the C library.

#### Crystal

- [markd](https://github.com/icyleaf/markd): Pure Crystal implementation.

#### D

- [commonmark-d](https://github.com/p0nce/commonmark-d): Port of MD4C.
- [hunt-markdown](https://github.com/huntlabs/hunt-markdown): Port of the commonmark-java library.

#### Dart

- [markdown](https://github.com/dart-lang/markdown): Available on [Pub](https://pub.dev/packages/markdown).

#### Elixir

- [Cmark](https://github.com/asaaki/cmark.ex): Wraps the C library.

#### Emacs Lisp

- [cmark](https://github.com/taku0/cmark-el): Port of commonmark.js.

#### Go

- [golang-commonmark/markdown](https://gitlab.com/golang-commonmark/markdown): Pure Go implementation.
- [go-commonmark](https://github.com/rhinoman/go-commonmark): Wrapper for the C library.
- [goldmark](https://github.com/yuin/goldmark): Pure Go implementation.
- [Lute](https://github.com/88250/lute): Pure Go implementation.

#### Haskell

- **[cmark](http://hackage.haskell.org/package/cmark)**: Wrapper for the C library.
- **[commonmark-hs](https://github.com/jgm/commonmark-hs)**: Pure Haskell implementation.

#### Haxe

- [necmark](https://github.com/ConstNW/necmark): Wrapper for the C library with a neko target.

#### Java

- [commonmark-java](https://github.com/commonmark/commonmark-java): Pure Java implementation.
- [flexmark-java](https://github.com/vsch/flexmark-java): Rich features and extensible down to single characters.

#### JavaScript

- [commonmark.js](https://github.com/jgm/commonmark.js): Reference implementation. Install via [`npm install commonmark`](https://www.npmjs.org/package/commonmark).
- [markdown-it](https://github.com/markdown-it/markdown-it): High-speed and pluggable. Install via [`npm install markdown-it`](https://www.npmjs.org/package/markdown-it).
- [cmark-emscripten](https://github.com/mvasilkov/cmark-emscripten): Port of the C library to [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly). Install via [`npm install cmark-emscripten`](https://www.npmjs.com/package/cmark-emscripten).
- [mdx](https://github.com/mdx-js/mdx): Superset of CommonMark with embedded JSX and import/export syntax.
- [ciceromark](https://github.com/accordproject/markdown-transform): Extends the CommonMark DOM for [smart legal contracts](https://www.accordproject.org).

#### Julia

- [CommonMark.jl](https://github.com/MichaelHatherly/CommonMark.jl): Pure Julia implementation with extensions.

#### Lua

- [cmark-lua](https://github.com/jgm/cmark-lua): Wraps the C library. Install via [`luarocks install cmark`](https://luarocks.org/modules/jgm/cmark).
- [lcmark](https://github.com/jgm/lcmark): Higher-level interface around cmark with YAML metadata, filters, and templates.

#### LuaTeX

- [The Markdown Package for TeX](https://github.com/witiko/markdown): Rewritten lunamark Lua library for typesetting CommonMark in TeX.

#### OCaml

- [Cmarkit](https://erratique.ch/software/cmarkit): Pure OCaml implementation.

#### Perl

- [CommonMark](https://metacpan.org/release/CommonMark): Wraps the C library.
- [pmarkdown](https://metacpan.org/dist/Markdown-Perl): Pure Perl implementation.

#### PHP

- [league/commonmark](http://commonmark.thephpleague.com/): Highly extensible, with support for custom extensions.
- [cmark](http://docs.php.net/cmark): PECL extension based on the original [cmark](https://github.com/jgm/cmark) implementation.

#### Python

- [markdown-it-py](https://github.com/ExecutableBookProject/markdown-it-py): High-speed, pluggable port of the JS markdown-it library.
- [mistletoe](https://github.com/miyuchina/mistletoe): Fast, extensible, pure Python implementation.
- [Marko](https://github.com/frostming/marko): Pure Python, focused on easy extensibility.

#### Ruby/RubyMotion

- [CommonMarker](https://github.com/gjtorikian/commonmarker): Wrapper for the C library.
- [motion-markdown-it](https://github.com/digitalmoksha/motion-markdown-it/): Port of JS markdown-it library for Ruby and RubyMotion.

#### R

- [commonmark](http://cran.r-project.org/package=commonmark): Wrapper for the C library.

#### Racket

- [commonmark](https://lexi-lambda.github.io/racket-commonmark/): Native Racket implementation with full test coverage.

#### Rust

- [comrak](https://github.com/kivikakk/comrak): Based on cmark-gfm with GitHub extensions.
- [pulldown-cmark](https://github.com/google/pulldown-cmark): Performance-oriented architecture.
- [markdown-rs](https://github.com/wooorm/markdown-rs): CommonMark-compliant parser with ASTs and extensions.

#### Scala

- [cmark-scala](https://github.com/sparsetech/cmark-scala): Wrapper for the C library.

#### Scheme

- [guile-commonmark](https://github.com/OrangeShark/guile-commonmark/): GNU Guile implementation.

#### Swift

- [Down](https://github.com/iwasrobbed/Down): Wraps the reference cmark library.
- [SwiftMark](https://github.com/Pyroh/SwiftMark): Wraps the C library.
- [MarkdownSyntax](https://github.com/hebertialmeida/MarkdownSyntax): Access to AST via the reference C library.

#### Tcl

- [tcl-cmark](https://github.com/apnadkarni/tcl-cmark): Wrapper for cmark-gfm.

#### TypeScript

- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped): Provides JS library bindings.
- [FlavorMark](https://github.com/AnyhowStep/flavormark): Modularized rewrite of commonmark.js.

#### Zig

- [koino](https://github.com/kivikakk/koino): Based on Comrak/cmark-gfm, with GitHub extensions.

# Markdown Here Cheatsheet

[Markdown Here Cheatsheet ](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)

[Quickstart for writing on GitHub - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)

[🔎 Overview](https://myst-parser.readthedocs.io/en/latest/index.html)

[MyST-Parser](https://github.com/executablebooks/MyST-Parser)

[Marked Documentation](https://marked.js.org/#usage)
