---
title: Service containers
description: Learn about running containerized services in Azure Pipelines single or multiple container jobs or noncontainer jobs.
ms.assetid: a6af47c5-2358-487a-ba3c-d213930fceb8
ms.topic: conceptual
ms.date: 07/15/2024
monikerRange: azure-devops
---

# Service containers

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

If your pipeline requires the support of one or more services, you might need to create, connect to, and clean up the services per job. For example, your pipeline might run integration tests that require access to a newly created database and memory cache for each job in the pipeline.

A container provides a simple and portable way to run a service that your pipeline depends on. A *service container* lets you automatically create, network, and manage the lifecycle of a containerized service. Each service container is accessible only to the [job](phases.md) that requires it. Service containers work with any kind of job, but are most commonly used with [container jobs](container-phases.md).

## Requirements

- Service containers must define a `CMD` or `ENTRYPOINT`. The pipeline runs `docker run` for the provided container without any arguments.

- Azure Pipelines can run Linux or [Windows containers](/virtualization/windowscontainers/about/). You can use either the hosted Ubuntu container pool for Linux containers or the hosted Windows pool for Windows containers. The hosted macOS pool doesn't support running containers.

>[!NOTE]
>Service containers aren't supported in Classic pipelines.

## Single container job

The following example YAML pipeline definition shows a single container job.

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

The preceding pipeline fetches the `nginx` and `buildpack-deps` containers from [Docker Hub](https://hub.docker.com) and then starts the containers. The containers are networked together so that they can reach each other by their `services` name.

From inside this job container, the `nginx` host name resolves to the correct services by using Docker networking. All containers on the network automatically expose all ports to each other.

## Single noncontainer job

You can also use service containers without a job container, as in the following example.

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

This pipeline starts the latest `nginx` containers. Since the job isn't running in a container, there's no automatic name resolution. Instead, you can reach services by using `localhost`. The preceding example provides the port explicitly: `8080:80`.

An alternative approach is to let a random port get assigned dynamically at runtime. You can then access these dynamic ports by using [variables](variables.md). In a Bash script, you can access variables by using the process environment. These variables take the form: `agent.services.<serviceName>.ports.<port>`.

In the preceding example, `redis` is assigned a random available port on the host. The `agent.services.redis.ports.6379` variable contains the port number.

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

When you invoke a container resource or an inline container, you can specify an array of `ports` to expose on the container.

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

Specifying `ports` isn't required if your job is running in a container, because containers on the same Docker network automatically expose all ports to each other by default.

If your job is running on the host, `ports` are required to access the service. A port takes the form `<hostPort>:<containerPort>` or just `<containerPort>` with an optional `/<protocol>` at the end. For example, `6379/tcp` exposes `tcp` over port `6379`, bound to a random port on the host machine.

For ports bound to a random port on the host machine, the pipeline creates a variable of the form `agent.services.<serviceName>.ports.<port>` so that the job can access the port. For example, `agent.services.redis.ports.6379` resolves to the randomly assigned port on the host machine.

## Volumes

Volumes are useful for sharing data between services or for persisting data between multiple runs of a job. You specify volume mounts as an array of `volumes` of the form `<source>:<destinationPath>`, where `<source>` can be a named volume or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container. Volumes can be named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

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
>If you use Microsoft-hosted pools, your volumes aren't persisted between jobs, because the host machine is cleaned up after each job is completed.

## Startup options

Service containers share the same container resources as container jobs. This means that you can use the same [startup options](container-phases.md?tabs=yaml#options).

## Health check

If any service container specifies a [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck), the agent can optionally wait until the container is healthy before running the job.

## Multiple containers with services example

The following example has a Django Python web container connected to PostgreSQL and MySQL database containers.

- The PostgreSQL database is the primary database, and its container is named `db`. The `db` container uses volume `/data/db:/var/lib/postgresql/data`, and there are three database variables passed to the container via `env`.
  The `mysql` container uses port `3306:3306`, and there are also database variables passed via `env`.
  The `web` container is open with port `8000`.

In the steps, `pip` installs dependencies and then Django tests run.

To set up a working example, you need a [Django site set up with two databases](https://docs.djangoproject.com/en/3.2/topics/db/multi-db/). The example assumes your *manage.py* file is in the root directory and your Django project is also within that directory. You might need to update the `/__w/1/s/` path in `/__w/1/s/manage.py test`.

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
