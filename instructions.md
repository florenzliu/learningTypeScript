npm init \
npm i -D typescript (in production, use compile JavaScript) \
npx tsc *.ts \
node *.js \
npx tsc --init (generate tsconfig.json) \
npx tsc -w (in watch mode) \
npm i -D nodemon (install nodemon) \
npx nodemon -w folder_to_watch -q path_to_js_file (watch instant change in js file in quiet mode) 
npm i -D concurrently (install concurrently) \
npx concurrently -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -w foler_to_watch -q path_to_js_file \
