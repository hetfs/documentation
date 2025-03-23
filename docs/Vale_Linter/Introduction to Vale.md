---
sidebar_position: 1
---

# Introduction to vale

[Vale](https://vale.sh/) is an open source linting tool designed to enhance **clarity, consistency, and quality** in written content. It's especially useful for **technical documentation, blogs, and knowledge bases**. By enforcing **custom style guides**, teams can maintain a unified voice across all content.

---

## 🌟 Vale's key features

✅ **Custom Rules**: define rules tailored to your organization’s writing standards.  
✅ **Predefined Style Guides**: use existing guides like **Proselint, write-good, and alex**, or create your own.  
✅ **Consistency**: ensure uniform terminology, brand voice, and inclusive language.

✅ **Real-time Linting**: identify grammar, spelling, and style issues instantly.  
✅ **Automated Error Detection**: streamline content reviews for greater efficiency.  
✅ **Minimized Manual Editing**: enforce writing standards and reduce manual corrections.

✅ **CI/CD Integration**: works seamlessly with **GitHub Actions, GitLab CI/CD, and Git Hooks**.  
✅ **Efficiency**: runs smoothly within **CI/CD workflows**.  
✅ **Broad Compatibility**: supports **GitHub Actions, GitLab CI/CD, Travis CI**, and other automation tools.

✅ **Multi-Format Support**: compatible with **Markdown `.md`, reStructuredText `.rst`, HTML `.html`, LaTeX `.tex`, and Markdown Extended `.mdx`**.  
✅ **Content Quality Assurance**: enhances quality across various content types, including **documentation and blogs**.

✅ **Batch Processing**: facilitates large-scale content reviews.

✅ **Editor & IDE Integration**:

- [CircleCI](https://circleci.com/developer/orbs/orb/circleci/vale)
- [Emacs](https://github.com/tpeacock19/flymake-vale)
- [GitHub Actions](https://github.com/errata-ai/vale-action)
- [Git Hooks](https://vale.sh/docs/integrations/pre-commit)
- [JetBrains IDEs](https://plugins.jetbrains.com/plugin/19613-vale-cli/docs)
- [Obsidian](https://github.com/marcusolsson/obsidian-projects)
- [Oxygen XML](https://www.oxygenxml.com/doc/versions/23.1/ug-editor/topics/vale-linter-addon.html)
- [Sublime Text](https://packagecontrol.io/packages/LSP-vale-ls)
- [Neovim](https://github.com/dense-analysis/ale)
- [VS Code](https://github.com/chrischinchilla/vale-vscode)
- [Qt Creator](https://wiki.qt.io/Setting_Up_Vale)
- [Zed](https://github.com/koozz/zed-vale)

---

## 💡 Practical use cases

### ✅ Technical documentation

🔹 Standardizes terminology and formatting in **API docs, guides, and manuals**.  
🔹 Identifies **typos, ambiguities, and inconsistencies** in technical content.

### ✅ Content editing & review

🔹 Automates **content reviews** to align with brand guidelines.  
🔹 Improves **clarity and readability** by flagging common mistakes.

### ✅ Documentation & Wiki quality assurance

🔹 Enforces documentation standards for **open-source projects and enterprise knowledge bases**.  
🔹 Reduces **manual review efforts** with automated quality checks.

---

## 🔧 Installing vale

Install Vale using a package manager:

```bash
# macOS (Homebrew)
brew install vale  

# Windows (Winget)
winget install vale  

# Python (via pip)
pip install vale  
```

After installation, configure Vale by creating a `.vale.ini` file in your project’s root directory.

📖 **For more installation options, visit the [official Vale documentation](https://vale.sh/docs/).**

---

## ⚙️ Configuring vale

Use the **vale configuration generator** to create `.vale.ini` files. Define rules, severity levels, and file formats.

📌 **Generate your configuration file** using the [Vale configuration generator](https://vale.sh/generator).

---

## 🛠️ Selecting a base style

Vale supports various **writing style guides**:

✔ [Microsoft writing style guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
✔ [Google developer documentation style guide](https://developers.google.com/style) 
✔ [Red Hat documentation style guide](https://redhat-documentation.github.io/vale-at-red-hat/docs/main/user-guide/redhat-style-for-vale/?utm_source=chatgpt.com)

🔹 **Use one base style** to prevent conflicts.

Example: Applying the Microsoft Writing Style Guide

```ini
StylesPath = styles
MinAlertLevel = suggestion
Packages = Microsoft

[*.{md}]
BasedOnStyles = Vale, Microsoft
```

📌 **Effect:** The **Microsoft Writing Style Guide** applies to all `.md` files.

💡 **Run `vale sync` after configuration to initialize Vale.**

---

## 🔗 Enhancing content with supplementary styles

Supplementary styles improve **grammar, clarity, and inclusivity**:

✔ [Proselint](https://github.com/amperser/proselint): Improves grammar and readability.  
✔ [Write-good](https://github.com/btford/write-good): Enforces clear, concise writing.  
✔ [Alex](https://github.com/get-alex/alex): Detects non-inclusive language.  
✔ [Joblint](https://github.com/errata-ai/Joblint?tab=readme-ov-file): Identifies biased language in job descriptions.

### Combining styles for better content analysis

```ini
StylesPath = styles
MinAlertLevel = suggestion
Packages = Microsoft, proselint, write-good, alex

[*.{md}]
BasedOnStyles = Vale, Microsoft, proselint, write-good, alex
```

📌 **Effect:**  
✅ **Microsoft** → Writing best practices  
✅ **Proselint** → Grammar and readability improvements  
✅ **Write-good** → Clear, concise writing  
✅ **Alex** → Inclusive language enforcement

---

## 📝 File-Specific configurations

Configure Vale for **specific file types**.

Markdown `.md` and Markdown Extended `.mdx`

```ini
[*.{md,mdx}]
BasedOnStyles = Vale, Microsoft, proselint, write-good, alex
```

✔ **Effect:** Applies writing rules to **Markdown and MDX files**.

Markdown `.md` and reStructuredText `.rst`

```ini
[*.{md,rst}]
BasedOnStyles = proselint
```

✔ **Effect:** Proselint rules apply to **Markdown** and **reStructuredText** files (commonly used in Python documentation).

---

## 🔄 Running vale

Once `.vale.ini` is configured, initialize Vale:

```sh
vale sync
```

✔ **Downloads required style guides** from `StylesPath`.

📌 **Discover more styles** in the [package explorer](https://vale.sh/explorer).

---

## 🔧 Configuring the vale language server

The **vale language server** improves your workflow by offering **real-time grammar, style, and consistency checks** via the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/).

🔹 Provides **autocomplete, diagnostics, hover popups, and inline suggestions**.  
🔹 Compatible with various text editors and IDEs.

### Setup steps

1️⃣ **Download vale-LS**: [GitHub Releases](https://github.com/errata-ai/vale-ls/releases)  
2️⃣ **Verify vale Installation**: ensure it’s available in your system’s `$PATH`.  
3️⃣ **Configure vale**: define linting rules in `.vale.ini`.  
4️⃣ **Launch vale-LS**: start it in your editor.

---

With **vale and its language server**, you can automate content quality checks, maintain consistency, and improve writing efficiency. 🚀
