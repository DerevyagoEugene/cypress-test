FROM cypress/browsers:node18.12.0-chrome106-ff106
WORKDIR /app
COPY . .
USER root
RUN npm install
RUN npm install -g cypress
CMD ["cypress", "run", "--e2e", "--config-file", "cypress.config.ts", "--browser", "chrome"]
