# Vale Command-Line Flags and Commands

Vale’s command-line interface (CLI) is a **powerful and flexible tool** for enforcing consistent writing standards. Whether you’re:

✅ **Linting a single file**  
✅ **Automating content checks in continuous integration (CI) pipelines**  
✅ **Enforcing writing guidelines for a team**

Vale provides **commands** and **flags** that offer precise control over its behavior. This guide explains these features with **detailed descriptions**, **examples**, and **best practices** to help you maximize Vale’s potential.

---

## **🔹 Understanding Command-Line Flags**

Flags modify how Vale operates, allowing you to customize its behavior. Below is an overview of commonly used flags.

---

### 📌 `--config`: Specify a Custom Configuration File

👉 **What it does**: Enables the use of a specific `.vale.ini` configuration file instead of the default.

📌 **When to use it**:

- If your project requires different Vale configurations.
- When overriding the default `.vale.ini`.

🔹 **Example usage**:

```bash
vale --config="custom/path/.vale.ini" myfile.md
```

By default, Vale looks for `.vale.ini` in the **project directory**. If you work on projects with unique linting needs, this flag helps you specify the correct configuration.

---

### 📌 `--ext`: Define a File Type for Piped Content

👉 **What it does**: Sets the **file extension** when inputting content via `stdin`.

📌 **When to use it**:

- When **piping content** into Vale (e.g., using `cat` or `echo`).

🔹 **Example usage**:

```bash
cat myfile.md | vale --ext=.md
```

Vale applies rules based on file types. This flag ensures proper rule application when processing piped content.

---

### 📌 `--filter`: Run Specific Rules Only

👉 **What it does**: Runs only rules that match a given **pattern**.

📌 **When to use it**:

- To **test or debug** a specific rule.
- When applying **only selected rules** instead of all available rules.

🔹 **Example usage**:

```bash
vale --filter="Proselint.*" myfile.md
```

This example ensures that only **Proselint-related rules** run, making it useful for **targeted debugging**.

---

### 📌 `--glob`: Lint Different File Types

👉 **What it does**: Runs Vale on all files that match a specified **pattern**.

📌 **When to use it**:

- To check **varied file types** in a directory.

🔹 **Example usage**:

```bash
vale --glob='*.{md,txt}'
```

This ensures that Vale **checks all Markdown (`.md`) and text (`.txt`) files** in the directory.

---

### 📌 `--ignore-syntax`: Process Files as Plain Text

👉 **What it does**: Ignores file **syntax parsing**, checking files line by line.

📌 **When to use it**:

- If Vale **doesn’t support** a specific file format.
- When working with **plain text files**.

🔹 **Example usage**:

```bash
vale --ignore-syntax myfile.txt
```

By default, Vale recognizes certain formats (like Markdown or HTML) and applies corresponding rules. This flag ensures that Vale treats the file as plain text.

---

### 📌 `--minAlertLevel`: Filter Issues by Severity

👉 **What it does**: Displays only issues of a specific **severity level** (`suggestion`, `warning`, or `error`).

📌 **When to use it**:

- To focus on **critical errors** while ignoring minor issues.

🔹 **Example usage**:

```bash
vale --minAlertLevel=error myfile.md
```

This command filters out **suggestions** and **warnings**, showing only **errors** that require immediate attention.

---

### 📌 `--output`: Customize Vale’s Output Format

👉 **What it does**: Adjusts Vale’s output format for better **integration** with external tools.

📌 **Available options**:

- **`line`** (default)
- **`JSON`** (structured output for automation)
- **Custom templates**

🔹 **Example usage**:

```bash
vale --output=JSON myfile.md
```

This ensures Vale outputs results in **JSON format**, making it easier to integrate with scripts and other tools.

---

### 📌 `--no-exit`: Prevent Exit Codes from Stopping Execution

👉 **What it does**: Prevents Vale from exiting with a non-zero code when linting errors are found. This is useful in scenarios where you want to continue execution even if issues are detected.

📌 **When to use it**:

- When running Vale in a script or CI pipeline where you don’t want linting errors to halt the process.

🔹 **Example usage**:

