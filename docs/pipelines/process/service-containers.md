---
title: Service Containers
titleSuffix: Azure Pipelines
description: Run containerized services alongside pipeline jobs
ms.assetid: a6af47c5-2358-487a-ba3c-d213930fceb8
ms.topic: conceptual
ms.date: 01/24/2023
monikerRange: azure-devops
---

# Service containers

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

If your pipeline requires the support of one or more services, in many cases you'll want to create, connect to, and clean up each
service on a per-job basis. For instance, a pipeline may run integration tests that require access to
a database and a memory cache. The database and memory cache need to be freshly created for each job in the pipeline.

A container provides a simple and portable way to run a service that your pipeline depends on.
A _service container_ enables you to automatically create, network, and manage the lifecycle of your containerized service.
Each service container is accessible by only the job that requires it.
Service containers work with any kind of [job](phases.md), but they're most commonly used with [container jobs](container-phases.md).

## Requirements

Service containers must define a `CMD` or `ENTRYPOINT`.
The pipeline will run `docker run` for the provided container without additional arguments.

Azure Pipelines can run Linux or [Windows Containers](/virtualization/windowscontainers/about/). Use either
hosted Ubuntu for Linux containers, or the Hosted Windows Container pool for Windows containers.
(The Hosted macOS pool doesn't support running containers.)

# [YAML](#tab/yaml)

## Single container job

A simple example of using [container jobs](container-phases.md):

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

This pipeline fetches the `nginx` and `buildpack-deps` containers from [Docker Hub](https://hub.docker.com)
and then starts the containers. The containers are networked together so that they can reach each other
by their `services` name. 

From inside this job container, the `nginx` host name resolves to the correct services using Docker networking.
All containers on the network automatically expose all ports to each other.
## Single job

You can also use service containers without a job container. A simple example:

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

This pipeline starts the latest `nginx` containers. Since the job isn't running in a container, there's no automatic name resolution.
This example shows how you can instead reach services by using `localhost`. 
In the above example, we provide the port explicitly (for example, `8080:80`).

An alternative approach is to let a random
port get assigned dynamically at runtime. You can then access these dynamic ports by using [variables](variables.md). 
In a Bash script, you can access a variable by using the process environment. These variables take the form: `agent.services.<serviceName>.ports.<port>`.
In the above example, `redis` is assigned a random available port on the host.
The `agent.services.redis.ports.6379` variable contains the port number.

## Multiple jobs

Service containers are also useful for running the same steps against multiple versions of the same service.
In the following example, the same steps run against multiple versions of PostgreSQL.

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

When specifying a container resource or an inline container, you can specify an array of `ports` to expose on the container.

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

Specifying `ports` is not required if your job is running in a container because containers on the same Docker network automatically expose all ports
to each other by default.

If your job is running on the host, then `ports` are required to access the service. A port takes the form `<hostPort>:<containerPort>` or just `<containerPort>`,
with an optional `/<protocol>` at the end, for example `6379/tcp` to expose `tcp` over port `6379`, bound to a random port on the host machine.

For ports bound to a random port on the host machine, the pipeline creates a variable of the form `agent.services.<serviceName>.ports.<port>` so that it can be accessed
by the job. For example, `agent.services.redis.ports.6379` resolves to the randomly assigned port on the host machine.

## Volumes

Volumes are useful for sharing data between services, or for persisting data between multiple runs of a job.

You can specify volume mounts as an array of `volumes`. Volumes can either be named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

```yaml
services:
  my_service:
    image: myservice:latest
    volumes:
    - mydockervolume:/data/dir
    - /data/dir
    - /src/dir:/dst/dir
```

Volumes take the form `<source>:<destinationPath>`, where `<source>` can be a named volume or an absolute path on the host machine, and `<destinationPath>` is
an absolute path in the container.

> [!NOTE]
> If you use our hosted pools, then your volumes will not be persisted between jobs because the host machine is cleaned up after the job is completed.

## Other options

Service containers share the same container resources as container jobs. This means that you can use the same
[additional options](container-phases.md?tabs=yaml#options).

# [Classic](#tab/classic)

Service containers aren't yet supported in classic pipelines.

---

## Healthcheck

Optionally, if any service container specifies a [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck), the
agent waits until the container is healthy before running the job.

## Multiple containers with services example

In this example, there's a Django Python web container connected to two database containers - PostgreSQL and MySQL. The PostgreSQL database is the primary database and its container has the name `db`. The `db` container uses volume `/data/db:/var/lib/postgresql/data` and there are three database variables passed to the container via `env`. The `mysql` container uses port `3306:3306` and there are also database variables passed via `env`. The `web` container is open with port `8000`. In the steps, `pip` installs dependencies and then Django test are run. If you'd like to get a working example set up, you'll need a [Django site set up with two databases](https://docs.djangoproject.com/en/3.2/topics/db/multi-db/). This example assumes your `manage.py` file is in the root directory and your Django project is within that directory. You may need to update the `/__w/1/s/` path in `/__w/1/s/manage.py test`. 


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
