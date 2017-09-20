---
title: Configure an SMTP server and customize email for alerts and feedback requests in TFS
description: Configure an SMTP server and customize email for alerts and feedback requests in TFS
ms.assetid: f49fce23-2808-450b-a2de-7d5a83401d30
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Configure an SMTP server and customize email for alerts and feedback requests in TFS

**TFS 2015** | **TFS 2013**

For feedback requests and alerts to work, you must configure an SMTP server for TFS.

## Configure an SMTP server for TFS

1.  If you aren't an administrator of TFS, [get those permissions](../add-administrator-tfs.md).

2.  Open the Team Foundation Administration Console from the **Start** menu. Or, at a command prompt, type **TFSMgmt.exe** (located in *Drive*:\\%programfiles%\\TFS 12.0\\Tools).

3.  Open email alert settings.

    ![Open email alerts for the application tier](_img/ic724655.png)

4.  Enable email alerts and specify the SMTP Server and the email address to use for sending emails.

    ![Enable and configure SMTP server](_img/ic724656.png)

    If your deployment is configured to use SSL, then select the second checkbox and enter a certificate. See also [Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server](setup-secure-sockets-layer.md).

    >**Troubleshooting tips:**  
    ><ul><li>Make sure your firewall is configured to allow communications between TFS and your SMTP server.</li>  
    ><li>Your SMTP server must be configured to allow anonymous senders to send email, or you must have previously created an account specifically to use as the email account for alerts. If you specify the TFS service account (<em>TFSService</em>), this account must be a domain account with permission to send email.</li>  
    ><li>If you used a system account (such as Network Service) as the TFS service account, leave the User and Password fields blank for the advanced configuration, and make sure that your SMTP server is configured to allow anonymous users to send mail. Alternately, specify an email-enabled domain account to use as the email account for alerts. If you do not, email notifications will not be sent.</li></ul>

5.  To verify your configuration, open alerts management. You might need to refresh your browser to see this option if you just recently enabled an SMTP server.

    ![Manage individual alerts from Team Web Access](_img/ic726730.png)

    Create an alert and then perform an action that will trigger the alert. You can [set alerts for yourself or for a team](../../work/track/alerts-and-notifications.md).

This task supports [Request and review feedback](../../feedback/get-feedback.md) and [Set alerts, get notified when changes occur](../../work/track/alerts-and-notifications.md).


## Customize the format for TFS email alerts

You can customize the format of email notifications, or alerts, that [team members subscribe to](../../work/track/alerts-and-notifications.md). These notifications are sent when changes occur to work items, code reviews, source control files, and builds. To customize their format, you can modify their associated XSL transform files. In addition, your team members can configure *project alerts* in Team Web Access (TWA) for various notifications and specify whether they want HTML or plain text as the format.

Alert format transform files are stored in the following folder on the application-tier server:

*Drive*:\\%programfiles%\\TFS 12.0\\Application Tier\\TFSJobAgent\\Transforms\\1033

You can use an XML editor, such as Visual Studio, to change any of the transform files. The following table lists the two transform files used when email notifications are sent for work item change events:

| Transform file | Format |
| --- | --- |
| WorkItemChangedEvent.xsl | HTML e-mail |
| WorkItemChangedEvent.plaintextXsl | plaintext e-mail |

The event service uses the .xsl and the plaintextXsl files to transform the XML data for an event into an e-mail message. Edit the .xsl file to get a different format for the email notification. For HTML-formatted email messages, the core layout for all events is stored in TeamFoundation.xsl. You should make a backup copy of any files that you want to change, and then test your changes. After you have made your changes, TFS will use the modified transform the next time it generates a notification for an event.�

> [!NOTE]
> The content of the emails that are issued is automatically generated from the TeamFoundation.xsl file and the above WorkItemChangedEvent xsl files. Modifying the TeamFoundation.xsl file is not recommended. If you do modify the contents of this file, you must thoroughly test your modifications. Incorrect modifications of this file can result in the failure of TFS email alerts and cause you to be unable to view work items, changesets, or files in a Web browser.

**Requirements**:

To perform these procedures, you must be a member of the **Administrators** security group on the Team Foundation application-tier server.

**To modify the alert format for work item changes**:

1.  On your application-tier server, open this folder:

    *Drive*:\\%programfiles%\\TFS 12.0\\Application Tier\\TFSJobAgent\\Transforms\\1033

2.  Open WorkItemChangedEvent.xsl in Notepad or some other text editor.

3.  Edit the file to show the message that you want in the notification email.

    > [!NOTE]
    > You should make similar changes to the WorkItemChangedEvent.plaintextXsl for any users who have requested plaintext messages.
    
4.  Save the WorkItemChangedEvent.xsl file.



## See Also

 [Set alerts, get notified when changes occur](../../work/track/alerts-and-notifications.md)  

 [Support alerts and feedback requests with an SMTP server](setup-customize-alerts.md)  

 [Configure resources to support team projects](config-tfs-resources.md)
 
 [You can also use TFSConfig ConfigureMail](../command-line/tfsconfig-cmd.md#configure-email)  
