---
ms.topic: include
---

### Supporting service account based authentication to connect to AKS

Previously, when configuring Azure Pipelines from Deployment Center workflow of AKS, we were using Azure Resource Manager Connection. This connection had access to the entire cluster and not the namespace for which the pipeline was configured.  In this sprint, we have moved our pipelines to start using Service Account based authentication to connect to the cluster which will have access to that namespace only.

### Markdown file preview and a more discoverable file diff experience

You can now view a preview of what a markdown file would look like using the new **Preview** button.  To help users discover that they can view the full contents of a file in the diffing experience, we have added the **View** button.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/158_10.png)