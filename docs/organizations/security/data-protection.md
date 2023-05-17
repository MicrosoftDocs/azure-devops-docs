---
title: Data protection overview
titleSuffix: Azure DevOps Services
description: Learn how Microsoft helps protect your projects and data in Azure DevOps. 
ms.custom: freshness-fy22
ms.topic: article
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.reviewer: jominana
ms.date: 05/17/2023
monikerRange: 'azure-devops'
---

# Data protection overview

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps Services is a cloud-hosted application for your development projects, from planning through deployment. Based on the on-premises capabilities, with additional cloud services, we manage your source code, work items, builds, and tests. Azure DevOps uses platform as a service (PaaS) infrastructure and many Azure services, including Azure SQL, to deliver a reliable, globally available service for your development projects. 

This article discusses the steps that Microsoft takes to help keep your projects safe, available, secure, and private. Also, it describes the role you play in keeping your projects safe and secure.

This article is intended for organization administrators and IT professionals who manage their project assets daily. It will be most useful to individuals who are already familiar with Azure DevOps and want to know more about how Microsoft protects stored assets in Azure DevOps.

## Our commitment

Microsoft helps to ensure that your projects remain safe
and secure, without exception. When stored in Azure DevOps, your projects benefit
from multiple layers of security and governance technologies,
operational practices, and compliance policies. We enforce data privacy
and integrity both at rest and in transit.

The threats you face boil down to four basic categories: data availability, service
availability, service security, and data privacy. This article explores specific threats within each category, and explains what Azure DevOps does to address them. First, the article describes how data is stored and how Azure DevOps manages access to your data.

Data protection requires active engagement of administrators and users, who must know what steps to take
to protect your assets from unauthorized disclosure and tampering. Be explicit when you grant permissions to user access points, so only the right people are accessing data within Azure DevOps.

Whatever your approach, you should consider all data potentially
"at risk," no matter where it is or how it's being used. This is true
for both data in the cloud and data stored in a private
data center. It's important to classify your data, its sensitivity and risk, and the damage it might do if it becomes compromised. Also, categorize your data relative to an overall information security management policy.

## Built on Azure

![Diagram of Azure DevOps high-level architecture.](media/data-protection/Figure1_VSOArchitecture.png)

We host Azure DevOps entirely in Azure data centers. Azure DevOps uses many core Azure services, including compute, storage, networking, Azure SQL, identity and access management, and Azure Service Bus.

Azure DevOps uses Azure Storage as the primary repository for service metadata and customer data. Depending on the type of data and the storage and retrieval needs, Azure DevOps uses Azure Blob Storage (for binary large objects) and Azure SQL data storage. To understand the Azure DevOps Services approach to data protection, some background on these elements is important.

- **Azure Blob Storage** stores large chunks of unstructured data. All projects use the Azure Blob Storage service. Data includes potentially sensitive or private information, like the contents of source files and attachments for work items. For most projects, the majority of storage in use is this type of unstructured blob storage. For more information, see [Azure Blob Storage](/azure/storage/blobs/storage-quickstart-blobs-dotnet).

- **Azure SQL Database storage** stores the structured and transactional aspects of your organization, including project metadata, the versioned source control history, and work item details. Database storage gives you fast access to the important elements of your project, and provides indexes into the blob storage to look up files and attachments. For more information, see [Azure SQL Database](/azure/azure-sql/database).

Administrators can manage access to resources by [granting or restricting permissions](/previous-versions/azure/devops/reference/process-templates/configure-initial-groups-teams-members-permissions) on user identities or groups. Azure DevOps uses federated authentication of user identities via [Azure Active Directory](../accounts/access-with-azure-ad.md) (Azure AD) and Microsoft accounts. 

During authentication, the user is routed to the authentication provider, where they provide their credentials. After the authentication provider has verified the user's credentials, Azure DevOps issues an authentication cookie to the user, which allows the user to remain authenticated against Azure DevOps.

