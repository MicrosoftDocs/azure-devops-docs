---
title: Environment templates in Release Management
description: Understand environment templates in Release Management for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: BE9E2883-5CEB-4A91-A038-CB45B728A0C4
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Environment templates in Release Management

[!INCLUDE [version-rm-dev14](../_shared/version-rm-dev14.md)]

When you start a new release definition, or when you add an environment to
an existing release definition, you can choose from a list of templates for
each environment. These templates pre-populate the environment with the
appropriate tasks and settings, which can considerably reduce the time and
effort required to create a release definition.

A set of pre-defined environment templates are available in
VSTS and in each version of TFS. You can use these templates
when you create a new release definition or add a new
environment to a definition. You can also create your own custom
environment templates from an environment you have populated and
configured.

>Templates do not have any additional security capability.
There is no way to restrict the use of a template to specific
users. All templates, pre-defined and custom, are available for
use by all users who have permission to create release definitions.

When an environment is created from a template, the tasks in the template are copied over to the environment.
Any further updates to the template have no impact on existing environments.
If you want a way to easily insert a number of environments into release definitions
(perhaps to keep the definitions consistent) and to enable these environments to all be updated
in one operation, use [task groups](../library/task-groups.md) instead of environment templates.

## Q&A

### Can I export templates or share them with other accounts or projects?

Custom templates that you create are scoped to the project that you created them in.
Templates cannot be exported or shared with another project, collection, server, or account.
You can, however, export a release definition and import it into another project, collection, server, or account.
Then you can re-create the template for use in that location.

### Can I publish or consume new templates through extensions in VS Marketplace?

Yes. See [Adding release management environment templates to your VSS extension](https://blogs.msdn.microsoft.com/divman/2017/05/30/adding-release-management-environment-templates-to-your-vss-extension/) for more details.

### How do I delete a custom environment template?

You can delete an existing custom template from the list of templates that is displayed when you add a new environment to our definition. 

![Delete custom template](_img/delete-custom-template.png)

### How do I update a custom environment template?

To update an environment template, delete the existing template in a release definition and then save the environment as a template with the same name. 

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
