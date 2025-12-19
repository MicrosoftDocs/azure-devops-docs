To update an extension you already published, do the following steps:

> [!TIP]
> Update your extension instead of removing and re-uploading it. We recommend maintaining two extensions: `publisher.extension`, public in the Marketplace for customers, and `publisher.extension-dev`, private, shared only with your organization for development and testing.
> You don't need two copies of your source code—just maintain separate manifest files for each extension. When packaging, provide the appropriate manifest file to the tfx-cli tool. For more information, see [TFX extension commands](https://github.com/microsoft/tfs-cli/blob/master/docs/extensions.md#arguments).

1. Select your extension from the list of displayed items.
2. Right-click and select **Update** for the development version, such as `publisher.extension-dev`.
3. Validate your extension.
4. Apply the same updates to the production version, such as `publisher.extension`.
5. Browse to the .vsix file for your extension and upload it.

Azure DevOps automatically installs the updated version for all accounts that already have the extension. New installations also receive the latest version.