In this way, the user's credential information is never shared directly with Azure DevOps. For each Azure DevOps resource that the user attempts to access, permissions are validated based on the user's explicit permissions, as well as permissions inherited through group membership. Administrators can use access controls to protect [access to the organization](../accounts/connect-organization-to-azure-ad.md), project collections, team projects, and team-scoped data and functionality. Administrators can also protect more specific assets like version control folders and work item area paths.

## Data availability

Azure DevOps uses many Azure Storage features to ensure data availability if there's a hardware failure, service disruption, or region disaster. Also, the Azure DevOps team follows procedures to protect data from accidental or malicious deletion.

### Data redundancy

To protect data during hardware or service failures, Azure Storage geo-replicates customer data between two regions in the same geography. For example, Azure can geo-replicate data between North and West Europe or between North and South United States. 

For Azure Blob Storage, customer data gets replicated three times within a single region, and is replicated asynchronously to a second region in the same geography. As such, Azure always maintains the equivalent of six copies of your data. This enables you to fail over to a separate region if there's a major outage or disaster, while also having local redundancy for hardware failures within a region. For Azure SQL Database storage, daily backups are maintained offsite if there's a regional disaster.

> [!NOTE]
> Regarding data redundancy and failover:
> * There's an inherent delta, measured in minutes, when Microsoft replicates your data between the primary and secondary region.
> * Failover to the secondary region is a decision that Microsoft must make centrally, as it affects all customers on the affected scale unit. Except in extreme circumstances, Microsoft opts to not fail over so that customer data isn't lost.
> * Azure DevOps offers a 99.9 percent uptime SLA guarantee, and refunds a portion of the monthly charges if that SLA is missed in a specific month.
> * Because there is only one region in Brazil, customer data in Brazil is replicated to the South Central US region for disaster recovery purposes.

### Mistakes happen

To protect against accidental deletion of data, Microsoft also takes point-in-time backups of both the blobs in Azure Blob Storage, and the databases in Azure SQL Database. There's a separate copy of all blobs, and changes are appended to each storage account. Because this data is immutable, you don't need to rewrite any existing storage as part of the backup procedures. 

Backups are a standard part of Azure SQL Database, and Azure DevOps makes use of this. We maintain 28 days' worth of your data. In both cases, these backups are also replicated in a paired region, helping to ensure that we recover from a regional outage. 

A further protection is that customers can recover their deleted organizations or projects for up to 28 days after deletion. Deleted organizations and projects are in a "soft deleted" stage for 28 days allowing customers to recover as needed. After 28 days they are permanently deleted and cannot be restored.

>[!IMPORTANT]
> Accidental deletion here refers to scenarios that arise as a result of an incident on our services and doesn't include accidental deletion of assets (e.g., repositories, work items, attachments, artifacts) by customers.  We do not support restoring assets that are accidently deleted by customers as these backups are meant for business continuity and aid recovery from outage or disaster scenarios only. 

### Practice is critical

Having multiple, redundant backups of your data is good but without practice, restoring can be unpredictable. It's been said that "backups never fail, the restores do." While technically incorrect, the sentiment is right.

Microsoft regularly practices restoring various datasets from backup. Geo-redundant storage from Azure is tested regularly. There are many combinations of disaster and data corruption scenarios, which we continue to plan and run new tests for regularly.

## Service availability

Azure DevOps offers distributed denial-of-service (DDoS) protections and live site response to help ensure that you have access to your organization and associated assets.

### DDoS protections

In some cases, a malicious DDoS attack can affect service availability. Azure has a DDoS defense system that helps prevent attacks against our service. It uses standard detection and mitigation techniques such as SYN cookies, rate limiting, and connection limits. The system is designed to withstand attacks not only from the outside but also from within Azure. 

For application-specific attacks that can penetrate the Azure defense systems, Azure DevOps establishes application and organization level quotas and throttling. This helps prevent any overuse of key service resources during an attack or accidental misuse of resources.

### Live site response

In rare circumstances, you might require a live site response to a problem with service availability. We have an operations team available 24x7, to rapidly identify the issue and to engage the necessary development team resources. Those resources then address the problem. They also aim to update the service status page within minutes of detecting an issue that affects the service. After the team has addressed an issue, they identify the root cause of the issue and track the necessary changes to prevent similar issues in the future.

