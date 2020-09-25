FROM node:12-alpine

COPY . .

CMD ["node", "--async-stack-traces", "--trace-warnings", "lib/index.js"]