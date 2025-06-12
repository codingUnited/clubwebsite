# 🚀 Club Website Project  
**Unlock Your Coding Potential!**  
*A Beginner-Friendly Guide to Building a Full-Stack Website*

From Zero to Deployment with:  
🔧 Docker · 🐍 Django · 🎨 Tailwind CSS · ⚡ HTMX · 🏔️ Alpine.js

This project is designed for students and aspiring developers who are brand new to coding and want to learn how to build full-stack web apps with modern tools.

---

## 🧰 What You'll Need

- A Windows 10 or 11 computer  
- Internet access  
- Around 1–2 hours to complete setup

---

## 🪜 Step-by-Step Setup Instructions

---
### 1. 🎞️ Video Tutorial: [LINK](https://youtu.be/1yPApFZtB8M)
---

### 1. 🐧 Install Ubuntu on Windows (WSL)

Ubuntu is the Linux environment we’ll use to run code.

#### 1.1 Enable WSL

1. Open the **Start Menu**, search for **PowerShell**, right-click it, and choose **“Run as administrator.”**
2. Copy and paste this command:

   ```powershell
   wsl --install
   ```

3. Restart your computer when prompted.

---

### 2. 🏁 Set Up Ubuntu for the First Time

1. Open **Ubuntu** from the Start Menu.  
2. It will install and configure itself (this can take a few minutes).  
3. When prompted:  
   - Create a UNIX username  
   - Create a password (you won’t see the characters — that’s normal)

---

### 3. 🐙 Install Git (in Ubuntu)

Open Ubuntu and run:

```bash
sudo apt update
sudo apt install git -y
```

---

### 4. 🐳 Install Docker Desktop (on Windows)

1. Download Docker Desktop: https://www.docker.com/products/docker-desktop/  
2. Install it normally.  
3. Open Docker Desktop.  
4. Go to **Settings → Resources → WSL Integration**  
5. Check the box for **Ubuntu**  
6. Click **Apply & Restart**

---

### 5. 💻 Install Visual Studio Code

Download and install VS Code:  
👉 https://code.visualstudio.com/

---

### 6. 🧠 Install Recommended VS Code Extensions

In VS Code, open the **Extensions** tab (left sidebar) and install:

- Python  
- Pylance  
- Python Debugger  
- Docker  
- Container Tools  
- Tailwind CSS IntelliSense  
- Django

---

### 7. 📂 Create a `src` Folder in Windows & Clone the Project

We’ll store the project in a dedicated `src` folder in your **Windows home directory**. This keeps things organized and avoids confusion when opening files in VS Code.

#### 7.1 Create the folder:

1. Open **File Explorer**  
2. Go to:

   ```
   C:\Users\YourName\
   ```

3. Create a new folder named: `src`

#### 7.2 Access it from Ubuntu:

```bash
cd /mnt/c/Users/YourName/src
```

> Replace `YourName` with your actual Windows username.

#### 7.3 Clone the project:

```bash
git clone https://github.com/codingUnited/clubwebsite.git
cd club-website
```
> If you get the following error while cloning:
```
Cloning into 'club-website'...
error: chmod on /mnt/c/Users/delim/src/club-website/.git/config.lock failed: Operation not permitted
fatal: could not set 'core.filemode' to 'false'
```
> If you did not get this error and were able to clone go to step 8, if your being asked for gitub username go to setp 7.4

> This error means there is an issue with wsl permission to modify your windows directories to resolve this you want to run the following commands in Ubuntu CLI
```
sudo nano /etc/wsl.conf
```
> Arrow down to the bottom of the file and Add the following content:
```
[automount]
options = "metadata"
```
> Save and exit the file:
   - Press Ctrl+O to save.
   - Press Enter to confirm.
   - Press Ctrl+X to exit.
> Close Ubuntu CLI by click on the X icon
> Open Powershell if not already opened and run:
```
wsl --shutdown
```
This will shut down all WSL sessions
> Reopen your Ubuntu terminal, navigate to src file and run git clone again:
```
git clone https://github.com/codingUnited/clubwebsite.git
cd club-website
```

#### 7.4 Github credentials

First in terminal enter your Github username (**Not Email**) and click enter
> If you don't remember your user name click on your profile on the upper right of the page and it will be displayed at the top.

> Next you will need to generate a token for you password
   - Click on this link: [https://github.com/settings/tokens(https://github.com/settings/tokens)
   - Expand Personal Access tokens
   - Click Tokens Classic
   - Generate new token
   - Name the token Ubuntu and select All Repositories
   - Set desired expiration and click generate token
   - Save the token somewhere secure because you will not see it in Github again

> Enter your password in Ubuntu terminal (**carefully**)

> Once the repo finishes cloning store your credentials by running the following command
```
git config --global credential.helper store
```
---
### 8. 🟢 Install Node.js and npm (in Ubuntu)

```bash
sudo apt update
sudo apt install nodejs -y
sudo apt install npm -y
```

---

### 9. 🎨 Install Tailwind CSS

Inside the `club-website` folder:

```bash
npm install tailwindcss --save-dev
```

---

### 10. 🖥️ Open the Project in Visual Studio Code

1. Open **VS Code**
2. Click **File → Open Folder**
3. Navigate to:

   ```
   C:\Users\YourName\src\club-website
   ```

4. Click **Open**

---

### 11. 🐳 Run the Project Using Docker (via Ubuntu Terminal in VS Code)

#### 11.1 Open Ubuntu terminal in VS Code:

1. In VS Code, go to:  
   **Terminal → New Terminal**
2. In the terminal panel, click the dropdown arrow (▾) next to the **+** sign
3. Select:  
   **Ubuntu** or **Ubuntu (WSL)**

> 📝 This ensures you're using the correct environment Docker is set up to work with.

You should now see something like:

```
username@yourmachine:/mnt/c/Users/YourName/src/club-website$
```

#### 11.2 Start the project:

```bash
docker-compose up --build
```

This will:

- ✅ Build Docker containers (on first run or if Dockerfile changes)
- ✅ Start the Django development server

---

### 12. 🌐 View the Website

In your browser, go to:

```
http://127.0.0.1:8000/
```

You should see the Club Website homepage! 🎉

---

### 13. 🛠️ Useful Commands (Inside Docker)

To open a shell inside the Django container:

```bash
docker-compose exec web bash
```

Then run:

```bash
python manage.py migrate
python manage.py createsuperuser
```

---

### 14. 🧹 Stop and Clean Up

To stop the app:

```bash
docker-compose down
```

To stop and delete data:

```bash
docker-compose down -v
```

---

## 🧑‍💻 Want to Contribute?

Fork the repo, make improvements, and open a pull request!

---

## 💬 Need Help?

Ask in the club chat or GitHub Discussions — we’re here to help!

---

**Happy coding! 💻✨**
