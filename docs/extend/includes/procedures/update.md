To change an extension that's already published, update it.

> [!TIP]
> We recommend updating the extension over removing and re-uploading. We also recommend having two extensions, for example, `publisher.extension` and `publisher.extension-dev`.
`Publisher.extension` is public in the Marketplace, where customers can install it in their Azure DevOps organizations. `Publisher.extension-dev` is kept private in the Marketplace and can be shared with an organization that you own and control.
> You don't need to maintain two copies of source code of the extension. You can maintain two manifest files - one for each extension and during packaging of the extension you can provide the respective manifest file to the tfx-cli tool. For more information on arguments required for the tool, see [TFX extension commands](https://github.com/microsoft/tfs-cli/blob/master/docs/extensions.md#arguments). 

1. Select an extension from the list of displayed items. 
2. Right-click and select **Update** for the `publisher.extension-dev`, for example.
3. Validate your extension.
4. Make the same updates to the production version, `publisher.extension`, for example.
5. Browse to the .vsix for your extension and upload it.

The updated version of your extension automatically gets installed to accounts that have it already installed. New accounts where the extension is installed in the future also receive the latest version.


