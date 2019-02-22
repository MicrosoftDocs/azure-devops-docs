Once your extension has been packaged, you can upload it to the Marketplace under a publisher. The `publisher` identifer specified in your [extension's manifest file](../../develop/manifest.md) must match the identifier of the publisher the extension is uploaded under.

To upload an extension to the Marketplace:

1. Navigate to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true)
2. Find the <b>Upload new extension</b> button, navigate to your packaged .vsix file, and select <i>upload</i>.
3. After a quick validation, your extension will appear in the extensions list: 
    ![first](../../publish/_img/manage-first.png)

At this point, your extension is not visible to any accounts and cannot be installed until you share it.

**Protective Scans**

As a Marketplace user, one expects to not get malicious software (malware) when they acquire an extension from Visual Studio Marketplace. To ensure this, we run a virus scan on each extension package published. This is performed for each new extension and for each extension update. Until the scan is all clear, we do not publish the extension in Marketplace for public usage.
> Stated virus scan is run at extension publish only and not during extension's execution.

We also perform a content scan for each extension in Marketplace. This is performed for each new extension and for each extension update. Through this we avoid surfacing inappropriate or offensive content on the Marketplace pages.

