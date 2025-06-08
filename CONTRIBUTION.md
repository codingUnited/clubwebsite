<h1 align="center">🤝 Contributing Guidelines 🤝</h1>

<p align="center">
  Thank you for your interest in contributing! This document provides general guidelines, best practices, and workflow instructions for anyone looking to contribute to this project whether through code, documentation, design, or other improvements. We welcome all kinds of contributions and appreciate your support in making this project better!
</p>

## 📚 Table of Contents

- 🛠️ [1- Git Contribution Workflow Guide](#1--git-contribution-workflow-guide)
- 🖼️ [2- Working with Templates base.html](#2--working-with-templates-basehtml)

<br>
<br>

# 1- Git Contribution Workflow Guide

Thank you for your interest in contributing! This guide explains how to work with branches and contribute code effectively using Git and GitHub.

---

### 🌿 How to Create a New Local Branch

1. First, make sure you're on the `master` branch:

   ```bash
   git checkout master
   ```
2. Pull the latest changes from the remote:

    ```bash
    git pull origin master
    ```
3. Now create and switch to a new branch:

    ```bash
    git checkout -b your-feature-branch
    ```
> 📝 Replace `your-feature-branch` with a descriptive name like `feature/add-login` or `bugfix/fix-header`.

---

### 🔄 How to Ensure Your Local Branch Is Up to Date with `master`

Before pushing your changes, make sure your branch is updated with the latest `master` changes.
1. Switch to `master`:
    ```bash
    git checkout master
    ```
2. Pull the latest updates:
    ```bash
    git pull origin master
    ```
3. Switch back to your feature branch:
    ```bash
    git checkout your-feature-branch
    ```
4. Merge `master` into your feature branch:
    ```bash
    git merge master
    ```
5. If there are merge conflicts, resolve them, then commit:
    ```bash
    git commit -am "Resolve merge conflicts"
    ```
### 🚀 How to Push a New Branch to the Remote Repository

After committing your changes locally, push your branch to the remote repository:

```bash
git push origin your-feature-branch
```
> 🚀 This creates the branch on GitHub if it doesn’t exist yet.

---
### ♻️ How to Push Updates to an Existing Remote Branch

If you've already pushed the branch and made more changes:
```bash
git add .
git commit -m "Describe your update"
git push
```
>🛠️ Or use `git push origin your-feature-branch` if needed.

---
### 🔁 How to Create a Pull Request (PR) Into `master`

Once your branch is pushed:

1. Go to your repository on GitHub.
2. Click **"Compare & pull request"**, or go to the **Pull Requests** tab and click **"New pull request"**.
3. Ensure:
   - **Base branch** = `master`
   - **Compare branch** = `your-feature-branch`
4. Add a descriptive **title** and **summary** of your changes.
5. Click **"Create pull request"**.

> ✅ Your code is now ready for review and merging.

---
### 📘 Summary of Common Git Commands

| Task                              | Command                               |
| --------------------------------- | ------------------------------------- |
| Switch to master branch           | `git checkout master`                 |
| Pull latest changes from master   | `git pull origin master`              |
| Create and switch to a new branch | `git checkout -b your-feature-branch` |
| Stage all changes                 | `git add .`                           |
| Commit changes                    | `git commit -m "your message"`        |
| Push new branch to GitHub         | `git push origin your-feature-branch` |
| Push updates to existing branch   | `git push`                            |
| Merge master into your branch     | `git merge master`                    |

---
> 📌 **Tip**: Run `git status` at any time to check your current branch and file state.

🙌 **Thank you for contributing!**

*****************************************************************************************************

<br>
<br>

# 2- Working with Templates (`base.html`)

All HTML templates in this project should extend from `base.html` to ensure a consistent structure and shared functionality.

### 🔧 Extending `base.html`

To create a new page, extend `base.html` using the `{% extends %}` tag and override the provided blocks:

```html
{% extends "base.html" %}

{% block title %}
  <title>My Page Title</title>
{% endblock %}

{% block content %}
  <h1>Welcome</h1>
  <p>This is the content of my page.</p>
{% endblock %}
```

### 📦 Available Blocks

- **`title`** – Place your `<title>` tag here.
- **`content`** – Main body content of the page goes here.

### 🚀 Frontend Libraries Included

The `base.html` file includes the following libraries via CDN:

- **[HTMX](https://htmx.org/)** (`v1.9.2`): Enables AJAX-like behavior using HTML attributes.  
  Example usage:

  ```html
  <button hx-get="/some-endpoint" hx-target="#result">Load Data</button>
  <div id="result"></div>
  ```

- **[Alpine.js](https://alpinejs.dev/)** (`v3.x.x`): Adds interactive behavior using declarative attributes.

  Example usage:

  ```html
  <div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <p x-show="open">Hello, Alpine.js!</p>
  </div>
  ```

### 💨 Using Tailwind CSS in Django Templates

We use **[Tailwind CSS](https://tailwindcss.com/)** utility-first classes to style all frontend templates. You don’t need to write custom CSS — Tailwind provides everything via classes in your HTML.

---

### ✅ How to Use Tailwind in HTML

1. **Use Tailwind utility classes directly in your HTML:**

    ```html
    <h1 class="text-3xl font-bold underline text-center">
      Welcome to the App!
    </h1>

    <div class="bg-gray-100 p-4 rounded-lg shadow">
      <p class="text-gray-700">This is a Tailwind-styled box.</p>
    </div>
    ```

2. **Avoid writing custom CSS.**  
   If absolutely necessary, extend Tailwind via configuration instead of writing raw CSS.

3. **Base template includes Tailwind:**  
   All templates should extend from the base template:

    ```django
    {% extends "base.html" %}
    ```

4. **Do not manually link CSS files.**  
   Tailwind is already loaded via the following line in `base.html`:

    ```html
    <link href="{% static 'output.css' %}" rel="stylesheet">
    ```

---

### 🔄 Development Notes

- Tailwind is compiled via the CLI watching `input.css`.  
  Run this during development to automatically update `output.css`:

    ```bash
    npx tailwindcss -i ./core/static/input.css -o ./core/static/output.css --watch
    ```

- The `input.css` file includes Tailwind using:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- The final `output.css` file is what Django serves via `{% static %}`.

---

### 🧠 Best Practices

- Stick to utility classes — avoid writing custom CSS unless absolutely necessary.
- Use semantic HTML and keep class usage meaningful.
- Break large templates into reusable components (e.g., via Django template includes).

---

### 📦 Helpful Resources

- [Tailwind UI (free & paid components)](https://tailwindui.com/components)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Keep your HTML semantic, your layouts clean, and let Tailwind do the heavy lifting. 💪

