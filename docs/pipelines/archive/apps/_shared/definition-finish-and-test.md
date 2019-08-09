---
ms.topic: include
---

## Finish and test the pipeline

[//]: # (Todo: Convert this to a shared blurb and use in all three scenarios after reviews are done and branches are merged.)

[//]: # (Todo: add TFVC and Git icons)

1. On the Repository tab:

   * Git: Make sure the repository and branch containing your application are selected.  (By default the repository with the same name as the project is selected.)

   * TFVC: Make sure the folder that contains your app is mapped.

2. On the Triggers tab select continuous integration (CI). If your code is in Git, specify the branches you want to build.

3. Save your pipeline and queue the build.

[//]: # (Issue: what should I say about the Filters field for TFVC on the Triggers tab? In my test, I saw it set by default to "undefined". Note this is a broader issue and reminder to self to implement outcome in other topics.)

[//]: # (todo: On General tab check Default queue, Build number format $ date:yyyyMMdd $ rev:.r)
