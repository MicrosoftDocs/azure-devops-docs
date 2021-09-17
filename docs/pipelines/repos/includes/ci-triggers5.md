---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### Using the trigger type in conditions

It is a common scenario to run different steps, jobs, or stages in your pipeline depending on the type of trigger that started the run. You can do this using the system variable `Build.Reason`. For example, add the following condition to your step, job, or stage to exclude it from PR validations.

`condition: and(succeeded(), ne(variables['Build.Reason'], 'PullRequest'))`

### Behavior of triggers when new branches are created

It is common to configure multiple pipelines for the same repository. For instance, you may have one pipeline to build the docs for your app and another to build the source code. You may configure CI triggers with appropriate branch filters and path filters in each of these pipelines. For instance, you may want one pipeline to trigger when you push an update to the `docs` folder, and another one to trigger when you push an update to your application code. In these cases, you need to understand how the pipelines are triggered when a new branch is created.

Here is the behavior when you push a new branch (that matches the branch filters) to your repository:

- If your pipeline has path filters, it will be triggered only if the new branch has changes to files that match that path filter.
- If your pipeline does not have path filters, it will be triggered even if there are no changes in the new branch.

### Wildcards

When specifying a branch or tag, you may use an exact name or a wildcard.
Wildcards patterns allow `*` to match zero or more characters and `?` to match a single character.

* If you start your pattern with `*` in a YAML pipeline, you must wrap the pattern in quotes, like `"*-releases"`.
* For branches, tags and wildcards a wildcard may appear anywhere in the pattern.

```yaml
trigger:
  branches:
    include:
    - master
    - releases/*
    - feature/*
    exclude:
    - releases/old*
    - feature/*-working
  paths:
    include:
    - 'docs/*.md'
    exclude:
    - 'docs/*' # same as 'docs/'
```
