All extensions and integrations, including extensions from Microsoft, have a publisher. Anyone can create a publisher and publish extensions under it. You can also give other people access to your publisher if a team is developing the extension.

A user owns the publisher, typically the user who created it. The publisher can also be shared with other users.

1. Sign in to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true).
2. If you're not already a member of an existing publisher, **+ Create a publisher**.
   1. Enter a name in the publisher name field. The ID field should automatically get set based on the name you entered.

    :::image type="content" source="../../media/create-publisher.png" alt-text="Screenshot showing highlighted button, Create publisher.":::

    > [!NOTE]
    > Make note of the ID. You need to set it in the manifest file of your extension.

   If you're not prompted to create a publisher, scroll down to the bottom of the page and select **Publish extensions** below *Related sites*.
    * Specify an identifier for your publisher, for example: `mycompany-myteam`
        * This identifier is used as the value for the `publisher` attribute in your extension manifest file.
    * Specify a display name for your publisher, for example: `My Team`

4. Review the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement), and then select **Create**.

   :::image type="content" source="../../media/create-publisher.png" alt-text="Create publisher for extension":::

Once the publisher's create, you're directed to manage items, but there aren't any items.

