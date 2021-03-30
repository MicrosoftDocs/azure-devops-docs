---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 03/03/2021
ms.topic: include
---

### Approver details available in audit logs

You can now view the details about who approved your pipelines in the audit logs. We updated the 'Check Suite Completed' event to include this information. You can access the audit logs from **Organization Settings** -> **Auditing**.

### Change in process for obtaining free pipelines grant in public projects

Azure Pipelines has been offering free CI/CD to open source projects since September 2018. Because this amounts to giving away free compute, it has always been a target for abuse – especially crypto mining. Minimizing this abuse has always taken energy from the team. Over the past few months, the situation has gotten substantially worse, with a high percentage of new public projects in Azure DevOps being used for crypto mining and other activities we classify as abusive. In addition to taking an increasing amount of energy from the team, this puts our hosted agent pools under stress and degrades the experience of all our users – both open-source and paid.

To address this situation, new public projects created in Azure DevOps will no longer get the free grant of parallel jobs. As a result, you won’t be able to run pipelines when you create a new public project. However, you can request the free grant by sending an email to azpipelines-ossgrant@microsoft.com and providing the following details:

- Your name
- Azure DevOps organization for which you are requesting the free grant
- Links to the repositories that you plan to build
- Brief description of your project

For more information about parallel jobs and free grants, see [our documentation](/azure/devops/pipelines/licensing/concurrent-jobs?preserve-view=true&tabs=ms-hosted&view=azure-devops).