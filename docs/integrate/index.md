---
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
title: Build secure applications and services with Azure DevOps
description: Learn how to build secure, scalable applications that integrate with Azure DevOps using modern authentication and best practices.
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# Build secure applications with Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Build secure, scalable applications and services that integrate with Azure DevOps to access user resources and automate processes programmatically. Whether you're creating internal automation tools or building commercial products, Azure DevOps provides robust APIs and modern authentication options to support your integration needs.

## Why integrate with Azure DevOps?

Azure DevOps integration enables you to:

**🔧 Automate workflows**
- [Create and track bugs](./quickstarts/create-bug-quickstart.md) automatically from customer reports
- [Monitor work items](./quickstarts/work-item-quickstart.md) and display status on custom dashboards
- Sync data between Azure DevOps and external systems
- Generate reports and analytics from Azure DevOps data

**🏗️ Build commercial solutions**
- Develop marketplace extensions for Azure DevOps customers
- Create SaaS products that integrate with Azure DevOps
- Build mobile apps that connect to Azure DevOps services
- Integrate Azure DevOps with enterprise systems

## Getting started: Choose your path

### 🚀 Quick start options

| **Need** | **Recommended approach** | **Best for** |
|----------|-------------------------|--------------|
| **Simple automation** | [REST API](./how-to/call-rest-api.md) with personal access tokens (PATs) | Scripts, personal tools |
| **Production applications** | [.NET client libraries](./concepts/dotnet-client-libraries.md) with managed identity | Enterprise apps, Azure-hosted services |
| **Interactive applications** | [Microsoft Entra authentication](./get-started/authentication/entra.md) | User-facing apps, desktop tools |
| **Custom UI components** | [Azure DevOps extensions](../extend/overview.md) | Team customizations, marketplace products |

### 🔐 Authentication: Security first

**Choose the right authentication method:**

**✅ Recommended for production:**
- **[Managed Identity](./get-started/authentication/authentication-guidance.md#managed-identity)** - For Azure-hosted applications (most secure)
- **[Service Principal](./get-started/authentication/authentication-guidance.md#service-principal)** - For CI/CD pipelines and automated services
- **[Microsoft Entra ID](./get-started/authentication/entra.md)** - For user-facing applications requiring OAuth flows

**⚡ Quick development:**
- **[Personal Access Tokens (PATs)](./get-started/authentication/authentication-guidance.md#personal-access-tokens)** - For testing and personal automation only

**❌ Avoid for production:**
- Username/password authentication (deprecated)
- Hardcoded credentials in source code
- Overly broad permission scopes

## Development approaches

### 🔌 REST API integration

**Best for:** Direct HTTP calls, platform-agnostic development, simple automation

```markdown
**Key benefits:**
- Works with any programming language
- Full control over HTTP requests and responses
- Lightweight integration for simple scenarios
- Easy to debug and test

**Get started:**
- [Learn REST API basics](./how-to/call-rest-api.md)
- [Browse API reference](/rest/api/azure/devops/)
- [Try APIs in the browser](https://docs.microsoft.com/rest/api/azure/devops/)
```

### 📚 .NET client libraries

**Best for:** C# applications, enterprise development, complex integrations

```markdown
**Key benefits:**
- Strongly typed APIs with IntelliSense support
- Built-in retry logic and error handling
- Async/await patterns for better performance
- Production-ready authentication options

**Get started:**
- [.NET client library samples](./get-started/client-libraries/samples.md)
- [Authentication guidance](./get-started/authentication/authentication-guidance.md)
- [Client library concepts](./concepts/dotnet-client-libraries.md)
```

### 🔔 Event-driven integration

**Best for:** Real-time responses, webhook-based automation, external system synchronization

```markdown
**Key benefits:**
- Real-time event notifications
- Reduced polling and improved efficiency
- Support for multiple event types
- Easy integration with external services

**Get started:**
- [Service hooks overview](../service-hooks/overview.md)
- [Webhook configuration guide](../service-hooks/services/webhooks.md)
- [Event reference documentation](../service-hooks/events.md)
```

### 🧩 Platform extensions

**Best for:** Custom UI components, team-specific features, marketplace products

```markdown
**Key benefits:**
- Native integration with Azure DevOps UI
- Access to platform APIs and services
- Distribution through Visual Studio Marketplace
- Rich customization capabilities

**Get started:**
- [Extension development overview](../extend/overview.md)
- [Extension samples and tutorials](../extend/develop/samples-overview.md)
- [Marketplace publishing guide](../extend/publish/overview.md)
```

## Architecture patterns

### 🏛️ Recommended architectures

**Microservices integration:**
```markdown
Azure Function/App Service → Managed Identity → Azure DevOps APIs
- Secure, serverless integration
- Automatic credential management
- Scalable and cost-effective
```

**Enterprise application:**
```markdown
On-premises App → Service Principal → Azure DevOps REST APIs
- Certificate-based authentication
- Centralized credential management
- Audit logging and compliance
```

**User-facing application:**
```markdown
Web/Mobile App → Microsoft Entra OAuth → Azure DevOps on behalf of user
- User consent flows
- Secure token management
- Granular permission control
```

## Security and compliance

### 🛡️ Security best practices

**Authentication security:**
- ✅ Use managed identities when possible
- ✅ Implement proper token refresh logic
- ✅ Apply principle of least privilege
- ✅ Enable audit logging for all API calls
- ❌ Never commit credentials to source control
- ❌ Don't use overly broad PAT scopes

**Application security:**
- Implement proper error handling and logging
- Use HTTPS for all communications
- Validate all input data
- Handle rate limiting gracefully
- Store sensitive data in Azure Key Vault

**Compliance considerations:**
- Review [Azure DevOps security overview](../organizations/security/security-overview.md)
- Understand data residency requirements
- Implement proper access controls and auditing
- Follow industry-specific compliance guidelines

## Resources and next steps

### 📖 Essential documentation

**Core concepts:**
- [Authentication guidance](./get-started/authentication/authentication-guidance.md) - Choose the right auth method
- [Microsoft Entra integration](./get-started/authentication/entra.md) - OAuth and modern auth patterns
- [Integration best practices](./concepts/integration-bestpractices.md) - Production-ready development patterns

**API references:**
- [Azure DevOps REST API](/rest/api/azure/devops/) - Complete API documentation
- [.NET client libraries](./concepts/dotnet-client-libraries.md) - Managed client library information
- [Service hooks reference](../service-hooks/overview.md) - Event-driven integration

**Code samples:**
- [.NET client samples](./get-started/client-libraries/samples.md) - Production-ready C# examples
- [Azure DevOps auth samples](https://github.com/microsoft/azure-devops-auth-samples) - Authentication examples
- [Extension samples](../extend/develop/samples-overview.md) - Platform extension examples

### 🎯 Quick actions

**Start building today:**
1. **[Set up authentication](./get-started/authentication/authentication-guidance.md)** - Choose your auth method
2. **[Try the REST API](./how-to/call-rest-api.md)** - Make your first API call
3. **[Run client library samples](./get-started/client-libraries/samples.md)** - See working code examples
4. **[Review security practices](../organizations/security/security-overview.md)** - Build securely from the start

**Need help?**
- [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html) - Ask questions and get help
- [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops) - Community support and examples
- [GitHub samples repository](https://github.com/microsoft/azure-devops-auth-samples) - Working code examples

> [!TIP]
> **New to Azure DevOps integration?** Start with the [authentication guidance](./get-started/authentication/authentication-guidance.md) to understand your options, then try the [REST API quickstart](./how-to/call-rest-api.md) to make your first successful API call.
