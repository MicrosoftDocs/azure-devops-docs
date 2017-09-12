---
title: Change your deployment configuration for Team Foundation Server
description: Change your deployment configuration for Team Foundation Server
ms.assetid: 9dfd7be8-b40e-401f-82fc-e3c3d8fdbd87
ms.manager: douge
ms.author: elbatk
ms.date: 08/18/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Change your deployment configuration for Team Foundation Server

**TFS 2015** > **TFS 2013**

After you have configured Visual Studio Team Foundation Server (TFS) and
Microsoft Project Server to support data synchronization, you might need
to perform additional administrative tasks when you change your
deployment. For example, you might need to remove, re-register, or
re-map a component before or after you move or delete a team project, a
team project collection, or an application-tier server. Before you
change your deployment or perform maintenance operations, you should
consider the impact that these operations have on the synchronization
process.

Review the following notes and resources before you change a deployment
where you have integrated TFS and Project Server.

**In this topic:**

-   [Delete components](#deleting)

-   [Move or split a project collection](#tpc)

-   [Move Team Foundation Server to a new machine or environment](#tfs)

-   [Upgrade from Project Server 2007 to Project Server 2010](#upgrading)

<a name="deleting"></a>
## Delete components

Whenever you delete a mapped component, you should unmap it and review
the following guidelines:

-   **Delete an enterprise project plan or a team
    project**. Before you delete a mapped project plan or a mapped
    team project, you must first unmap all project plans that are mapped
    to the team project. For more information, see [Manage the
    association of enterprise projects to team
    projects](https://msdn.microsoft.com/en-us/library/gg412651(v=vs.120).aspx).

-   **Delete an instance of Project Web Access or
    Project Web App (PWA)**. Before you delete an instance of PWA,
    you must first remove all associations of team project collections
    that are mapped to the instance and then unregister it. For more
    information, see [Remove a component from participating in
    data
    synchronization](https://msdn.microsoft.com/en-us/library/gg412644(v=vs.120).aspx)
    and [Remove an Instance of PWA from Participating in
    Synchronization](https://msdn.microsoft.com/en-us/library/gg412644(v=vs.120).aspx#removepwa).

-   **Delete a team project collection**. Before
    you delete a mapped collection, you should unmap it by following the
    procedure in [Remove a component from participating in data
    synchronization](https://msdn.microsoft.com/en-us/library/gg412644(v=vs.120).aspx).

    > [!NOTE]
    > If you delete not only a mapped project collection but also all
    > instances of PWA that were mapped to it, you will remove all mappings of
    > work items that have been synchronized. However, the instance of PWA
    > that is registered to Team Foundation Server remains registered.


<a name="tpc"></a>
## Move or split a project collection

To move a mapped collection to another instance of TFS and continue to
synchronize data on the new application-tier server, you must perform
several steps, based on the following choices:

-   All collections move to a different instance of TFS but remain
    mapped to the same instance of PWA. A recommended practice is to
    move or split all collections that are mapped to the same instance
    of PWA at the same time.

-   Some collections move to a different instance of TFS, but some
    collections remain with the same instance. In this case, you must
    unmap the collections that are split and remap them to the same or
    to a different instance of PWA that will then be registered with the
    second instance of TFS. An instance of PWA can be registered to only
    one instance of TFS.

To move all mapped collections to a different instance of TFS:

  1.  Move or split the collection.

      For more information, see [Manage team project collections](manage-team-project-collections.md).

  2.  Grant required permissions to the service account for the second
      instance of Team Foundation Server.

      For more information, see [Assign permissions to support
      TFS-Project Server
      integration](https://msdn.microsoft.com/en-us/library/gg412653(v=vs.120).aspx).

  3.  Add the **Administer Project Server
      integration** permission to those accounts that will run the
      ```TfsAdmin ProjectServer``` command-line tool for the second project collection.

  4.  Add the accounts of users who will configure and register instances
      of PWA to the **Team Foundation
      Administrators** group for the second project collection.

  5.  Register the instance of PWA with the second application-tier server
      by using the **/RegisterPWA** and ```/force``` command options.

  6.  Wait until the synchronization engine runs through one cycle of
      updates and updates the instance of PWA.

  7.  Unregister the instance of PWA from the first application-tier
      server by using the **/UnRegisterPWA** command option.

To move some collections to a different instance of TFS and a different instance of PWA:

  1.  Use the **/UnmapPwaFromCollection** command option with the
      **/force** switch to unmap each collection that you are moving.

      > [!WARNING]
      > By using the **/force** switch, you break all associations between
      > enterprise project plans and team projects that are defined for
      > the collection.

  2.  Move or split the collection.

      For more information, see [Manage team project collections](manage-team-project-collections.md).

  3.  Assign all required permissions.

      For more information, see [Assign permissions to support
      TFS-Project Server
      integration](https://msdn.microsoft.com/en-us/library/gg412653(v=vs.120).aspx).

  4.  Use the **/RegisterPWA** command option to register the second
      instance of PWA with the second application-tier server.

  5.  Use the **/MapPwaToCollection** command option to map each
      collection that you moved to the second instance of PWA.

  6.  Use the **/MapPlapToTeamProject** command option to map each plan to
      the team project that was moved to a different collection.

For more information, see the following topics:

-   [Move or clone Team Foundation Server (hardware move)](move-clone-hardware.md)
    

-   [Move Team Foundation Server from one environment to another](move-across-domains.md)
    

-   [Register an instance of PWA to TFS](https://msdn.microsoft.com/en-us/library/gg412639(v=vs.120).aspx)
    

-   [Map a team project collection to an instance of PWA](https://msdn.microsoft.com/en-us/library/gg412654(v=vs.120).aspx)
    

-   [Manage mappings between an enterprise project and a team
    project](https://msdn.microsoft.com/en-us/library/gg412638(v=vs.120).aspx)


<a name="tfs"></a>
## Move a Team Foundation Server to a new machine or environment

You must re-register each instance of PWA that is registered with the
current machine.

To move an instance of Team Foundation Server to which an instance of PWA is mapped:

  1.  Move the instance of Team Foundation Server.

      For more information, see [Move or clone Team Foundation Server (hardware move)](move-clone-hardware.md).

  2.  Assign all required permissions.

      For more information, see [Assign permissions to support
      TFS-Project Server
      integration](https://msdn.microsoft.com/en-us/library/gg412653(v=vs.120).aspx).

  3.  Use the **/RegisterPWA** command option to register the instance of
      PWA with the second application-tier server.

  4.  Wait until the synchronization engine runs through one cycle of
      updates and updates the instance of PWA.

  5.  Use the **/UnRegisterPWA** command option to unregister the instance
      of PWA from the first application-tier server.

> [!NOTE]
> You must specify the **/force** switch when you move the project
> collection to a different instance of Team Foundation Server. If the
> instance identifier has not changed, you do not have to specify the
> **/force** switch.

<a name="upgrading"></a>
## Upgrade from Project Server 2007 to Project Server 2010

If you have an instance of Project Web Access that is registered to TFS
and the synchronization process is running for a collection, you must
perform the following procedures before you upgrade the instance from
Project Server 2007 to Project Server 2010:

  1.  Perform the steps on the following page of the Microsoft website:
      [Database-attach full upgrade to Project Server
      2010](http://go.microsoft.com/fwlink/?LinkId=211859)

  2.  To enable the synchronization after the upgrade, open a Command
      Prompt window where either Visual Studio or Team Explorer is
      installed and enter:

    ```cd %programfiles(x86)%%\Microsoft Visual Studio 12.0\Common7\IDE```

    On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles**.

  3.  Enter the following command:

    ```TfsAdmin ProjectServer /RegisterPwa /tfs:TfsURL /previousPWA:URLFor2007 /PWA:URLFor2010```

    For more information, see [Register an instance of PWA to
    TFS](https://msdn.microsoft.com/en-us/library/gg412639(v=vs.120).aspx).
