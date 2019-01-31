---
title: Maven | REST API Reference for VSTS
description: Work with Maven packages programmatically using the REST APIs for VSTS.
ms.assetid:
ms.manager: andrusj
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 02/10/2017
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
---
# Maven

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

## Get version list of the package

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}?api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "groupId": "org.springframework",
  "artifactId": "spring-core",
  "artifactMetadata": {
    "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/maven-metadata.xml"
  },
  "versions": {
    "5.0.0.M1": {
      "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1"
    },
    "5.0.0.M2": {
      "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M2"
    },
    "5.0.0.M3": {
      "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M3"
    },
    "5.0.0.M4": {
      "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M4"
    }
  }
}
```


## Get package info

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}?api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "groupId": "org.springframework",
  "artifactId": "spring-core",
  "version": "5.0.0.M1",
  "versionsIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core"
  },
  "artifactIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1"
  },
  "artifactMetadata": {
    "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/maven-metadata.xml"
  },
  "files": {
    "spring-core-5.0.0.M1.pom": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom"
    },
    "spring-core-5.0.0.M1.pom.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.md5"
    },
    "spring-core-5.0.0.M1.pom.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.sha1"
    },
    "spring-core-5.0.0.M1-javadoc.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar"
    },
    "spring-core-5.0.0.M1-javadoc.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar.md5"
    },
    "spring-core-5.0.0.M1-javadoc.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar.sha1"
    },
    "spring-core-5.0.0.M1-sources.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar"
    },
    "spring-core-5.0.0.M1-sources.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar.md5"
    },
    "spring-core-5.0.0.M1-sources.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar.sha1"
    },
    "spring-core-5.0.0.M1.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar"
    },
    "spring-core-5.0.0.M1.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar.md5"
    },
    "spring-core-5.0.0.M1.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar.sha1"
    }
  }
}
```


## Verify package file 

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| fileName              | string  |           | Name of the file to verify.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}/{fileName}?api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "groupId": "org.springframework",
  "artifactId": "spring-core",
  "version": "5.0.0.M1",
  "versionsIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core"
  },
  "artifactIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1"
  },
  "artifactMetadata": {
    "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/maven-metadata.xml"
  },
  "requestedFile": {
    "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom"
  },
  "files": {
    "spring-core-5.0.0.M1.pom": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom"
    },
    "spring-core-5.0.0.M1.pom.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.md5"
    },
    "spring-core-5.0.0.M1.pom.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.sha1"
    },
    "spring-core-5.0.0.M1-javadoc.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar"
    },
    "spring-core-5.0.0.M1-javadoc.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar.md5"
    },
    "spring-core-5.0.0.M1-javadoc.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-javadoc.jar.sha1"
    },
    "spring-core-5.0.0.M1-sources.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar"
    },
    "spring-core-5.0.0.M1-sources.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar.md5"
    },
    "spring-core-5.0.0.M1-sources.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1-sources.jar.sha1"
    },
    "spring-core-5.0.0.M1.jar": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar"
    },
    "spring-core-5.0.0.M1.jar.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar.md5"
    },
    "spring-core-5.0.0.M1.jar.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.jar.sha1"
    }
  }
}
```


## Get package info with POM metadata

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feed                  | string  |           | Name or ID of the feed.
| groupId               | string  |           | Group Id of the package
| artifactId            | string  |           | Artifact Id of the package.
| version               | string  |           | Version of the package.
| includePom            | bool    |           | Indicates if pom metadata should be included in response or not.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/_apis/packaging/feeds/{feed}/maven/{groupId}/{artifactId}/{version}?includePom=true&api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1?includePom=true&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "groupId": "org.springframework",
  "artifactId": "spring-core",
  "version": "5.0.0.M1",
  "versionsIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core"
  },
  "artifactIndex": {
    "href": "https://mytfsserver/DefaultCollection/_apis/packaging/feeds/sample_maven_feed/maven/org.springframework/spring-core/5.0.0.M1"
  },
  "artifactMetadata": {
    "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/maven-metadata.xml"
  },
  "files": {
    "spring-core-5.0.0.M1.pom": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom"
    },
    "spring-core-5.0.0.M1.pom.md5": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.md5"
    },
    "spring-core-5.0.0.M1.pom.sha1": {
      "href": "https://mytfsserver/DefaultCollection/_packaging/sample_maven_feed/maven/v1/org.springframework/spring-core/5.0.0.M1/spring-core-5.0.0.M1.pom.sha1"
    }
  },
  "pom": {
    "modelVersion": "4.0.0",
    "description": "Spring Core",
    "name": "Spring Core",
    "url": "https://github.com/spring-projects/spring-framework",
    "dependencies": [
      {
        "scope": "compile",
        "optional": false,
        "groupId": "commons-logging",
        "artifactId": "commons-logging",
        "version": "1.2"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "io.netty",
        "artifactId": "netty-buffer",
        "version": "4.1.4.Final"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "io.projectreactor",
        "artifactId": "reactor-core",
        "version": "3.0.0.RC1"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "io.reactivex",
        "artifactId": "rxjava",
        "version": "1.1.8"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "net.sf.jopt-simple",
        "artifactId": "jopt-simple",
        "version": "5.0.2"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "org.aspectj",
        "artifactId": "aspectjweaver",
        "version": "1.9.0.BETA-5"
      },
      {
        "scope": "compile",
        "optional": true,
        "groupId": "org.reactivestreams",
        "artifactId": "reactive-streams",
        "version": "1.0.0"
      }
    ],
    "organization": {
      "url": "http://projects.spring.io/spring-framework",
      "name": "Spring IO"
    },
    "scm": {
      "connection": "scm:git:git://github.com/spring-projects/spring-framework",
      "developerConnection": "scm:git:git://github.com/spring-projects/spring-framework",
      "url": "https://github.com/spring-projects/spring-framework"
    },
    "issueManagement": {
      "url": "https://jira.springsource.org/browse/SPR",
      "system": "Jira"
    },
    "licenses": [
      {
        "distribution": "repo",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.txt",
        "name": "The Apache Software License, Version 2.0"
      }
    ],
    "modules": [],
    "contributors": [],
    "developers": [
      {
        "id": "jhoeller",
        "name": "Juergen Hoeller",
        "email": "jhoeller@pivotal.io",
        "roles": []
      }
    ],
    "mailingLists": [],
    "properties": {},
    "prerequisites": {},
    "groupId": "org.springframework",
    "artifactId": "spring-core",
    "version": "5.0.0.M1"
  }
}
```

