# Setting up a new Mac for React TypeScript Development

This guide will help you set up your new Mac for React TypeScript development using Vite.

## Install Homebrew

Install the macOS package manager by running:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install Node.js and npm

Using Homebrew, install Node.js and npm:

```bash
brew install node
```

## Git Setup

Install Git:

```bash
brew install git
```

Configure Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Install Visual Studio Code

Install VS Code using Homebrew:

```bash
brew install --cask visual-studio-code
```

## Install Essential VS Code Extensions

Install the following extensions in VS Code:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

## Install Project Dependencies

Install the project dependencies:

```bash
npm install
```

## Start Development Server

Start the development server:

```bash
npm run dev
```

## Open in VS Code

Open the project in VS Code:

```bash
code .
```

## Recommended VS Code Settings

Add these settings to your VS Code settings.json for optimal development experience:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
