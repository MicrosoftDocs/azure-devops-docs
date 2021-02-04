---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### Tags

In addition to specifying tags in the `branches` lists as covered in the previous section, you can directly specify tags to include or exclude:

```yaml
# specific tag
trigger:
  tags:
    include:
    - v2.*
    exclude:
    - v2.0
```

If you don't specify any tag triggers, then by default, tags will not trigger pipelines.

> [!IMPORTANT]
> If you specify tags in combination with branch filters, the trigger will fire if either the branch filter is satisfied or the tag filter is satisfied. For example, if a pushed tag satisfies the branch filter, the pipeline triggers even if the tag is excluded by the tag filter, because the push satisfied the branch filter.

