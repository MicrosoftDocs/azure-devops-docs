---
author: ckanyika
ms.author: ckanyika
ms.date: 10/16/2024
ms.topic: include
---

### Authentication to Azure Artifacts using a public feed and Cargo

Due to a limitation with the Cargo client, authentication was all-or-nothing. For private feeds, authentication would be sent, but for [public feeds](https://learn.microsoft.com/azure/devops/artifacts/tutorials/share-packages-publicly?view=azure-devops&tabs=nuget), which need to allow for anonymous users, no authentication would be sent, even if it was available or needed.

Now, authenticated users can connect to a public Azure Artifacts feed, just as they would a private feed. If you or your pipeline agent have [permission to save packages from upstream sources](/azure/devops/artifacts/feeds/feed-permissions?view=azure-devops#permissions-table), you can access packages from crates.io through the feed. This change gives control of what packages can come into a feed back in the hands of feed administrators. Once packages are brought into the feed from an upstream source, anonymous users will have access to them.

To ensure authentication, append  `~force-auth` to the feed name in your registry URL. You can find out more details through [our public documentation](https://learn.microsoft.com/azure/devops/artifacts/cargo/cargo-upstream-source?view=azure-devops&tabs=publicfeed%2CWindows%2CPowerShell#connect-to-your-feed).

