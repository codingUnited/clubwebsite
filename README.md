# 🚀 Club Website

Modern Django + Tailwind Project
_Quick setup for local development using Docker_

## 🧰 Requirements

- Visual Studio Code
- Docker Desktop

That’s it — no WSL, no manual installs.

## ⚡ Quick Start

1. Clone the repo
```bash
git clone https://github.com/codingUnited/clubwebsite.git
cd clubwebsite
```

2. Spin up containers
```bash
docker compose up --build
```

On first run this builds the images; later runs will be faster.

3. Open in VS Code

- File → Open Folder → clubwebsite/

4. Access the site
```init
http://127.0.0.1:8000/
```

You should see the homepage 🎉

## 🧩 Recommended VS Code Extensions

Make sure to install these for the best dev experience:
- HTML CSS Support
- Prettier – Code Formatter
- Docker
- Dev Containers
- Python
- Django

## 🛠️ Common Commands
- Start project
```bash
docker compose up
```
- Stop project
```bash
docker compose down
```
- Reset containers + data
```bash
docker compose down -v
```

### Initial DB Setup
- Once docker is up and running
  ```bash
  docker compose exec club python manage.py migrate
  ```
- Setup DB IDE i.e., DBeaver
  - Host: localhost
  - DB: clubdb
  - Port: 5432
  - Username: clubuser
  - Password: clubpass
--------------
## 🤝 Contributing
- Create a branch, make changes, push, and open a PR.
- Use GitHub issues/discussions for questions or suggestions.

## 💬 Need Help?

Ask in the Coding United club chat or ping us on GitHub.
