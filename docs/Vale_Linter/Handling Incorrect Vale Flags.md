# Handling Incorrect Vale Flags

If Vale incorrectly flags a valid word (e.g., "Textlint" or "Proselint"), you can resolve this issue by adding the word to an **accept.txt** vocabulary file or modifying the relevant style rule. Below are the steps to address this effectively.

---

## Option 1: Add the Word to `accept.txt`

Vale uses vocabulary lists to recognize specific terms as valid. To allow a word, add it to your project's **accept.txt** file.

#### Steps:

1. Locate or create the **accept.txt** file in your Vale vocabulary directory:
   
   ```
   styles/
   ├── config/
   │   └── vocabularies/
   │       ├── CustomVocab/
   │       │   ├── accept.txt  
   │       │   └── reject.txt  
   ```

2. Open **accept.txt** and add the word:
   
   ```txt
   Textlint
   Proselint
   ```

3. Ensure your `.vale.ini` file references the vocabulary:
   
   ```ini
   StylesPath = styles
   Vocab = CustomVocab
   ```

---

## Option 2: Modify the Rule in a Custom Vale Style

If a style rule incorrectly flags the word, you can override it by adjusting your custom Vale rule.

#### Steps:

1. Locate the relevant rule file (e.g., `Textlint.yml`).

2. Add an exception using the `exceptions` field:
   
   ```yaml
   extends: existence
   message: "Avoid using '%s'."
   level: warning
   exceptions:
    - Textlint
    - Proselint
   ```

---

## Option 3: Disable the Rule for Specific Words

If the issue persists, disable the problematic rule in your `.vale.ini` configuration:

```ini
[*.md]
BasedOnStyles = Vale
Textlint = NO  # Disables the rule flagging "Textlint"
```

By implementing these fixes, you ensure that valid words are not mistakenly flagged as errors while maintaining robust linting for other terms.

---

## Using Multiple Vocabularies in Vale

In Vale, you can specify **multiple vocabularies** in your `.vale.ini` configuration by listing them as a comma-separated value under `Vocab`. This allows you to use multiple `accept.txt` files in one project.

#### Step 1: Organize Your Vocabulary Files

Ensure that your vocabularies are structured correctly inside the `styles/config/vocabularies/` directory.

```
styles/
├── config/
│   └── vocabularies/
│       ├── DomainTerms/
│       │   ├── accept.txt  
│       │   └── reject.txt  
│       ├── CustomVocab/
│       │   ├── accept.txt  
│       │   └── reject.txt  
```

Each vocabulary folder (`DomainTerms`, `CustomVocab`) contains its own `accept.txt` and `reject.txt` files.

#### Step 2: Update Your `.vale.ini` Configuration

Modify your `.vale.ini` file to include **multiple vocabularies**:

```ini
StylesPath = styles

# Enable multiple vocabularies
Vocab = DomainTerms, CustomVocab

[*]
BasedOnStyles = Vale, MyStyle  # Use Vale with your custom style
```

This configuration ensures all terms listed in `accept.txt` across both vocabularies are recognized.

#### Step 3: Verify the Configuration

Run Vale against a test document to confirm it correctly applies both vocabularies:

```bash
vale --config=.vale.ini your-document.md
```

If any terms from **either `accept.txt` file** are still flagged as errors, ensure:

1. The vocabularies exist in `styles/config/vocabularies/`.
2. Each vocabulary folder contains a correctly formatted `accept.txt` file.
3. Your `.vale.ini` correctly references both vocabularies.

Using multiple vocabularies enables you to maintain **separate terminology lists** for different domains (e.g., technical terms, legal jargon, or industry-specific vocabulary) while ensuring consistency across your documentation.

---

### Best Practices

- ✅ **Use `accept.txt`** for managing allowed words across vocabularies.
- ✅ **Use rule exceptions** to maintain rule functionality while ignoring false positives.
- ❌ **Disable entire rules** only if you never want Vale to flag foreign words.

Run a test with:

```bash
vale --config=.vale.ini your-document.md
```

These solutions ensure that valid words are correctly handled while maintaining effective linting.
