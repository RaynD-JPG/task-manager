# DEPLOYMENT GUIDE - Task Manager React App

## Step-by-Step Instructions

### 1. SETUP (5 minutes)

First, make sure you have Node.js installed. Check by running:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

### 2. EXTRACT AND INSTALL (5 minutes)

```bash
# Navigate to the project folder
cd task-manager

# Install all dependencies
npm install
```

### 3. TEST LOCALLY (2 minutes)

```bash
# Start the development server
npm start
```

The app will open in your browser at http://localhost:3000

Try adding tasks, completing them, filtering - make sure everything works!

### 4. PUSH TO GITHUB (10 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Task Manager React app"

# Create a new repository on GitHub named "task-manager"
# Then connect it:
git remote add origin https://github.com/RaynD-JPG/task-manager.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. DEPLOY TO GITHUB PAGES (5 minutes)

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

Wait 2-3 minutes, then your app will be live at:
https://RaynD-JPG.github.io/task-manager

### 6. VERIFY

- Visit the live URL
- Test all features work
- Check it looks good on mobile (resize browser)

## TROUBLESHOOTING

**Problem:** npm install fails
**Solution:** Delete node_modules folder and package-lock.json, run npm install again

**Problem:** Deployment fails
**Solution:** Make sure you're logged into GitHub in your terminal
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**Problem:** Live site shows 404
**Solution:** Check package.json has correct homepage URL, redeploy

## WHAT YOU LEARNED (for interviews)

When asked about this project, you can say:

"I built a task manager using React to learn component-based architecture. I used the useState hook for state management, implemented filtering logic with JavaScript array methods, and deployed it to GitHub Pages. The app handles adding, completing, and deleting tasks with a responsive UI. Building this taught me how React re-renders components when state changes and how to structure a React application properly."

## KEY CONCEPTS YOU NOW UNDERSTAND

✅ React Components
✅ useState Hook
✅ Props and State
✅ Event Handling (onClick, onChange, onKeyPress)
✅ Conditional Rendering
✅ Array Methods (map, filter)
✅ Component Lifecycle
✅ Deployment with GitHub Pages

## NEXT STEPS

Once deployed, add this to your CV under Projects:

**Task Manager | React, JavaScript, CSS | github.com/RaynD-JPG/task-manager**
- Built task management application using React with component-based architecture
- Implemented state management using React Hooks (useState) for CRUD operations
- Deployed to GitHub Pages with responsive UI supporting mobile and desktop

BOOM - you now have a real React project! 🚀
