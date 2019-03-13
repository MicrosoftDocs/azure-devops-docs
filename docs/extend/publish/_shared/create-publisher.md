Every item on the Visual Studio Marketplace, including extensions and integrations, belong to a publisher. 

A publisher has a unique identifier and a name. The name is displayed on the cards of items from that publisher on the Marketplace:

<div align="center" style="padding-top:15px">
<img src="/azure/devops/extend/publish/_img/card.png" style="padding-bottom:20px" alt="Marketplace card showing extension with publisher name">
</div>

A publisher is owned by a user, typically the user that created it, and can also be shared with other users.

1. Sign in to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true)
2. If you are not already a member of an existing publisher, you'll be prompted to create a publisher. If you're not prompted to create a publisher, scroll down to the bottom of the page and select <i>Publish Extensions</i> underneath <b>Related Sites</b>.
    * Specify an identifer for your publisher, for example: `mycompany-myteam`
        * This will be used as the value for the `publisher` attribute in your extensions' manifest file.
    * Specify a display name for your publisher, for example: `My Team`
3. Review the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement) and click **Create**

Once the publisher has been created, you'll be directed to the manage items, which will have no items.