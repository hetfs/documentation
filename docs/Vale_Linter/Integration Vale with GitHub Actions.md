# Integrating vale with github actions

Automate documentation linting by integrating **Vale into CI/CD workflows** using **GitHub Actions**.

## 📌 Setting up gitHub actions

**Create a GitHub Actions workflow**:

- Navigate to your repository’s root.
- Create a `.github/workflows/` directory if it doesn't exist.
- Add a `vale-linter.yml` file inside it.

**Use the official Vale GitHub Action**:

- [GitHub Action for Vale](https://github.com/errata-ai/vale-action)

---

## 📄 GitHub actions workflow

```yaml
name: Documentation Linting
on:
  push: # Run on every push to main
    branches:
      - main
  pull_request: # Run on all pull requests
    branches:
      - "*"
jobs:
  lint:
    name: Run Vale Linter
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      # Install external parsers if needed
      # For AsciiDoc users:
      - name: Install Asciidoctor
        run: sudo apt-get install -y asciidoctor
      # For reStructuredText users:
      - name: Install docutils
        run: sudo apt-get install -y docutils

      - name: Run Vale Linter
        uses: errata-ai/vale-action@v2.1.1
        with:
          version: 2.17.0
          files: .
          reporter: github-pr-check # Options: github-pr-check, github-pr-review, github-check
          fail_on_error: true
          filter_mode: nofilter # Options: added, diff_context, file, nofilter
          vale_flags: "--glob=*.md"
          env:
                # Required, set by GitHub actions automatically:
               #GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
               #REVIEWDOG_GITHUB_API_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

After making these changes, run the following commands:

---

## 🔹 CI/CD Features

✅ **Runs on Every Push & Pull Request**: Automatically triggers on `main` and PRs.  
✅ **Flags Documentation Issues in PRs**: Prevents issues before merging.  
✅ **Supports Additional Parsers**: Installs **Asciidoctor** and **docutils** as needed.  
✅ **Fails PR on Critical Errors** (`fail_on_error: true`).

> ```bash
> git add .
> git commit -m "Apply documentation updates"
> git push
> ```
> 
> Check the **Actions** tab in your repository to view the workflow status.
> 
> Click on the `changes` button and click on the job `prose`

---

## 🔧 Customization options

- **Lint only specific directories** (e.g., `docs/`):
  
  ```yaml
  with:
    files: docs/
  ```

- **Use PR review comments instead of PR checks**:
  
  ```yaml
  with:
    reporter: github-pr-review
  ```

- **Exclude specific files using glob patterns**:
  
  ```yaml
  with:
    vale_flags: "--glob=!docs/excluded.md"
  ```

---

## 📂 Recommended repository structure

```bash
.github/
├── styles/
│   └── vocab.txt          # Custom terminology rules for consistent language
└── workflows/
    └── vale-linter.yml     # GitHub Actions workflow for automated linting
.vale.ini                   # Vale configuration file for linting rules
docs/
└── example.md              # Documentation file with examples and guidelines
```

 **Explanation of structure:**

**`.github/`**: Contains GitHub-specific files.

- **`styles/`**: Holds custom terminology rules to ensure consistent language across the project.

- **`workflows/`**: Contains the workflow configuration for GitHub Actions, which automates the linting process using Vale.

- **`.vale.ini`**: The main configuration file for Vale, defining the linting rules and settings for the project.

- **`docs/`**: Directory for project documentation.

---

## **🛠️ Troubleshooting vale issues**

### **❌ 1️⃣ Missing styles?**

Run:

```sh
vale sync
```

Ensure the `styles/` directory contains required styles (`Microsoft`, `write-good`, etc.).

### **❌ 2️⃣ `.vale.ini` Parsing errors?**

Check for:  
✅ **Proper formatting of `BasedOnStyles`**  
✅ **No missing commas or syntax errors**  
✅ **Valid `IgnorePatterns`**

### **❌ 3️⃣ Excluding unwanted files?**

Modify your `.vale.ini`:

```ini
ignore = node_modules, vendor, dist, .git, .github
```

This prevents Vale from linting unnecessary directories.

---

## **📌 Final thoughts**

Integrating Vale with GitHub Actions is a **powerful way** for **technical writers, developers, and documentation teams** to ensure **consistent, professional, and error-free documentation**.

It works for **both local linting and CI/CD automation**, helping you maintain **high documentation standards** effortlessly.
