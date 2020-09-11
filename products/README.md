# Initial project setup with this command
npx create-nx-workspace@latest

# For ui lib we need to add bootstrap
npm install --save bootstrap jquery

# After adding state in to feature we need to install store and devtools-plugin.
npm install @ngxs/store
npm install @ngxs/devtools-plugin

# For documentation we need to run this command
npm install -g @compodoc/compodoc

# Run documentation
compodoc -p tsconfig.base.json
