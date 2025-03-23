# Custom Vocabularies in Vale

Vale’s [vocabulary system](https://vale.sh/docs/keys/vocab) lets you manage terminology separately from styles, ensuring **consistent language** across documentation while allowing customization of third-party styles without modification. This structured approach benefits industries like **technical writing, legal documentation, healthcare compliance, and software development**.

---

## How Vocabularies Work

Vocabularies consist of two plain-text files stored in a specific folder structure:

1. **`accept.txt`** – Approved terms and phrases added to all styles listed in `BasedOnStyles`.
2. **`reject.txt`** – Terms to flag as errors, automatically applied via the `Vale.Avoid` rule.

### **Benefits of Custom Vocabularies**

✔ **Enforce consistency** – Ensure correct terminology usage.  
✔ **Prevent unwanted terms** – Flag discouraged words.  
✔ **Simplify style management** – Update vocabulary without altering third-party styles.

### **Storage Location:**

```
<StylesPath>/config/vocabularies/<name>/
```

where `<name>` is your vocabulary’s identifier. This is referenced in your `.vale.ini` file.

---

## 📂 Organizing Your Vocabulary Files

### **Example Directory Structure:**

```
styles/
├───MyStyle/         
├───config/
│   └───vocabularies/
│       ├───DomainTerms/
│       │   ├───accept.txt  
│       │   └───reject.txt  
└───MyOtherStyle/
```

- Both `accept.txt` and `reject.txt` list **one entry per line**.
- Entries default to **case-sensitive regular expressions**.

---

## 🚀 Activating a Custom Vocabulary

To enable the `DomainTerms` vocabulary, define `StylesPath` and reference the vocabulary name in `.vale.ini`:

```ini
# Path to styles directory  
StylesPath = styles  

# Enable the custom vocabulary  
Vocab = DomainTerms  

# Apply styles globally or to specific file types  
[*]  
BasedOnStyles = Vale, MyStyle  
```

### **How It Works:**

1. **`StylesPath = styles`** – Specifies where custom styles and vocabularies reside.
2. **`Vocab = DomainTerms`** – Activates `DomainTerms`, stored in `styles/config/vocabularies/DomainTerms/`.
3. **`BasedOnStyles = Vale, MyStyle`** – Uses Vale’s default rules alongside `MyStyle`.

Once configured, Vale will:

- Enforce terms in `accept.txt` (e.g., standardized spelling and capitalization).
- Flag terms in `reject.txt` as errors.

### **Testing the Configuration**

Run Vale on a test document:

```bash
vale --config=.vale.ini your-document.md
```

If terms from `reject.txt` appear or `accept.txt` terms are misused, Vale will flag them.

---

## ✅ **Approved Terminology (`accept.txt`)**

Defines standardized spellings, capitalization, and formats.

### **Example `accept.txt`**

```txt
 # Standard NLP Tokens
[PAD]
[UNK]
[CLS]
[SEP]
[MASK]

# Legal Terms
arbitration_clause
breach_of_contract
confidential_information
force_majeure
indemnification
intellectual_property
jurisdiction
non_disclosure_agreement
service_level_agreement
termination_for_convenience

# Medical Terms
clinical_trial
FDA_approval
HIPAA_compliance
informed_consent
medical_malpractice
patient_confidentiality
pharmacovigilance
telemedicine

# Technology Terms (Case-Insensitive Matching)
(?i)Artificial Intelligence
(?i)Blockchain
(?i)Cloud Computing
(?i)Cryptocurrency
(?i)Decentralized Finance
(?i)Internet of Things
(?i)Machine Learning
(?i)Neural Network
(?i)Quantum Computing
(?i)Smart Contract
(?i)Big Data
JavaScript
TypeScript
React
Node.js
API
CLI
GitHub
Markdown
MDX
SEO
reStructuredText
AsciiDoc
front matter
Hugo
VS Code
Visual Studio Code
command-line interface
application programming interface
toolset
backlink
```

### **How Vale Uses `accept.txt`**

✔ **Ensures consistency** – Enforces standardized capitalization (e.g., always `Blockchain`).  
✔ **Prevents variations** – Mandates `non_disclosure_agreement` over alternative spellings.

---

## ❌ **Prohibited Terminology (`reject.txt`)**

Flags incorrect, outdated, or inconsistent terms.

### **Example `reject.txt`**

```txt
 # Incorrect or discouraged legal terms
[Nn]on[- ]?disclosure[- ]?agreement
[iI]ntellectual[- ]?property[- ]?rights
[Ff]orce[- ]?majeure[- ]?clause

# Incorrect or inconsistent medical terms
[Pp]atient[- ]?data[- ]?privacy
[Ff]ederal[- ]?Drug[- ]?Administration

# Common technology misuses
[Bb]lock chain
[Cc]rypto[- ]?currency
[Ii]nternet[- ]?of[- ]?things
[Aa]rtifical[- ]?intelligence
[Qq]uantum[- ]?computing[- ]?algorithm
Javascript
Typescript
ReactJS
NodeJS
Github
MarkDown
reST
Asciidoc
Frontmatter
VSCode
```

### **How Vale Uses `reject.txt`**

❌ **Flags incorrect terms** (e.g., `crypto currency` triggers a correction to `Cryptocurrency`).  
❌ **Prevents outdated terms** (e.g., replacing `patient data privacy` with `patient_confidentiality`).  
❌ **Catches variations** (e.g., `[Nn]on[- ]?disclosure[- ]?agreement` detects `"Non Disclosure Agreement"`, `"non-disclosure-agreement"`, etc.).

---

### **Handling Case Sensitivity**

Vale enforces **case sensitivity** by default. To allow case-insensitive matches, use:

```txt
(?i)MongoDB  
[Oo]bservability  
```

Alternatively, disable `Vale.Terms` to rely on `Vale.Spelling` for traditional spell-checking:

```ini
[*.md]  
BasedOnStyles = Vale  

Vale.Terms = NO  
```

---

## **Advanced: Targeting Vocabulary Entries**

To override an ignored token, set `vocab: false` in a custom rule:

```yaml
extends: existence  
message: Did you mean '%s'?  
vocab: false  
tokens:  
  - MongoDB  
```

This ensures `MongoDB` is flagged even if it's in `accept.txt`.

---

## 🛠️ **Best Practices for Managing Vale Vocabulary**

✔ **Organize by Category** – Separate **Legal, Medical, and Tech** terms in `accept.txt` and `reject.txt`.  
✔ **Use Regex for Flexibility** – Handle variations (`[Qq]uantum[- ]?computing` matches multiple formats).  
✔ **Maintain a Shared Vocabulary** – Store a single vocabulary folder across styles.  
✔ **Keep it Up to Date** – Regularly review and refine terminology.  
✔ **Test with Vale** – Run Vale’s command-line tool to validate enforcement.

```bash
vale --config=.vale.ini your-document.md
```

---

## **🚀 Why Use Vale’s Custom Vocabulary?**

✅ **Ensures Consistency** – Standardizes terminology across teams.  
✅ **Reduces Editing Time** – Automates error detection.  
✅ **Highly Customizable** – Supports regex-based rules.  
✅ **Integrates with CI/CD** – Works with **GitHub Actions, GitLab CI/CD, Jenkins**.  
✅ **Improves Compliance** – Aligns with **industry standards**.

By leveraging Vale’s vocabulary system, you **maintain clear, professional, and consistent documentation** while automating quality checks. 🚀
