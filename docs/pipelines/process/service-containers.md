---
title: Service containers
description: Learn about running containerized services in Azure Pipelines single or multiple container jobs or noncontainer jobs.
ms.assetid: a6af47c5-2358-487a-ba3c-d213930fceb8
ms.topic: concept-article
ms.date: 09/12/2025
monikerRange: azure-devops
#customer intent: As an Azure Pipelines user, I want to understand service containers so I can use them to automatically manage services that my pipelines require.

---

# Service containers

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article describes using *service containers* in Azure Pipelines. If your pipeline requires the support of one or more services, you might need to create, connect to, and clean up the services per [job](phases.md). For example, your pipeline might run integration tests that require access to a newly created database and memory cache for each job in the pipeline.

A service container provides a simple and portable way to run services in your pipeline. The service container is accessible only to the job that requires it.

Service containers let you automatically create, network, and manage the lifecycles of services that your pipelines depend on. Service containers work with any kind of job, but are most commonly used with [container jobs](container-phases.md).

>[!NOTE]
>Classic pipelines don't support service containers.

## Conditions and limitations

- Service containers must define a `CMD` or `ENTRYPOINT`. The pipeline runs `docker run` with no arguments for the provided container.

- Azure Pipelines can run Linux or [Windows](/virtualization/windowscontainers/about/) containers. You use the hosted Ubuntu pool for Linux containers or the hosted Windows pool for Windows containers. The hosted macOS pool doesn't support running containers.

- Service containers share the same container resources as container jobs, so they can use the same [startup options](container-phases.md?tabs=yaml#options).

- If a service container specifies a [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck), the agent can optionally wait until the container is healthy before running the job.

## Single container job

The following example YAML pipeline defines a single container job that uses a service container. The pipeline fetches the `buildpack-deps` and `nginx` containers from [Docker Hub](https://hub.docker.com) and then starts all containers. The containers are networked so they can reach each other by their `services` names.

From inside the job container, the `nginx` host name resolves to the correct services by using Docker networking. All containers on the network automatically expose all ports to each other.

```yaml
resources:
  containers:
  - container: my_container
    image: buildpack-deps:focal
  - container: nginx
    image: nginx

pool:
  vmImage: 'ubuntu-latest'

container: my_container
services:
  nginx: nginx

steps:
- script: |
    curl nginx
  displayName: Show that nginx is running
```

## Single noncontainer job

You can also use service containers in noncontainer jobs. The pipeline starts the latest containers, but because the job doesn't run in a container, there's no automatic name resolution. Instead, you reach services by using `localhost`. The following example pipeline explicitly specifies the `8080:80` port for `nginx`.

An alternative approach is to assign a random port dynamically at runtime. To allow the job to access the port, the pipeline creates a [variable](variables.md) of the form `agent.services.<serviceName>.ports.<port>`. You can access the dynamic port by using this [environment variable](variables.md#environment-variables) in a Bash script.

In the following pipeline, `redis` gets a random available port on the host, and the `agent.services.redis.ports.6379` variable contains the port number.

```yaml
resources:
  containers:
  - container: nginx
    image: nginx
    ports:
    - 8080:80
    env:
      NGINX_PORT: 80
  - container: redis
    image: redis
    ports:
    - 6379

pool:
  vmImage: 'ubuntu-latest'

services:
  nginx: nginx
  redis: redis

steps:
- script: |
    curl localhost:8080
    echo $AGENT_SERVICES_REDIS_PORTS_6379
```

## Multiple jobs

Service containers are also useful for running the same steps against multiple versions of the same service. In the following example, the same steps run against multiple versions of PostgreSQL.

```yaml
resources:
  containers:
  - container: my_container
    image: ubuntu:22.04
  - container: pg15
    image: postgres:15
  - container: pg14
    image: postgres:14

pool:
  vmImage: 'ubuntu-latest'

strategy:
  matrix:
    postgres15:
      postgresService: pg15
    postgres14:
      postgresService: pg14

container: my_container

services:
  postgres: $[ variables['postgresService'] ]
steps:
- script: printenv
```

## Ports

Jobs that run directly on the host require `ports` to access the service container. Specifying `ports` isn't required if your job runs in a container, because containers on the same Docker network automatically expose all ports to each other by default.

A port takes the form `<hostPort>:<containerPort>` or just `<containerPort>` with an optional `/<protocol>` at the end. For example, `6379/tcp` exposes `tcp` over port `6379`, bound to a random port on the host machine.

When you invoke a container resource or an inline container, you can specify an array of `ports` to expose on the container, as in the following example.

```yaml
resources:
  containers:
  - container: my_service
    image: my_service:latest
    ports:
    - 8080:80
    - 5432

services:
  redis:
    image: redis
    ports:
    - 6379/tcp
```

For ports bound to a random port on the host machine, the pipeline creates a variable of the form `agent.services.<serviceName>.ports.<port>` so that the job can access the port. For example, `agent.services.redis.ports.6379` resolves to the randomly assigned port on the host machine.

## Volumes

Volumes are useful for sharing data between services or for persisting data between multiple runs of a job. You specify volume mounts as an array of `volumes`.

Each volume takes the form `<source>:<destinationPath>`, where `<source>` is either a named volume or an absolute path on the host, and `<destinationPath>` is an absolute path in the container. Volumes can be named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

```yaml
services:
  my_service:
    image: myservice:latest
    volumes:
    - mydockervolume:/data/dir
    - /data/dir
    - /src/dir:/dst/dir
```

>[!NOTE]
>Microsoft-hosted pools don't persist volumes between jobs, because the host machine is cleaned up after each job.

## Multiple containers with services example

The following example pipeline has a Django Python web container connected to PostgreSQL and MySQL database containers.

- The PostgreSQL database is the primary database, and its container is named `db`.
- The `db` container uses volume `/data/db:/var/lib/postgresql/data`, and passes three database variables to the container via `env`.
- The `mysql` container uses port `3306:3306`, and also passes database variables via `env`.
- The `web` container is open with port `8000`.

In the steps, `pip` installs dependencies, and then Django tests run.

To set up a working example, you need a [Django site set up with two databases](https://docs.djangoproject.com/en/5.2/topics/db/multi-db/). The example assumes your *manage.py* file and your Django project are in the root directory. If not, you might need to update the `/__w/1/s/` path in `/__w/1/s/manage.py test`.

```yaml
resources:
  containers:
    - container: db
      image: postgres
      volumes:
          - '/data/db:/var/lib/postgresql/data'
      env:
        POSTGRES_DB: postgres
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: postgres
    - container: mysql
      image: 'mysql:5.7'
      ports:
         - '3306:3306'
      env:
        MYSQL_DATABASE: users
        MYSQL_USER: mysql
        MYSQL_PASSWORD: mysql
        MYSQL_ROOT_PASSWORD: mysql
    - container: web
      image: python
      volumes:
      - '/code'
      ports:
        - '8000:8000'

pool:
  vmImage: 'ubuntu-latest'

container: web
services:
  db: db
  mysql: mysql

steps:
    - script: |
        pip install django
        pip install psycopg2
        pip install mysqlclient
      displayName: set up django
    - script: |
          python /__w/1/s/manage.py test
```

## Related content

- [Specify jobs in your pipeline](phases.md)
- [Use container jobs in YAML pipelines](container-phases.md)
