# 🚀 Club Website Project

**Unlock Your Coding Potential!**  
*A Visual Guide to the Coding United Commons' First Full-Stack Project Journey*

From **Zero to Deployment** with:  
🔧 **Docker** · 🐍 **Django** · 🎨 **Tailwind CSS** · ⚡ **HTMX** · 🏔️ **Alpine.js**

This project is built to help students and aspiring developers learn how to build full-stack web applications using modern tools and practices. It's perfect for club members looking to collaborate and grow together.

---

## 🧰 Getting Started: Local Setup Instructions

Follow these steps to get the Club Website running on your local machine.

---

### 1. 📦 Clone the GitHub Repository

```bash
git clone https://github.com/your-username/club-website.git
cd club-website
```

---

### 2. 💻 Install Required Software

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) — Required to run the project in a containerized environment  
- [Visual Studio Code](https://code.visualstudio.com/) — Recommended code editor

#### ✅ Recommended VS Code Extensions

- Python  
- Pylance  
- Python Debugger  
- Docker  
- Container Tools  
- Tailwind CSS IntelliSense  
- Django

> 📝 **Note:** You do **not** need to install Python or Node.js on your system — the project runs entirely within Docker containers.

---

### 3. 🐳 Run the Project Using Docker

Make sure Docker Desktop is running, then in your project directory run:

```bash
docker-compose up --build
```

This will:

- ✅ Build the Docker images (only on first run or when the Dockerfile changes)  
- ✅ Start the Django development server inside the container

---

### 4. 🌐 Access the Web App

Once the containers are running, open your browser and go to:

```text
http://127.0.0.1:8000/
```

You should see the Club Website home page live on your machine! 🎉

---

### 5. 🛠️ Useful Development Commands (Inside Container)

To open a shell inside the Django container:

```bash
docker-compose exec web bash
```

Then you can run Django management commands like:

```bash
python manage.py migrate
python manage.py createsuperuser
```

---

### 6. 🧹 Stop and Clean Up

To stop the app:

```bash
docker-compose down
```

To stop and remove volumes and data (⚠️ this **deletes your database**):

```bash
docker-compose down -v
```

---

## 🧑‍💻 Want to Contribute?

We welcome contributions!  
Fork the repo, make your changes, and submit a pull request.

---

Happy coding! 💻✨
