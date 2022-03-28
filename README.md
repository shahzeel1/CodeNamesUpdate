# Code Names

### Docker

Alternatively, the repository includes a Dockerfile for building a docker image of this app.

```
docker build . -t codenames:latest
```

The following command will launch the docker image:

```
docker run --name codenames_server --rm -p 9091:9091 -d codenames
```

The following command will kill the docker instance:

```
docker stop codenames_server
```
