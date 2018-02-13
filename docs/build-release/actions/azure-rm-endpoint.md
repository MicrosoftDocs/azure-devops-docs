---
title: How to troubleshoot Azure Resource Manager service endpoints in VSTS and TFS
description: Troubleshoot Azure Resource Manager service endpoints in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: B43E78DE-5D73-4303-981F-FB86D46F0CAE
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---
# How to: Troubleshoot Azure Resource Manager service endpoints

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

This topic will help you resolve issues you may encounter when creating
a connection to Microsoft Azure using an **Azure Resource Manager** service endpoint.

<a name="whathappens"></a>
## What happens when you create a Resource Manager service endpoint?

You open the **Add Azure Resource Manager Service Endpoint** dialog,
provide a connection name, and select a subscription from drop-down
list of your subscriptions.  

![The Add Azure Resource Manager Service Endpoint dialog](_img/azure-rm-endpoint/azure-rm-endpoint-01.png)

When you choose **OK**, the system:

1. Connects to the Azure Active Directory (AAD) tenant for to the selected subscription
1. Creates an application in AAD on behalf of the user
1. After the application has been successfully created, assigns the application as a contributor to the selected subscription
1. Creates an Azure Resource Manager service endpoint using this application's details

<a name="troubleshoot"></a>
## How to troubleshoot errors that may occur

Errors that may occur when the system attempts to create the service endpoint include:

* [Insufficient privileges to complete the operation](#privileges)
* [Failed to obtain an access token](#sessionexpired)
* [A valid refresh token was not found](#sessionexpired)
* [Failed to assign contributor role](#contributorrole)

<a name="privileges"></a>
### Insufficient privileges to complete the operation

This typically occurs when the system attempts to create an
application in AAD on your behalf.

![Insufficient privileges to complete the operation error](_img/azure-rm-endpoint/azure-rm-endpoint-02.png)

This is a permission issue that may be due to the following causes:

* [The user has only guest permission in the directory](#guestonly)
* [The user is not authorized to add applications in the directory](#notauthtoadd)

<a name="guestonly"></a>
#### The user has only guest permission in the directory

The best approach to resolve this issue, while granting only the minimum additional permissions
to the user, is to increase the Guest user permissions as follows:

1. Sign into the Azure portal at [https://portal.azure.com](https://portal.azure.com) using an Administrator account.

1. Choose **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section choose **Users**.

1. Choose **User settings**.

1. In the **External users** section, change **Guest user permissions are limited** to **No**.

Alternatively, if you are prepared to give the user additional (administrator-level) permissions,
you can make the user a member of the **Global administrator** role as follows:

1. Sign into the Azure portal at [https://portal.azure.com](https://portal.azure.com) using an Administrator account.

1. Choose **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section choose **Users**.
   
1. Use the search box to filter the list and then choose the user you want to manage.

1. In the **MANAGE** section choose **Directory role** and change the role to **Global administrator**.

1. Save the change.

It typically takes 15 to 20 minutes to apply the changes globally.
After this period has elapsed, the user can retry creating the service endpoint.

<a name="notauthtoadd"></a>
#### The user is not authorized to add applications in the directory

You must have permission to add integrated applications in the directory.
The directory administrator has permission to change this setting, as follows:

1. Choose **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section choose **Users**.

1. Choose **User settings**.

1. In the **App registrations** section, change **Users can register applications** to **Yes**.

<a name="sessionexpired"></a>
### Failed to obtain an access token or A valid refresh token was not found

These errors typically occur when your session has expired.

![Errors when the users session has expired](_img/azure-rm-endpoint/azure-rm-endpoint-08.png)

To resolve these issues:

* Sign out of VSTS or TFS.
* Open an InPrivate or incognito browser window and navigate to [https://www.visualstudio.com/team-services/](https://www.visualstudio.com/team-services/).
* If you are prompted to sign out, do so.
* Sign in using the appropriate credentials.
* Choose the account you want to use from the list.
* Select the project you want to add the service endpoint to.
* Create the service endpoint you need by opening the **Settings** page, selecting the **Services** tab,
  choosing **New service endpoint**, and selecting **Azure Resource Manager**.

<a name="contributorrole"></a>
### Failed to assign Contributor role

This error typically occurs when you do not have **Write** permission
for the selected Azure subscription when the system attempts to assign
the **Contributor** role.

![Failed to assign Contributor role error](_img/azure-rm-endpoint/azure-rm-endpoint-09.png)

To resolve this issue, ask the subscription administrator
to configure an **Admin Access** role for your identity.

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
