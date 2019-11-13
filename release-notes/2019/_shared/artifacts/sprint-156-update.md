---
ms.topic: include
---

### Configure upstreams in different organizations within an AAD tenant

You can now add a feed in another organization associated with your Azure Active Directory (AAD) tenant as an upstream source to your Artifacts feed. Your feed can find and use packages from the feeds that are configured as upstream sources, allowing packages to be shared easily across organizations associated with your AAD tenant. See how to [set this up in the docs](https://docs.microsoft.com/azure/devops/artifacts/how-to/set-up-upstream-sources?view=azure-devops#add-an-azure-artifacts-feed-in-a-different-organization-within-your-aad-tenant-as-an-upstream-source). 

### Use the Python Credential Provider (preview) to authenticate pip and twine with Azure Artifacts feeds

You can now install and use the [Python Credential Provider (artifacts-keyring)](https://github.com/microsoft/artifacts-keyring) (currently in preview) to automatically set up authentication to publish or consume Python packages to or from an Azure Artifacts feed. With the credential provider, you don't have to set up any configuration files (pip.ini/pip.conf/.pypirc), you will simply be taken through an authentication flow in your web browser when calling pip or twine for the first time. See more information in [the documentation](https://docs.microsoft.com/azure/devops/artifacts/quickstarts/python-packages?view=azure-devops). 
