# Confidential Content (e.g., Patent Filing)

The purpose of this folder is to hold documents that **must not** enter the git history in plaintext —
such as patent content, formulas, or anything that should only be readable by specific people and
that other team members with access to this repository should not see in detail.

The rule for this folder is defined in `.gitignore`: every file inside `confidential/` is ignored,
**except** files with the `.gpg` extension (i.e., already encrypted). This way, even if you
mistakenly `git add` a plaintext file, it will not enter the commit.

## Why encrypt before committing, not after?

Git history is permanent. If a plaintext version enters a commit once, even if it is deleted in
a later commit, it remains in the history (and in every collaborator's local copy). So the file must be
encrypted **before** any `git add`.

## Recommended Method: Asymmetric GPG (only you can decrypt)

### 1) Create a personal GPG key (once, on your own machine)

```bash
gpg --full-generate-key
```

Choose the default key type (RSA) and a length of 4096 bits and set a strong passphrase for it.
Then find the email associated with the key with this command:

```bash
gpg --list-secret-keys --keyid-format long
```

### 2) Encrypt the document before adding it to the repo

Put your text file (e.g., `patent-disclosure.md`) in this `confidential/` folder, then:

```bash
gpg --encrypt --recipient your-email@example.com \
  -o confidential/patent-disclosure.md.gpg \
  confidential/patent-disclosure.md
```

After this step, delete the original plaintext file from the folder (or keep it in another safe place) —
only the `.gpg` file should remain in the repo:

```bash
rm confidential/patent-disclosure.md
git add confidential/patent-disclosure.md.gpg
git commit -m "Add encrypted confidential document"
```

Team members who pull the repo will see only an encrypted binary file and cannot
open it without your private key.

### 3) Decrypting the document (only by the private key holder)

```bash
gpg --decrypt confidential/patent-disclosure.md.gpg > confidential/patent-disclosure.md
```

### Adding a Second Recipient (e.g., a patent attorney or co-founder)

You can encrypt the document for several people at once so each can open it with their own private key:

```bash
gpg --encrypt --recipient your-email@example.com --recipient partner-email@example.com \
  -o confidential/patent-disclosure.md.gpg confidential/patent-disclosure.md
```

## Important Notes

- Never put your private key and passphrase in chat or in the repo.
- Before committing, always run `git status` to make sure only the `.gpg` file is staged, not the plaintext version.
- For extra assurance (for example, if the idea has not yet been filed), it is better for the original document
  never to enter any git repository before submitting the application, even encrypted — and to be kept in a private, restricted space
  (such as an offline document or a corporate Vault).
