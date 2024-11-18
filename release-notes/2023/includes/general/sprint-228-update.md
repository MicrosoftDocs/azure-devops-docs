---
author: gloridelmorales
ms.author: glmorale
ms.date: 10/4/2023
ms.topic: include
---


### Managed identity and service principal support for Azure DevOps now in general availability (GA)

Support for Microsoft Entra ID managed identities and service principals in Azure DevOps has now reached general availability (GA). 

Today, many application integration scenarios rely on Personal Access Tokens (PATs) to integrate with Azure DevOps. While simple to use, PATs can easily be leaked, potentially enabling malicious actors to authenticate as powerful users. To prevent unwanted access, PATs often also require time-consuming maintenance through regular credential rotations.

You can now enable applications to instead use Managed Identities and Service Principals to integrate with Azure DevOps through REST APIs and client libraries. This highly requested feature offers Azure DevOps customers a more secure alternative to PATs. Managed Identities offer the ability for applications running on Azure resources to obtain Azure AD tokens without needing to manage any credentials at all.

Managed Identities and Service Principals can be setup in Azure DevOps and given permissions to specific assets (projects, repos, pipelines), just like regular users. This allows applications that use Managed Identities or Service Principals to connect to Azure DevOps and perform actions on behalf of themselves, instead of on behalf of a user, as PAT do. Teams can now better manage their services collectively, instead of relying on any one individual to provide a token for authentication. Learn more about the GA release in our public [blog post announcement](https://devblogs.microsoft.com/devops/?p=67669) and our [feature documentation](/azure/devops/integrate/get-started/authentication/service-principal-managed-identity).

### New Azure DevOps scopes available for Microsoft Identity OAuth delegated flow apps 

We have added new [Azure DevOps scopes](/azure/devops/integrate/get-started/authentication/oauth#scopes) for delegated OAuth apps on the Microsoft Identity platform, also colloquially known as [Microsoft Entra ID OAuth apps](/azure/devops/integrate/get-started/authentication/oauth#azure-ad-oauth). These new scopes will enable app developers to announce specifically which permissions they are hoping to request from the user in order to perform app duties. This highly requested feature allows app developers to request from their users solely the permissions they need for their app.  

Previously, user_impersonation was the only scope available for app developers to choose from. This scope gives the app full access to all Azure DevOps APIs, which means it will be able to do anything that the user is able to do across all organizations that the user belongs to.
Now with more granular scopes available, you can rest easy that apps can only request and access solely those APIs that the requested scopes have granted them permission to access. 

Learn more about these new scopes in our [public blog post announcement](https://devblogs.microsoft.com/devops/?p=67699) and [feature documentation](/azure/devops/integrate/get-started/authentication/oauth).