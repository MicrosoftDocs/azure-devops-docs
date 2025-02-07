---
ms.subservice: azure-devops-service-hooks
ms.custom: devx-track-jenkins
ms.topic: conceptual
title: Create a service hook for Jenkins
description: See how to set up a service hook subscription to trigger a Jenkins build for your Azure DevOps project.
ms.assetid: 3e9cf797-092f-48da-a515-e4d0cc93c4a1
monikerRange: '<= azure-devops'
ms.date: 08/13/2024
---

# Create a service hook for Jenkins

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to set up a service hook for your Azure DevOps project to trigger a Jenkins build. If you use Jenkins to build your apps, you can store your code in a Git repository and use Jenkins for your continuous integration builds. You can trigger a Jenkins build when you push code to your Git repository or when you check in code to a [Team Foundation Version Control (TFVC)](../../repos/tfvc/what-is-tfvc.md) repository.

You can build part of your app in Azure Pipelines and part in Jenkins. You can trigger a Jenkins build when your Azure Pipelines build is completed so that you use both systems to build your app.

Azure DevOps doesn't charge for setting up service hooks or integrating with external services, and Jenkins is fully open-source and free to use.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| - Member of the [Project Collection Administrators group](../../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.<br>- **Edit subscriptions** and **View subscriptions** permissions set to **Allow**. By default, only project administrators have these permissions. To grant the permissions to other users, you can use the command-line tool or the [Security](/rest/api/azure/devops/security/?view=azure-devops-rest-6.0&preserve-view=true) REST API.|
|**Tools**|[Jenkins](https://jenkins-ci.org/) server. If you set up Jenkins on-premises, [enable HTTPS](https://jenkins.io/doc/book/installing/#configuring-http). In your *jenkins.xml* configuration file, set the [hudson.plugins.git.GitStatus.NOTIFY_COMMIT_ACCESS_CONTROL system property](https://plugins.jenkins.io/git/#plugin-content-push-notification-from-repository) to `disabled` by adding or updating the following line in the `<arguments>` tag, before the `-jar` parameter:<br><br>`-Dhudson.plugins.git.GitStatus.NOTIFY_COMMIT_ACCESS_CONTROL=disabled`.  |

## Create a Jenkins service hook

Do the following steps to create a Jenkins service hook.

### Set up a Jenkins build

1. In Jenkins, create a new item.

   :::image type="content" source="./media/jenkins/new-item.png" alt-text="Screenshot showing New item link in Jenkins.":::

1. Select the type of build that's appropriate for your project.

   :::image type="content" source="./media/jenkins/my-build.png" alt-text="Screenshot showing Build name and type in Jenkins.":::

1. Enter the URL for your Git repository.

   :::image type="content" source="./media/jenkins/source-code-management-settings.png" alt-text="Screenshot showing Source code management settings in Jenkins with Git selected.":::

### Set up the Jenkins service hook

1. In your Azure DevOps project, go to **Project settings** > **Service hooks** at `https://<organization-name>/<project-name>/_settings/serviceHooks`.

   :::image type="content" source="./media/add-devops-service-hook-new-name.png" alt-text="Screenshot of the Service hooks choice in Project settings.":::

1. On the **Service Hooks** page, select the **+** icon or **Create subscription**.

   :::image type="content" source="./media/add-service-hook.png" alt-text="Screenshot of selecting Create subscription on the Service Hooks page.":::

1. On the **Service** screen, select **Jenkins**, and then select **Next**.

   :::image type="content" source="./media/jenkins/target-service.png" alt-text="Screenshot of selecting Jenkins on the Service page.":::

1. On the **Trigger** screen, select and configure the Azure DevOps event you want to trigger a Jenkins build, and then select **Next**.

   :::image type="content" source="./media/jenkins/configure-event.png" alt-text="Screenshot of selecting and configuring the trigger event.":::

1. On the **Action** screen, configure the Jenkins action to take when the event occurs.

1. Select **Test** to test the service hook, and **Finish** to finish the configuration.

Now when the event occurs in the Git repository, it triggers a Jenkins build.

> [!TIP]
> You can also create a service hook subscription programmatically with REST APIs. For more information, see [Create a service hook subscription programmatically](../create-subscription.md).

## Related content

- [Integrate with service hooks](../overview.md)
- [Service hooks events](../events.md)
- [Create a service hook subscription programmatically](../create-subscription.md)