Azure DevOps live site management processes focus on your experience and the health of your service. These processes minimize the time to detect, respond to, and mitigate problems. All engineering disciplines are involved and responsible, so there are continual improvements evolving out of direct experience. This means that monitoring, diagnostics, resiliency, and quality assurance processes improve over time. 

Live site management in Azure DevOps has three distinct tracks: telemetry, incident management, and live site review. Here's what these tracks entail:

![Image of the Azure DevOps Services live site management process.](media/data-protection/figure-2-site-management-process.png)

The operations team also monitors the availability metrics for individual organizations. These metrics provide insights into specific conditions that might affect only some of our customers. Investigations into this data can often result in targeted improvements to address customer-specific issues. In some cases, Microsoft might even contact you directly to understand your experience and work with you to improve the service.

Microsoft publishes a service-level agreement (SLA) and provides a financial guarantee to ensure that we meet this agreement each month. For more information, see [SLA for Azure DevOps](https://azure.microsoft.com/support/legal/sla/azure-devops/v2_1/).

Sometimes partner teams or dependencies have incidents that affect Azure DevOps. All partner teams follow similar approaches to identifying, resolving, and learning from these service outages.

## Service security

Service security requires constant vigilance, from proper design and coding techniques to operational factors. Microsoft actively invests in the prevention of security holes and in breach detection. If there's a breach, Microsoft uses security response plans to minimize data leakage, loss, or corruption. For more information, see [About security, authentication, and authorization](about-security-identity.md).

### Secure by design

Azure DevOps is designed to be secure. Azure DevOps uses the Microsoft Security Development Lifecycle at the core of its development process. The Microsoft Operational Security Assurance program guides its cloud operation procedures. The following methodologies specify the following requirements:

- Threat modeling during service design.
- Following design and code best practices.
- Verifying security with standard tooling and testing.
- Limiting access to operational and customer data.
- Gating rollout of new features through a rigid approval process.

The Azure DevOps team has annual training requirements for all engineers and operations personnel, and sponsors informal "brown bag" meetings hosted by Microsoft engineers. After they've solved an issue raised in a brown bag meeting, they share what they learned with the rest of the team.

A cloud service is only as secure as the host platform. Azure DevOps uses PaaS for much of its infrastructure. PaaS automatically provides regular updates for known security vulnerabilities. VMs hosted in Azure use infrastructure as a service (IaaS), such as for a [hosted build service](../../pipelines/agents/hosted.md). Such images receive regular updates to include the latest security patches available from Windows Update. The same update rigor applies for on-premises machines, including those used for deployment, monitoring, and reporting.

The Azure DevOps team conducts regular, security-focused penetration testing of Azure DevOps. Using the same techniques and mechanisms as malicious attackers, penetration testing tries to exploit the live production services and infrastructure of Azure DevOps. The goal is to identify real-world vulnerabilities, configurations, errors, or other security gaps in a controlled process. The team reviews the results to identify other areas of improvement and to increase the quality of the preventative systems and training. You can review the results of recent Azure DevOps penetration tests on the [Service Trust Portal](https://servicetrust.microsoft.com/ViewPage/TrustDocumentsV3?command=Download&downloadType=Document&downloadId=ce44654a-f397-4aab-a45c-876fe4dd9cbf&tab=7f51cb60-3d6c-11e9-b2af-7bb9f5d2d913&docTab=7f51cb60-3d6c-11e9-b2af-7bb9f5d2d913_Pen_Test_and_Security_Assessments).

### Credential security

Your credentials in Azure DevOps are stored using industry best practices. Learn more about [credential storage](credential-storage.md).

### Reporting security issues

If during your penetration testing you believe you've discovered a potential security flaw related to the Azure DevOps service, report it to Microsoft within 24 hours. For more information, see [Report a computer security vulnerability](https://technet.microsoft.com/organizations/security/ff852094).

>[!IMPORTANT]
>Although notifying Microsoft of penetration testing activities is no longer required, you must still comply with the [Microsoft Cloud Unified Penetration Testing Rules of Engagement](https://technet.microsoft.com/mt784683).

### Bounty program

Azure DevOps participates in the [Microsoft Online Services Bounty Program](https://www.microsoft.com/msrc/bounty-microsoft-cloud). This program rewards security researchers who report issues to us, and encourages more people to help keep Azure DevOps secure. For more information, see the [Azure DevOps Bounty Program](https://www.microsoft.com/msrc/bounty-azure-devops). 

### Restricting access

Microsoft maintains strict control over who gets access to our production environment and customer data. Access gets granted at the level of least privilege that's required and only after proper justifications get provided and verified. If a team member needs access to resolve an urgent issue or deploy a configuration change, they must apply for "just-in-time" access to the production service. Access is revoked as soon as the situation is resolved. 

Access requests and approvals get tracked and monitored in a separate system. All access to the system correlates against these approvals and if we detect unapproved access, the operations team gets alerted to investigate.

We use two-factor authentication for all remote system access. So, if the username and password for one of our developers or operation staff got stolen, the data remains protected. This means additional authentication checks via smart card or a phone call to a pre-approved number must occur before any remote access to the service is permitted.

In addition, Microsoft uses secrets to manage and maintain the service, such as RDP passwords, SSL certificates, and encryption keys. These are all managed, stored, and transmitted securely through the Azure portal. Any access to these secrets requires specific permission, which is logged and recorded in a secure manner. All secrets are rotated on a regular cadence, and can be rotated on-demand if there's a security event.

The Azure DevOps operations team uses hardened administrator workstations to manage the service. These machines run a minimal number of applications and operate in a logically segmented environment. Operations team members must provide specific credentials with two-factor authentication to access the workstations. All access is monitored and securely logged. To isolate the service from outside tampering, we don't permit applications such as Outlook and Office, as they're often targets of spear-phishing and other types of attacks.

### Intrusion protection and response

We encrypt data via HTTPS and SSL to ensure it isn't intercepted or modified while in transit between you and Azure DevOps.

Also, data we store on your behalf in Azure DevOps gets encrypted as follows:

* Data stored in Azure SQL databases gets encrypted using [Transparent Data Encryption (TDE)](/sql/relational-databases/security/encryption/transparent-data-encryption). TDE protects against the threat of malicious activity by doing real-time encryption of the database, associated backups, and transaction log files at rest.

* Azure Blob Storage connections get encrypted to protect your data in transit. To protect data at rest stored in Azure Blob Storage, Azure DevOps uses [Azure Storage Service Encryption (SSE)](/azure/storage/common/storage-service-encryption).

> [!NOTE]
> Azure DevOps is not Federal Information Processing Standards (FIPS) 140-2 or 140-3 compliant.

The Azure infrastructure helps the Azure DevOps team to log and monitor key aspects of the service. This helps ensure that activities within the service are legitimate, and detects breaches or attempted breaches. In addition, all deployment and administrator activities are securely logged, as is operator access to production storage. Real-time alerts are raised because the log information is automatically analyzed to uncover potentially malicious or unauthorized behavior.

Where a possible intrusion or high priority security vulnerability gets identified, the team has a clear response plan. This plan outlines responsible parties, steps required to secure customer data, and how to engage with security experts at Microsoft. The team also notifies any organization owners if data was disclosed or corrupted, so that they can take appropriate steps to remedy the situation.

Finally, to help combat emerging threats, Azure DevOps employs an "Assume Breach" strategy. A highly specialized group of security experts within Microsoft, known as the Red Team, assumes the role of sophisticated adversaries. This team tests breach detection and response, to accurately measure readiness and the impacts of real-world attacks. This strategy strengthens threat detection, response, and defense of the service. It also allows the team to validate and improve the effectiveness of the entire security program.

### Ransomware attack protection overview

Azure DevOps is built on Azure and uses Azure's best-in-class controls to help prevent, detect, and respond to a ransomware attack. For more information about how Azure protects customers from ransomware attacks, see [Azure defenses for ransomware attack](https://azure.microsoft.com/resources/azure-defenses-for-ransomware-attack/).

## Data privacy

You should have confidence that your data is being handled appropriately and for legitimate uses. Part of that assurance involves appropriately restricting usage so that your data is used only for legitimate reasons.

### General Data Protection Regulation (GDPR)

The General Data Protection Regulation (GDPR) is the biggest change in data protection laws in Europe since the 1995 introduction of the European Union (EU) Data Protection Directive 95/46/EC. For more information about the GDPR regulation, see the [overview page in the Microsoft Trust Center](https://www.microsoft.com/TrustCenter/Privacy/gdpr/default.aspx).

### Data residency and sovereignty

Azure DevOps is available in the following eight geographies across the world: United States, Canada, Europe, United Kingdom, India, Australia, Asia Pacific, and Brazil. By default, your organization is assigned to your closest geography, but you do have the option to choose a different geography. If you change your mind later, it's possible to migrate your organization to a different geography, with the assistance of Microsoft support.

Azure DevOps doesn't move or replicate customer data outside of the chosen geography. Instead, your data is geo-replicated to a second region within the same geography. The only exception is Brazil, which replicates data to the South Central US geography for disaster recovery purposes.

> [!NOTE]
> For builds and releases running on Microsoft-provided macOS agents, your data will be transferred to a GitHub data center in the US.

To learn more, see [Azure DevOps data location](data-location.md).

### Law enforcement access

In some cases, third parties such as law enforcement entities might approach Microsoft to obtain access to customer data stored within Azure DevOps. We attempt to redirect the requests to the organization owner for resolution. When compelled by court order to disclose customer data to a third party, Microsoft makes a reasonable effort to notify the organization owner in advance, unless we’re legally prohibited from doing so.

Some customers require their data storage in a particular geographic location to ensure a specific legal jurisdiction for any law enforcement activities. All customer data, such as source code, work items, test results, and geo-redundant mirrors and offsite backups, get maintained within one of the previously mentioned geographies.

### Microsoft access

From time to time, Microsoft employees need to obtain access to customer data stored within Azure DevOps. As a precaution, all employees who have or might ever have access to customer data must pass a background check, which verifies previous employment and criminal convictions. We permit access to the production systems only when there's a live site incident or other approved maintenance activity, which gets logged and monitored.

Because not all data within our system gets treated the same, we classify data to distinguish between the following data types:

- Customer data - what you upload to Azure DevOps.
- Organization data - information used when you sign up for or administer your organization.
- Microsoft data - information required for or collected through the operation of the service. 

Based on the classification, we control usage scenarios, geo-location requirements, access restrictions, and retention requirements.

### Microsoft promotional use

Microsoft occasionally wants to contact customers to let them know about additional features and services that might be useful. Because not all customers want to be contacted about these offers, you can opt in and opt out of marketing email communications.

Microsoft never uses customer data to target specific offers for specific users or organizations. Instead, we use organization data and aggregate usage statistics at the organization level to determine groups that should receive specific offers.

## Building confidence

You can be confident in other efforts Microsoft makes on behalf of Azure DevOps. These efforts include internal adoption policies at Microsoft, the level of transparency provided into the state of our service, and progress towards receiving certification of our information security management systems.

### Internal adoption

Teams across Microsoft are adopting Azure DevOps internally. The Azure DevOps team moved into an organization in 2014 and uses it extensively. More broadly, we have established guidelines to enable the adoption plans for other teams. 

Obviously, large teams move more gradually than smaller ones, given their investments in existing DevOps systems. For teams able to move quickly, we have established a project classification approach. It assesses risk tolerance, based on project characteristics, to determine if the project is appropriate for Azure DevOps. For larger teams, the adoption typically occurs in phases, with more planning. 

Additional requirements for internal projects include associating the organization with Azure AD to ensure proper user identity life cycle and password complexity. For more sensitive projects, two-factor authentication is also required.

### Compliance certifications

Some of you want to understand third-party
evaluation of our data security procedures. Azure DevOps has achieved the following certifications:

- ISO 27001:2013
- ISO 27018:2019
- HIPAA (Health Insurance Portability and Accountability Act)
- BAA (Business Associate Agreement)
- EU Model Clauses
- SOC 1 Type 2
- SOC 2 Type 2
- Germany C5 

The SOC audit for Azure DevOps covers controls for data security, availability, 
processing integrity, and confidentiality. The SOC reports for Azure DevOps are available through the [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuide?docTab=4ce99610-c9c0-11e7-8c2c-f908a777fa4d_SOC%20/%20SSAE%2016%20Reports).

## Steps you can take

Proper data protection requires your active engagement, as well as that of your administrators and users. Your project data stored within Azure DevOps is only as secure as the end-user access points. Match the level of permission strictness and granularity for those organizations with your project's sensitivity level.

### Classify your data

The first step is to classify your data. Classify data based on sensitivity and risk
horizon, and the damage that might occur if it gets compromised. Many
enterprises have existing classification methods that can be reused when
projects move to Azure DevOps. For more information, you can download the "Data classification for cloud readiness" document from Microsoft Trustworthy Computing.

### Adopt Azure Active Directory

Use Azure Active Directory (Azure AD) to manage your organization's access to Azure DevOps. Azure AD provides another way to improve the security of your users' credentials. Azure AD allows your IT department to manage its end-user access policy, password complexity, password refreshes, and expiration if the user leaves your organization. Through Active Directory federation, you can directly link Azure AD to your organization's central directory, so you have only one location to manage these details for your enterprise. 

The following table compares Microsoft account and Azure AD characteristics relative to Azure DevOps access:

| Properties                            | Microsoft account                        | Azure AD  |
| :-------------------------------------|:---------------------------|:-----|
| Identity creator      | User | Organization |
| Single username / password for all work assets      | No      |   Yes |
| Password lifetime & complexity control | User      |    Organization|
| Azure DevOps membership limits | Any Microsoft account (MSA) | Organization's directory
| Traceable identity | No | Yes
| Organization & IP ownership | Unclear | Organization
| Two-factor authentication enrollment | User | Organization
| Device-based conditional access | No | Organization

Learn more about [configuring this support for your organization](../accounts/access-with-azure-ad.md).

### Require two-factor authentication

You might want to restrict access to your organization by requiring more than one factor to sign in. You can require multiple factors with Azure AD. For example, you can require phone authentication, in addition to a username and password, for all authentication requests.

### Use BitLocker

For sensitive projects, you can use BitLocker on your Windows laptop or desktop computer. BitLocker encrypts the entire drive on which Windows and your data reside. When BitLocker is enabled, it automatically encrypts any file you save on that drive. If your laptop or desktop machine falls into the wrong hands, BitLocker prevents unauthorized access of local copies of data from your projects.

### Limit use of alternate authentication credentials

The default authentication mechanism for Git-related tooling is alternate authentication (sometimes referred to as basic authentication). This mechanism allows the end user to set up an alternate username and password for use during Git command-line operations. This username and password combination can also be used to access any other data for which that user has permissions. By its nature, alternate authentication credentials are less secure than the default federated authentication.

You can still make choices for increased security. All communication gets sent over HTTPS, and there are password complexity requirements. Your organization should continue to evaluate whether additional policies are required to meet your project security requirements. You can disable alternate authentication credentials altogether if you decide that it doesn't meet your organization's security requirements. For more information, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md).

### Secure access to your organization

Azure AD provides the ability for administrators to control access to Azure resources and applications such as Azure DevOps. With conditional access control in place, Azure AD checks for the specific conditions you set for a user to access an application. After access requirements are met, the user is authenticated and can access the application.

Azure DevOps supports enforcing certain types of conditional access policies (for example, IP fencing) for custom Azure DevOps authentication mechanisms. These mechanisms include personal access tokens, alternate authentication, OAuth, and SSH keys. If your users are accessing Azure DevOps through a third-party client, only IP-based policies (IPv4 based only) are honored. 

## Additional resources

- [Azure DevOps home page](https://azure.microsoft.com/services/devops/)
- [Azure DevOps data location](data-location.md)
- [Microsoft privacy statement](https://privacy.microsoft.com/privacystatement)
- [Azure DevOps support](https://developercommunity.visualstudio.com/spaces/21/index.html)
- [Features and services included with Azure DevOps](../../user-guide/services.md)
- [Azure trust center](https://azure.microsoft.com/support/trust-center/)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)

