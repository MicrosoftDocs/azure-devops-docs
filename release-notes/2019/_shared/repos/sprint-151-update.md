---
ms.topic: include
---

### Repository creation extension point

We've added an extension point to allow you to add new items to the repository picker. This extension point will let you add custom actions (redirects, popups, etc) to the repository picker menu, enabling flows like alternate repository creation scenarios.

> [!div class="mx-imgBorder"]
![Badge](../../_img/151_06.png "Repository creation extension")

### Improved encoding support

Previously, editing and saving files on the web would only save as UTF-8 encoding and we did not prompt you when the file encoding changed. Now, we will give you a warning when you try to save a file that is not UTF encoded via the web (which only supports UTF encoding). In addition, we added support for UTF-16 and UTF-32 encoding via the web pushes endpoint. This means that we will preserve the encoding type so you don't have to rewrite them as UTF-8.

The following screenshot shows and example of the dialog that you will see when you introduce encoding changes by a web push.

> [!div class="mx-imgBorder"]
![Badge](../../_img/151_07.png "")