```bash
vale --no-exit myfile.md
```

This command ensures that Vale completes its run even if errors are found, returning a **0 exit code**.

---

### 📌 `--version`: Display Vale’s Version

👉 **What it does**: Prints the installed version of Vale.

📌 **When to use it**:

- To verify the version of Vale you’re using.
- When troubleshooting or reporting issues.

🔹 **Example usage**:

```bash
vale --version
```

This command outputs the current version of Vale, which is helpful for compatibility checks and debugging.

---

## **🔹 Key Vale Commands**

Vale’s commands go beyond simple linting and support configuration, debugging, and automation.

---

### 📌 `ls-config`: Show the Active Vale Configuration

👉 **What it does**: Displays the active Vale **configuration settings**.

📌 **When to use it**:

- To verify which **rules and styles** are active.

🔹 **Example usage**:

```bash
vale ls-config
```

This command **prints the active configuration**, helping you debug incorrect settings.

---

### 📌 `ls-metrics`: Analyze Text Complexity

👉 **What it does**: Provides readability and complexity metrics for a given file.

📌 **When to use it**:

- To assess the **clarity and accessibility** of your writing.

🔹 **Example usage**:

```bash
vale ls-metrics myfile.md
```

This command **analyzes** text length, readability scores, and complexity, helping you refine your content.

---

### 📌 `sync`: Update Vale’s Style Rules

👉 **What it does**: Downloads and updates **external style guides** and configurations.

📌 **When to use it**:

- To keep the **latest versions** of custom styles.

🔹 **Example usage**:

```bash
vale sync
```

This command updates custom or external Vale styles.

---

### 📌 `ls-dirs`: Print Default Configuration Directories

👉 **What it does**: Displays the locations of Vale’s default configuration directories.

📌 **When to use it**:

- To identify where Vale stores its configuration files.
- When troubleshooting configuration issues.

🔹 **Example usage**:

```bash
vale ls-dirs
```

This command outputs the paths to directories like `StylesPath` and `ConfigPath`, which are useful for debugging.

---

### 📌 `ls-vars`: Inspect Current Environment Variables

👉 **What it does**: Lists all environment variables that Vale recognizes and uses.

📌 **When to use it**:

- To verify if environment variables like `VALE_CONFIG_PATH` or `VALE_STYLES_PATH` are set correctly.
- When debugging configuration issues related to environment variables.

🔹 **Example usage**:

```bash
vale ls-vars
```

This command prints the current environment variables and their values, helping you ensure proper configuration.

---

## **🚀 Quick Reference Table**

| **Use Case**                                            | **Command/Flag**                           |
| ------------------------------------------------------- | ------------------------------------------ |
| Lint a single file                                      | `vale myfile.md`                           |
| Check different file types                              | `vale --glob='*.{md,txt}'`                 |
| Use a custom config file                                | `vale --config=custom/.vale.ini myfile.md` |
| Show only errors                                        | `vale --minAlertLevel=error myfile.md`     |
| Generate JSON output                                    | `vale --output=JSON myfile.md`             |
| Print the current configuration options as JSON         | `vale ls-config`                           |
| Print the location of default configuration directories | `vale ls-dirs`                             |
| Inspect current environment variables                   | `vale ls-vars`                             |
| Download and install packages/Update style rules        | `vale sync`                                |
| Analyze text readability                                | `vale ls-metrics myfile.md`                |
| Print the version of Vale                               | `vale --version`                           |
| Prevent exit codes from stopping execution              | `vale --no-exit myfile.md`                 |

---

### Environment Variables

- **VALE_CONFIG_PATH**:
  - Overrides the default search process by specifying a custom `.vale.ini` file.
- **VALE_STYLES_PATH**:
  - Specifies the location of the default StylesPath.

---

### Return Codes

- **0**: No errors were found.
- **1**: Linting errors were found (useful for failing CI builds; can be disabled with `--no-exit`).
- **2**: Runtime errors occurred.

---

## **📚 More Resources**

- [Official Vale Documentation](https://vale.sh/docs/)
- [Creating Custom Vale Styles](https://vale.sh/docs/styles/)
