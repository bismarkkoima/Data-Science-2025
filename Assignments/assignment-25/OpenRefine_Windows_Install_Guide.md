# 📘 Student Guide: Installing & Running OpenRefine on Windows (via Terminal)

OpenRefine is a powerful open-source tool for working with messy data (cleaning, transforming, reconciling).  
This guide will walk you through downloading, installing, and running OpenRefine on **Windows OS**.

---

## 🧰 Pre-requisites

- OpenRefine requires **Java Runtime Environment (JRE)** or **OpenJDK** installed on your system.

### 1. Check if Java is installed

Open **Command Prompt (cmd)** or **PowerShell**, then run:

```bash
java -version
```

👉 If you see something like `openjdk version "17"` or higher, Java is already installed.  
👉 If you get an error, install Java:

- Download Java from [Adoptium](https://adoptium.net/temurin/releases/)  
- Choose **Temurin JDK 17 (LTS)** or later for Windows.  
- Install it, then confirm again with `java -version`.

---

## 📦 Step 1: Download OpenRefine

1. Go to the official website:  
   👉 [https://openrefine.org/download](https://openrefine.org/download)

2. Download the **Windows kit (ZIP file)** (e.g., `openrefine-win-3.9.5.zip`).

3. Extract the ZIP file to a folder you can easily access (e.g., `C:\OpenRefine`).

---

## 🚀 Step 2: Run OpenRefine

1. Open **Command Prompt (cmd)** or **PowerShell**.  
2. Navigate to your extracted folder (adjust path if needed):  

```bash
cd C:\OpenRefine\openrefine-3.9.5
```

3. Run OpenRefine:

```bash
refine.bat
```

---

## 🌐 Step 3: Access OpenRefine

- OpenRefine will start a local server.  
- In your browser, go to:  

👉 [http://127.0.0.1:3333](http://127.0.0.1:3333)

⚠️ Keep the terminal window open while using OpenRefine.  
To stop, press `CTRL + C` in the terminal.

---

## ✅ Extra Tips

- If `refine.bat` doesn’t run, make sure you extracted the ZIP correctly and Java is installed.  
- You can also create a desktop shortcut to `refine.bat` for one-click launching.  
- Use **Chrome/Chromium/Edge** for the best experience.

---

🎯 That’s it! You can now run OpenRefine on Windows and start cleaning your data like a pro.
