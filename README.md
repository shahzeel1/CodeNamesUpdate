# Code Names

### Steps to Open Web App with Docker

# git clone this repository

# cd into cloned repo directory (CodeNamesUpdate)

# Download Docker Desktop for your OS

# The repository includes a Dockerfile for building a docker image of this app. Now build docker image of app:

```
docker build . -t codenames:latest
```

# The following command will launch the docker image:

```
docker run --name codenames_server --rm -p 9091:9091 -d codenames
```

# You should see a container image running on the desktop app. An icon there (first one) when you hover over the codenames container is called “open in browser”. Click this icon and it takes you to web app.

# You may need to use Chrome as your default browser. Those with MacOS may need to use Safari as default browser. If first page doesn’t show main page with “Player X” as input before the game identifier, use the opposite browser.

# You can stop the container using the desktop app (icon when you hover over the container) or go to CLI and the following command will kill the docker instance:

```
docker stop codenames_server
```
