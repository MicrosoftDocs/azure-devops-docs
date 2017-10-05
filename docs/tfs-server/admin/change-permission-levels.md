---
title: Change permission levels in Team Foundation Server
description: Change permission levels in Team Foundation Server
ms.assetid: c8f12906-5965-4e24-b0fa-748c64524572
ms.manager: douge
ms.author: elbatk
ms.date: 10/05/2017
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Change individual user permissions in TFS

**TFS 2017** | **TFS 2015** | **TFS 2013**

As roles and responsibilities change in your team, you might need to
change the permission levels for individual team members, or for the
team as a whole. Permissions are different than access levels. If you're
just trying to give someone access to a product backlog or the provide
feedback features, you'll want to [change access levels](../../security/change-access-levels.md), not
permissions.

## A few things to know about permissions in TFS

There's a lot to learn about permissions, but here's some things you
should understand before you change any permissions in TFS:

-   Permissions **allow** or 
    **deny** users the ability to perform specific
    tasks, and are usually inherited from group membership.

-   A permission that is **not set** implicitly
    denies users the ability to perform tasks that require that
    permission, but allows membership in a group that does have that
    permission set to take precedence, also known as 
    **inherited allow** and 
    **inherited deny**.

-   For almost all permissions, **deny** trumps
    **allow**, so if a user belongs to two
    groups, and one of them has a specific permission set to 
    **deny**, that user will not be able to perform
    tasks that require that permission even if they belong to a group
    that has that permission set to **allow**.

-   Changing a permission for a group changes that permission for all
    users who are granted that permission through their membership in
    that group. In other words, depending on the size of the group, you
    might affect the ability of hundreds of users to do their jobs by
    changing just one permission. So make sure you understand the impact
    before you make a change. Two useful tricks for understanding the
    effects of change: The **member of** tab
    shows the groups that an individual user or group belongs to. You
    can also hover over an inherited permission, and a 
    **why?** icon will appear. If you choose it, a
    dialog box will open with more information.


## Change permissions for individual users

Alternatively, you might want to manage the permissions of individual
team members. This takes a little more work and is more time-consuming
to manage, but allows you a finer degree of control over who can do
what.

1.  Go to the security tab and change views so that you're looking at
    users, not groups.

2.  Choose the user whose permissions you want to change and change it.
    For example, let's say you want a particular user to have permission
    to delete the team project. Set that permission to 
    **allow**.

    ![Explicit permissions override inherited ones](_img/explicit-overrides-implicit.png)

    That **allow** will override the **not set** that exists for the team.

## Related Notes

* [View your own permissions](../../security/view-permissions.md)
* [Change permissions for the entire team](../../security/set-project-collection-level-permissions.md)
