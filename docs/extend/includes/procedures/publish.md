Once your extension is packaged, you can upload it to the Marketplace under a publisher. The `publisher` identifier specified in your [extension's manifest file](../../develop/manifest.md) must match the identifier of the publisher the extension is uploaded under.

1. From the [management portal](https://aka.ms/vsmarketplace-manage), select your publisher from the drop-down menu at the top of the page.

2. Select **New extension** > **Azure DevOps**.

    :::image type="content" source="../../get-started/media/upload-new-extension.png" alt-text="Screenshot showing New extension  dropdown menu and highlighted Azure DevOps selection.":::

3. Drag and drop your file or select it to find your VSIX file, which you created in the previous packaging step, and then choose **Upload**.

   ![Upload new extension for Azure DevOps.](../../get-started/media/upload-new-extension2.png)

   After quick validation, your extension appears in the list of published extensions. Don't worry, the extension is only visible to you.

    :::image type="content" source="../../get-started/media/published-extension.png" alt-text="Screenshot showing extension in the list of published extensions."::: 

At this point, your extension isn't visible to any accounts and can't be installed until you share it.

> [!NOTE]
> Microsoft runs a virus scan on each new and updated extension package published. Until the scan is all clear, we don't publish the extension in the Marketplace for public usage. This way we also avoid surfacing inappropriate or offensive content on the Marketplace pages.
