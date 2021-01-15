## `npm run dev`

Run the app in development mode

## `npm run build`

Build the app into build folder with production

## Using Docker to simplify deployment

Step 1: NPM install

	npm install

Step 2: Build image and run container 

	docker-compose -f docker-compose.yml up --build -d

Using file docker-compose:
+ Dev: `docker-compose.yml` Then navigate to [http://localhost:80](http://localhost:8080) in your browser.
+ Prod: `docker-compose-prod.yml` Then navigate to [http://localhost:80](http://localhost:8080) in your browser.

Step 3: Remove build old

	docker image prune -f

## CICD Jenkin

Jenkins Pipeline (or simply "Pipeline" with a capital "P") is a suite of plugins which supports implementing and integrating _continuous delivery pipelines_ into Jenkins.

Using a `Jenkinsfile` in project to deploy Development