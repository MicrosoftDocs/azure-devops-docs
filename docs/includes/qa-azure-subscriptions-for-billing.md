<a name="which-azure-sub-for-billing"></a>

### Which Azure subscriptions can I link to my organization and use for billing?

You can link most [Azure subscriptions](https://azure.microsoft.com/pricing/purchase-options/) to your organization for billing, except the following:

* [Azure Free Trial](https://azure.microsoft.com/offers/ms-azr-0044p/)
* [Free Microsoft Entra subscription](/microsoft-365/compliance/use-your-free-azure-ad-subscription-in-office-365)

If you have one of these subscription types, set up a separate [pay-as-you-go Azure subscription](https://azure.microsoft.com/offers/ms-azr-0003p/).

> [!IMPORTANT]
> **Visual Studio subscribers and Visual Studio Dev Essentials members:**
> 
> - You can't use [monthly credits for Visual Studio subscriptions](https://azure.microsoft.com/pricing/member-offers/msdn-benefits-details/) or [monthly credits for Visual Studio Dev Essentials](https://azure.microsoft.com/offers/ms-azr-0022p/) to pay for Azure DevOps purchases. You can still link these Azure subscriptions for billing, but Azure charges your credit card instead of applying credits.
> - Before you use these subscriptions for billing, [remove the default spending limit indefinitely](https://azure.microsoft.com/pricing/spending-limits/). If you don't remove the limit, Azure disables your subscription when monthly charges are billed, which suspends all resources including Azure DevOps purchases, Visual Studio Marketplace purchases, and Azure resources.

#### Remove the spending limit

If you have Administrator permissions for your subscription, remove the spending limit in the [Azure portal](https://portal.azure.com):

1. Sign in to the [Azure portal](https://portal.azure.com) and go to **Cost Management + Billing** > **Subscriptions**.
2. Select your Azure subscription.
3. Select **Remove spending limit indefinitely**.

:::image type="content" source="../media/spending-limit.png" alt-text="Screenshot showing spending limit option.":::

:::image type="content" source="../media/azure-remove-spending-limit.png" alt-text="Screenshot showing how to remove spending limit indefinitely.":::
