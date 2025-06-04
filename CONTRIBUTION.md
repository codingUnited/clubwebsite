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