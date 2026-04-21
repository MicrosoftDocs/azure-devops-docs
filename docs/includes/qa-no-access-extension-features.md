### Why can't users access extension features?

Users can't access extension features for the following reasons:

- **Insufficient access level**: Most extensions require at least Basic access, not Stakeholder. For example, users need Basic access to use the free [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search). The free [Test & Feedback extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) provides different capabilities based on your access level and whether you work offline or connected to Azure DevOps. For more information, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).

<a name="trial-expired"></a>

- **Expired trial**: If you started a free extension trial, check whether the trial expired:

  1. Go to **Organization settings** > **Extensions**.
  2. Look for an expiration message to determine if or when your extension expired.

<a name="extension-not-assigned"></a>

- **Extension not assigned**: If you purchased this extension, verify that you assigned it to users:

  1. Go to **Organization settings** > **Users**.
  2. Select the user and check the **Extensions** tab.
  3. If the extension isn't assigned, assign it to the user.

For more information, see [Assign extensions to users](../marketplace/install-extension.md).