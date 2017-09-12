---
title: Examples of simple Topology for Team Foundation Server
description: Examples of simple Topology for Team Foundation Server
ms.assetid: 435e67a7-79df-4029-b5c3-9bba515b6533
ms.manager: douge
ms.author: elbatk
ms.date: 08/16/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Examples of Simple Topology for Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can install and configure Visual Studio Team Foundation Server in
several topology configurations. Generally speaking, the simpler the
topology, the more easily you will be able to maintain a deployment of
Team Foundation Server. You should deploy the simplest topology that
meets your business needs. This topic describes two fairly simple
topologies, in which the server and clients are all contained within a
single workgroup or domain.

## Simplest Topology

The simplest server topology will use the fewest number of physical
servers to host the components that compose the logical tiers of Team
Foundation. The following illustration shows the simplest topology:

![Simple Server Topology](../_img/simplest-topo.png)

In this example, all server components are deployed on a single physical
server. You can access them from client computers in the same domain or
workgroup. This example is designed for a small product development team
that has fewer than 50 users.

In this configuration, you can install the computer that is running Team
Foundation Build and the team's test components on either the single
server, which is running Team Foundation Server, or on one or more
client computers. This configuration is best suited to small development
organizations or pilot projects within larger organizations.

## Simple Topology

The simple server topology will also use the fewest number of physical
servers to host the components that compose the logical tiers of Team
Foundation. However, this topology also recognizes the additional load
that building and testing software places on processing power. The
following illustration shows a simple topology for Team Foundation
Server:

![Simple VSTS topology](../_img/a-simple-topo.png)

In this example, the Web services and databases for Team Foundation are
hosted on the same physical server, but the build services are installed
on a separate computer. You can access Team Foundation Server from
client computers in the same domain or workgroup. This example is
designed for a small product development team that has fewer than 100
users.

In this configuration, you install the computer that is running Team
Foundation Build and the team's test components on a computer that is
dedicated to that purpose. This configuration is best suited to smaller
development projects where builds and testing demands are regular and
performance is a greater concern.

## See Also

[Examples of Moderate Topology](examples-moderate-topo.md)

[Examples of Complex Topology](examples-complex-topo.md)

[Team Foundation Server Architecture](architecture.md)
