# DevOps Portfolio Website - Bala Krishna A

A modern, animated portfolio website built with React, Vite, TailwindCSS, and Framer Motion. Features a built-in resume version control system.

## 🚀 Features

- **Modern UI**: Glassmorphism design, animated transitions, and responsive layout.
- **Resume Versioning**: Store multiple versions of your resume in the repo and manage them via a local Admin page.
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions.
- **Tech Stack**: React, Vite, TailwindCSS, Framer Motion, Lucide React.

## 🛠️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd devops-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```

## 📄 Resume Management

The website reads resume configuration from `public/resume.json`.

### How to add a new resume version:

1.  **Place the PDF file** in `public/resumes/` (e.g., `resume-v2.pdf`).
2.  **Go to the Admin Page** locally: `http://localhost:5173/admin`
3.  **Enter details:**
    *   Version: `v2`
    *   File Name: `resume-v2.pdf`
4.  **Click Generate JSON**.
5.  **Copy the JSON output** and paste it into `public/resume.json`, replacing the existing content (or merging if you want to keep history, though the site currently only uses `currentVersion`).
6.  **Commit and Push** the changes.

## 📦 Deployment

The project is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

**Important:** Go to your repository **Settings > Pages** and ensure the source is set to **GitHub Actions**.

## 📂 Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, etc.)
- `src/pages`: Individual page components (Home, About, Skills, etc.)
- `public/resumes`: Directory for storing resume PDF files.
- `public/resume.json`: Configuration file for the current resume version.
