## Working with Templates (`base.html`)

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

  ## 💨 Using Tailwind CSS in Django Templates

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
