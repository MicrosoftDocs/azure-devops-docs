---
title: Troubleshoot connecting to a team project 
titleSuffix: VSTS & TFS  
description: Steps to resolve connection issues with Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-security
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 02/26/2018
monikerRange: '>= tfs-2013'
---

# Troubleshoot connecting to a team project in VSTS or TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

::: moniker range="vsts"

## Troubleshoot VSTS connectivity

As a first step in resolving connectivity issues with VSTS, do the following:

1. Sign out of your browser. You can do this by clicking this [Visual Studio Sign out link](http://aka.ms/VsSignout).

2. Delete your browser cookies. For most browsers, you can do this by entering CTRL+SHIFT+DEL.

3. Open Internet Explorer (IE) and delete cookies. Visual Studio IDE uses IE cookies.

4. Close all browsers and the Visual Studio IDE.

5. Use a private browser session to retry the connection to VSTS. If the issue is with VS IDE, remove the connection to VSTS after doing above and then re-add it.

## Troubleshoot signing in to VSTS

There are two types of identities that can sign in to VSTS - Microsoft accounts (MSA) and Azure Active Directory (Azure AD) accounts. Depending on your account, you may experience one of the following errors.

> 401 - Not Authorized

> [!div class="mx-imgBorder"]
![troubleshoot VSTS connection 401 error1](_img/troubleshoot-connection/401_notauthorized.PNG)

The most common error page encountered is the "401 Not Authorized" error. This occurs when your identity does not have permission to enter a VSTS account. Common reasons for this include:

* Your identity is not a member of the target VSTS account
* Your identity has an invalid or missing license assignment

If you believe you are a member of the account but are blocked by this error page, feel free to [contact customer support](https://support.microsoft.com/en-us).

**Scenario 1:** Your work or school Azure AD account does not have access, but your personal MSA account does.

> 401 - Work or school, or Personal account

> [!div class="mx-imgBorder"]
![troubleshoot VSTS connection 401 error2](_img/troubleshoot-connection/401_AAD.png)

This is a highly specific 401 error case, where there exists both a personal Microsoft account (MSA) and a work or school account (Azure AD) with the same sign in address. You have signed in with your work or school account, but your personal account is the identity that has access to the VSTS account.

**Mitigation**

In some cases, you may be unaware that you have two identities with the same sign in address. The work or school AAD account may have been made by an administrator upon onboarding to Office365 or Azure AD. You must choose the "sign in with your personal MSA account" link to sign you out of your current work or school AAD account and begin a sign in prompt as the personal MSA. After authentication, you should have access to the VSTS account.

[!Tip] To never see this prompt again, you can rename your Microsoft account. This will make it so that only one identity (your work or school account or Azure AD account) for your sign in address.

**Scenario 2:** Your personal MSA does not have access, but your Azure AD account does. This is the opposite version of the above 401 error page. In this case the personal account (Microsoft account identity) did not have access to the VSTS account and the work or school account (Azure AD identity) does. The same guidance above applies, only in reverse.

> 401 - Work or school, or Personal account

> [!div class="mx-imgBorder"]
![troubleshoot VSTS connection 401 error3](_img/troubleshoot-connection/401_MSA.png)

Still unable to access your account?
In cases where you enter your credentials correctly, but instead of redirecting to your VSTS account you are redirected back to the original sign in page, we recommend clearing all cookies and re-attempting to sign in. If that does not fix the issue, please contact customer support.

::: moniker-end

::: moniker range=">= tfs-2013 < vsts"

## Troubleshoot TFS connectivity

Here's a list of the most frequently encountered connection problems and what to do about them. Start at the top and follow it in the order indicated.

1. Verify that you have required permissions.

    If the errors that you receive indicate read-only or blocked actions, you might not have permission to act on the data.

2. Verify that your computer is connected to the network and can access network resources.

3. Verify that TFS hasn't been taken offline. Talk with your TFS administrator.

4. Verify whether your team project has been moved to another team project collection in TFS. If it has been moved, you must create a connection to the new server name.

For additional troubleshooting tips, see [TF31002: Unable to connect to this Team Foundation Server](../work/customize/reference/error/tf31002-unable-connect-tfs.md).

::: moniker-end

::: moniker range="vsts"

## Switch between different organizational accounts in VSTS

When you use two or more VSTS accounts that are linked to directory tenants, such as accounts that are created from the Microsoft Azure Portal, the sign-out function may not work as expected. For example, you can't switch between different organizational accounts to connect to multiple accounts that are linked to directory tenants.

When this problem occurs, a blank screen flashes several times followed by one of the error messages below after you connect to or add a new connection in "Connect to Team Foundation Server" dialog box:

> TF31003: Either you have not entered the necessary credentials, or your user account does not have permission to connect to the Team Foundation Server

> TF31002: Unable to connect to this Team foundation Server

To resolve this problem, apply Visual Studio 2013.2 or install a later version. Go to the [Visual Studio download website](http://visualstudio.microsoft.com/downloads).

For a workaround in which you delete your browser cookies, see the following support article, [You can't switch between different organizational accounts in Visual Studio Online](https://support.microsoft.com/en-us/help/2958966/you-can-t-switch-between-different-organizational-accounts-in-visual-s).

::: moniker-end

::: moniker range=">= tfs-2013 < vsts"

## Connect to a TFS with Secure Sockets Layer (SSL) configured

If you connect to a TFS instance that has SSL configured, then you'll need to install a certificate and clear the client cache. For details, see [Set up HTTPS with Secure Sockets Layer (SSL) for TFS, Configuring Client Computers](/tfs/server/admin/setup-secure-sockets-layer#config-client-computers). 

## Clear the cache on client computers

When the on-premises TFS configuration changes, such as when moving or splitting a project collection, you might have to clear the cache.

1. Log on to your client computer for Team Foundation by using the credentials of the user whose cache you want to clear.

2. Close any open instances of Visual Studio.

3. Open a browser, and browse to one of the following folders, depending on the operating system that is running on the client computer:

    - **Windows 10**
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\6.0\Cache

    - **Windows 8**
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\4.0\Cache  

    - **Windows Vista or Windows 7**
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\2.0\Cache

4. Delete the contents of the Cache directory, including all subfolders.
 
::: moniker-end
