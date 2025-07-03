Every extension or integration, including those from Microsoft, must have a publisher. Anyone can create a publisher and publish extensions under it. You can also share publisher access with other users, such as your development team.

1. Sign in to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true).
2. If you aren't part of an existing publisher, select **+ Create a publisher**.  
   Enter a publisher name; the ID field autofills based on your entry.

    :::image type="content" source="../../media/create-publisher.png" alt-text="Screenshot showing highlighted button, Create publisher.":::

    > [!NOTE]
    > - Ensure your publisher name is within 16 characters for multibyte characters.
    > - Save the publisher ID—you need it in your extension's manifest file.

   If you aren't prompted to create a publisher, scroll to **Publish extensions** under *Related sites*.
    * Set a unique publisher identifier, such as `mycompany-myteam`. Use this value for the `publisher` attribute in your manifest.
    * Set a display name, such as `My Team`.

3. Review the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement), then select **Create**.

   :::image type="content" source="../../media/create-publisher.png" alt-text="Create publisher for extension":::

After you create the publisher, you can manage items, although no items appear until you publish.
