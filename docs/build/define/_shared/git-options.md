**Checkout submodules:**  Select if you want to download files from [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

**Checkout files from LFS:** Select if you want to download files from [large file storage (LFS)](https://www.visualstudio.com/en-us/docs/git/manage-large-files#use-git-large-file-storage-lfs).

* **Team Services:** Select the check box to enable this option.

* **TFS 2017 and TFS 2015 (OSX and Linux only):** On the **Variables** tab, set _Agent.Source.Git.Lfs_ to _true_.

**Don't sync sources:** Select the check box if you want to skip fetching new commits. This option can be useful in cases such as when you want to:

* Git init, config, and fetch using your own custom options.

* Use a build process to just run automation (for example some scripts) that do not depend on code in version control.

**Shallow fetch:** Select if you want to limit how far back in history to download. Effectively this results in `git fetch --depth=n`. If your repository is large, this option might make your build process more efficient. Your repository might be large if it has been in use for a long time. It also might be large if you added and later deleted large files. 

In these cases this option can help you conserve network and storage resources. It might also save time. The reason it doesn't always save time is because in some situations the server might need to spend time calculating the commits to download. 

* **Team Services:** After you select the check box to enable this option, in the **Depth** box specify the number of commits. 

* **TFS 2017 and TFS 2015 (OSX and Linux only):** On the **Variables** tab, set _Agent.Source.Git.ShallowFetchDepth_ to the number of commits in history you want to download. Specify 0 to set no limit.

> **Tip:** If you're using Team Services, the above variables also work and override the check box controls. So for example, you can override the setting when you queue the build.