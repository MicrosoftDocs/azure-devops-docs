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
ms.date: 02/17/2025
monikerRange: 'azure-devops'
---
# Data protection overview

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps Services is a cloud-hosted application for your development projects, from planning through deployment. Based on the on-premises capabilities, with more cloud services, we manage your source code, work items, builds, and tests. Azure DevOps uses platform as a service (PaaS) infrastructure and many Azure services, including Azure SQL, to deliver a reliable, globally available service for your development projects.

This article discusses the steps that Microsoft takes to help keep your projects safe, available, secure, and private. It describes the role that you play in keeping your projects safe and secure.

This article is for organization administrators and IT professionals who manage their project assets daily. It's most useful to individuals who are already familiar with Azure DevOps and want to know more about how Microsoft protects stored assets in Azure DevOps.

## Our commitment

Microsoft helps to ensure that your projects remain safe
and secure, without exception. When you store your projects in Azure DevOps, they benefit from multiple layers of security and governance technologies, operational practices, and compliance policies. We enforce data privacy and integrity both at rest and in transit.

The threats that you face are in four basic categories: data availability, service availability, service security, and data privacy. This article explores specific threats within each category and explains what Azure DevOps does to address them. The article begins by describing how data is stored and how Azure DevOps manages access to your data.

Data protection requires the active engagement of administrators and users who know what steps to take to protect your assets from unauthorized disclosure and tampering. Be explicit when you grant permissions to user access points, so only the right people access data within Azure DevOps.

You should consider all data to be potentially at risk, no matter where it's located or how it's being used. This statement is true for both data stored in the cloud and data stored in a private datacenter. It's important to classify your data, its sensitivity and risk, and the damage that it might do if it becomes compromised. Also, categorize your data relative to an overall policy for managing information security.

## Built on Azure

![Diagram of the high-level architecture of Azure DevOps.](media/data-protection/Figure1_VSOArchitecture.png)

We host Azure DevOps entirely in Azure datacenters. Azure DevOps uses many core Azure services, including compute, storage, networking, Azure SQL, identity and access management, and Azure Service Bus.

Azure DevOps uses Azure Storage as the primary repository for service metadata and customer data. Depending on the type of data and the storage and retrieval requirements, Azure DevOps uses Azure Blob Storage and Azure SQL Database storage.

To help you understand the Azure DevOps Services approach to data protection, here's some background on the storage services:

- [Azure Blob Storage](/azure/storage/blobs/storage-quickstart-blobs-dotnet) stores large chunks of unstructured data. All projects use this service. Data includes potentially sensitive or private information, like the contents of source files and attachments for work items. For most projects, most storage in use is this type of unstructured blob storage.

- [Azure SQL Database](/azure/azure-sql/database) stores the structured and transactional aspects of your organization, including project metadata, the versioned source-control history, and details of work items. Database storage gives you fast access to the important elements of your project. It provides indexes into the blob storage to look up files and attachments.

Administrators can manage access to resources by [granting or restricting permissions](/previous-versions/azure/devops/reference/process-templates/configure-initial-groups-teams-members-permissions) on user identities or groups. Azure DevOps uses federated authentication of user identities via [Microsoft Entra ID](../accounts/access-with-azure-ad.md) and Microsoft accounts.

During authentication, the user is routed to the authentication provider, where they provide their credentials. After the authentication provider verifies the user's credentials, Azure DevOps issues an authentication cookie to the user. This cookie allows the user to remain authenticated against Azure DevOps.

In this way, the user's credential information is never shared directly with Azure DevOps. For each Azure DevOps resource that the user tries to access, validation of permissions is based on the user's explicit permissions and on permissions that the user inherited through group membership.

Administrators can use access controls to help protect [access to the organization](../accounts/connect-organization-to-azure-ad.md), project collections, team projects, and team-scoped data and functionality. Administrators can also use access controls for specific assets like folders for version control and area paths for work items.

## Data availability

Azure DevOps uses many Azure Storage features to help ensure data availability if there's a hardware failure, service disruption, or regional disaster. Also, the Azure DevOps team follows procedures to help protect data from accidental or malicious deletion.

### Data redundancy

To help protect data during hardware or service failures, Azure Storage geo-replicates customer data between two regions in the same geographical location. For example, Azure Storage can geo-replicate data between North and West Europe or between North and South United States.

For Azure Blob Storage, customer data is replicated three times within a single region. Customer data is replicated asynchronously to a second region in the same geographical location. As such, Azure always maintains the equivalent of six copies of your data.

Having multiple copies enables you to fail over to a separate region if there's a major outage or disaster, while also having local redundancy for hardware failures within a region. For Azure SQL Database storage, daily backups are maintained offsite if there's a regional disaster.

Regarding data redundancy and failover:

- There's an inherent delta, measured in minutes, when Microsoft replicates your data between the primary and secondary region.
- Failover to the secondary region is a decision that Microsoft must make centrally, because it affects all customers on a particular scale unit. Except in extreme circumstances, Microsoft opts to avoid failing over so that customer data isn't lost.
- Azure DevOps offers a service-level agreement (SLA) of 99.9 percent uptime. Azure DevOps refunds a portion of the monthly charges if it misses that SLA in a specific month.
- Because there's only one region in Brazil, customer data in Brazil is replicated to the South Central US region for disaster recovery purposes.

### Mistakes happen

To safeguard against accidental data loss, Microsoft employs point-in-time backups for both blobs stored in Azure Blob Storage and databases within Azure SQL Database. Each storage account maintains a separate copy of all blobs, with changes being appended to the existing data. These backups are immutable, eliminating the need to rewrite any existing storage during backup procedures.

Azure SQL Database includes standard backup features utilized by Azure DevOps. Your data is retained for 28 days, with these backups also being replicated in a paired region to facilitate recovery during a regional outage.

You can recover deleted organizations or projects within the 28-day window following deletion. But, once this time period elapses, these entities are permanently deleted and can't be restored. While these backups serve as a crucial component for disaster recovery, it's essential for customers to practice appropriate data management and backup strategies to ensure comprehensive protection of their data.

>[!IMPORTANT]
> - *Accidental deletion* here refers to scenarios that arise as a result of an incident on our services. It doesn't include customers' accidental deletion of assets (for example, repositories, work items, attachments, or artifacts).
> - We don't support restoring assets that customers accidentally delete. These backups are meant only for business continuity and to aid recovery from outage or disaster scenarios.
> - In rare cases, our deletion process might take up to 70 days due to backend retries and the need to delete data from multiple sources.

### Practice is critical

Having multiple backups of your data is good, but without practice, restoring can be unpredictable. People say that "backups never fail; the restores do." Though the statement is technically incorrect, the sentiment is right.

Microsoft regularly practices restoring datasets from backup. We regularly test geo-redundant storage from Azure. There are many combinations of disaster and data corruption scenarios. We continue to plan and run new tests for these scenarios regularly.

## Service availability

Azure DevOps offers distributed denial-of-service (DDoS) protections and live site response to help ensure that you have access to your organization and associated assets.

### DDoS protections

In some cases, a malicious DDoS attack can affect service availability. Azure has a DDoS defense system that helps prevent attacks against our service. It uses standard detection and mitigation techniques such as SYN cookies, rate limiting, and connection limits. The system is designed to withstand attacks not only from the outside but also from within Azure.

For application-specific attacks that can penetrate the Azure defense systems, Azure DevOps establishes application-level and organization-level quotas and throttling. This practice helps prevent any overuse of key service resources during an attack or accidental misuse of resources.

### Live site response

In rare circumstances, you might require a live site response to a problem with service availability. We have an operations team that's constantly available to rapidly identify the problem and to engage the necessary development team resources.

The development team resources then address the problem. They also aim to update the service status page within minutes of detecting a problem that affects the service. After development team resources address a problem, they identify the root cause and track the necessary changes to prevent similar problems in the future.

Azure DevOps processes for live site management focus on your experience and the health of the service. These processes minimize the time to detect, respond to, and mitigate problems. All engineering disciplines are involved and responsible, so continual improvements evolve out of direct experience. Monitoring, diagnostics, resiliency, and quality assurance processes then improve over time.

Live site management in Azure DevOps has three distinct tracks: telemetry, incident management, and live site review. Here's what these tracks entail:

![Image of the Azure DevOps Services process for live site management.](media/data-protection/figure-2-site-management-process.png)

The operations team also monitors the availability metrics for individual organizations. These metrics provide insights into specific conditions that might affect only some of our customers. Investigations into this data can often result in targeted improvements to address customer-specific issues. In some cases, Microsoft might even contact you directly to understand your experience and work with you to improve the service.

Microsoft publishes an SLA and provides a financial guarantee to ensure that we meet this agreement each month. For more information, see [SLA for Azure DevOps](https://azure.microsoft.com/support/legal/sla/azure-devops/v2_1/).

Sometimes, partner teams or dependencies have incidents that affect Azure DevOps. All partner teams follow similar approaches to identifying, resolving, and learning from these service outages.

## Service security

Service security requires constant vigilance, from proper design and coding techniques to operational factors. Microsoft actively invests in the prevention of security holes and in breach detection. If there's a breach, Microsoft uses security response plans to minimize data leakage, loss, or corruption. For more information, see [About security, authentication, and authorization](about-security-identity.md).

### Security by design

Azure DevOps is designed to be secure. Azure DevOps uses the Microsoft Security Development Lifecycle at the core of its development process. The Microsoft Operational Security Assurance program guides cloud operation procedures in Azure DevOps.

The Azure DevOps team has annual training requirements for all engineers and operations personnel. The team also sponsors informal meetings hosted by Microsoft engineers. After the team solves a problem that surfaces in a meeting, it shares the lessons learned with other teams.

The following methodologies specify the training requirements:

- Threat modeling during service design
- Following best practices for design and code
- Verifying security with standard tooling and testing
- Limiting access to operational and customer data
- Gating rollout of new features through a rigid approval process

A cloud service is only as secure as the host platform. Azure DevOps uses PaaS for much of its infrastructure. PaaS automatically provides regular updates for known security vulnerabilities.

Virtual machines hosted in Azure use infrastructure as a service (IaaS), such as for a [hosted build service](../../pipelines/agents/hosted.md). Such images receive regular updates to include the latest security patches available from Windows Update. The same update rigor applies for on-premises machines, including those machines used for deployment, monitoring, and reporting.

The Azure DevOps team conducts regular, security-focused penetration testing of Azure DevOps. Penetration testing tries to exploit the live production services and infrastructure of Azure DevOps by using the same techniques and mechanisms that malicious attackers use. The goal is to identify real-world vulnerabilities, configurations, errors, or other security gaps in a controlled process.

The team reviews the results of these tests to identify other areas of improvement and to increase the quality of the preventative systems and training. You can review the results of recent Azure DevOps penetration tests on the [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/ViewPage/TrustDocumentsV3?command=Download&downloadType=Document&downloadId=ce44654a-f397-4aab-a45c-876fe4dd9cbf&tab=7f51cb60-3d6c-11e9-b2af-7bb9f5d2d913&docTab=7f51cb60-3d6c-11e9-b2af-7bb9f5d2d913_Pen_Test_and_Security_Assessments).

### Credential security

Microsoft is committed to ensuring that your projects remain safe and secure, without exception. In Azure DevOps, your projects benefit from multiple layers of security and governance technologies, operational practices, and compliance policies. We enforce data privacy and integrity both at rest and in transit. In addition, we adhere to the following practices with respect to the credentials or secrets that Azure DevOps stores. To learn more about how to choose the right authentication mechanism, see [Guidance for authentication](../../integrate/get-started/authentication/authentication-guidance.md).

[!INCLUDE [alt-creds-deprecation-notice](../../includes/alt-creds-deprecation-notice.md)]

#### Personal access tokens (PATs)

* We store a hash of the PAT.
* Raw PATs generate in-memory on the server side. 32 bytes randomly generate through the RNGCryptoServiceProvider and get shared with the caller as a base-32-encoded string. This value is NOT stored.
* PAT hash generates in-memory on the server side as an *HMACSHA256Hash* of the raw PAT using a 64-byte symmetric signing key stored in our key vault. 
* Hash gets stored in our database.

#### Secure shell (SSH) keys

* We store a hash of the enclosing organization ID and the SSH public key.
* Raw public keys get provided directly by the caller over SSL.
* SSH hash generates in-memory on the server side as an *HMACSHA256Hash* of the organization ID and raw public key using a 64-byte symmetric signing key stored in our key vault.
* Hash gets stored in our database.

#### OAuth credentials (JWTs)

* OAuth credentials issue as fully self-describing JSON web tokens (JWTs) and aren't stored in our service.
* The claims in JWTs issued and presented to our service get validated using a certificate stored in our key vault.

### Reporting security flaws

If you believe that your penetration testing revealed a potential security flaw related to the Azure DevOps service, report it to Microsoft within 24 hours. For more information, see the [Microsoft webpage for reporting a computer security vulnerability](https://technet.microsoft.com/organizations/security/ff852094).

> [!IMPORTANT]
> Although you don't need to notify Microsoft about penetration testing activities, you must comply with the [Microsoft Penetration Testing Rules of Engagement](https://technet.microsoft.com/mt784683).

### Bounty program

Azure DevOps participates in the Microsoft Bug Bounty program. This program rewards security researchers who report problems to us, and it encourages more people to help keep Azure DevOps secure. For more information, see [Microsoft Azure DevOps Bounty Program](https://www.microsoft.com/msrc/bounty-azure-devops).

### Restricting access

Microsoft maintains strict control over who gets access to our production environment and customer data. We grant access at the level of least privilege required, and only after verification of a user's justifications. If a team member needs access to resolve an urgent problem or deploy a configuration change, they must apply for just-in-time access to the production service. Access is revoked as soon as the situation is resolved.

We track and monitor access requests and approvals in a separate system. All access to the system correlates against these approvals. If we detect unapproved access, we alert the operations team to investigate.

We use two-factor authentication for all remote system access. If the username and password for one of our developers or operations staff are stolen, the data remains protected. More authentication checks via smart card or a phone call to a preapproved number must occur before we permit any remote access to the service.

To manage and maintain the service, Microsoft uses secrets such as RDP passwords, SSL certificates, and encryption keys. These secrets are all managed, stored, and transmitted securely through the Azure portal. Any access to these secrets requires specific permission, which is logged and recorded securely. All secrets are rotated on a regular cadence, and we can rotate them on demand if there's a security event.

The Azure DevOps operations team uses hardened administrator workstations to manage the service. These machines run a minimal number of applications and operate in a logically segmented environment.

Operations team members must provide specific credentials with two-factor authentication to access the workstations. All access is monitored and securely logged. To isolate the service from outside tampering, we don't permit applications such as Outlook and Office, because they're often targets of spear phishing and other types of attacks.

### Intrusion protection and response

We encrypt data via HTTPS and SSL to help ensure that it isn't intercepted or modified while in transit between you and Azure DevOps. Data that we store on your behalf in Azure DevOps is encrypted as follows:

- Data stored in Azure SQL databases is encrypted via [transparent data encryption](/sql/relational-databases/security/encryption/transparent-data-encryption). This feature helps protect against malicious activity by doing real-time encryption of the database, associated backups, and transaction log files at rest.

- Azure Blob Storage connections are encrypted to help protect your data in transit. For data at rest stored in Azure Blob Storage, Azure DevOps uses [service-side encryption](/azure/storage/common/storage-service-encryption).

The Azure DevOps team uses the Azure infrastructure to log and monitor key aspects of the service. Logging and monitoring help ensure that activities within the service are legitimate, and they help detect breaches or attempted breaches.

All deployment and administrator activities are securely logged, as is operator access to production storage. The log information is automatically analyzed, and any potentially malicious or unauthorized behavior raises real-time alerts.

When the Azure DevOps team identifies a possible intrusion or high-priority security vulnerability, it has a clear response plan. This plan outlines responsible parties, required steps for securing customer data, and instructions on how to engage with security experts at Microsoft. The team also notifies any organization owners if data was disclosed or corrupted, so that they can take appropriate steps to remedy the situation.

To help combat emerging threats, Azure DevOps employs an *assume breach* strategy. A highly specialized team of security experts within Microsoft assumes the role of sophisticated adversaries. This team tests breach detection and response, to accurately measure readiness and the impacts of real-world attacks. This strategy strengthens threat detection, response, and defense of the service. It also allows the team to validate and improve the effectiveness of the entire security program.

### Ransomware attack protection

Azure DevOps uses Azure controls to help prevent, detect, and respond to a ransomware attack. For more information about how Azure helps protect customers from ransomware attacks, see [Ransomware protection in Azure](/azure/security/fundamentals/ransomware-protection).

## Data privacy

You should have confidence that we're handling your data appropriately and for legitimate uses. Part of that assurance involves carefully restricting usage.

### General Data Protection Regulation

The General Data Protection Regulation (GDPR) is the biggest change in data protection laws in Europe since the 1995 introduction of the European Union (EU) Data Protection Directive 95/46/EC. For more information about GDPR, see the [overview page in the Microsoft Trust Center](https://www.microsoft.com/TrustCenter/Privacy/gdpr/default.aspx).

### Data residency and sovereignty

Azure DevOps is available in the following eight geographical locations across the world: United States, Canada, Europe, United Kingdom, India, Australia, Asia Pacific, and Brazil. By default, your organization is assigned to your closest location. However, you can choose a different location when you create your organization. If you change your mind later, you can migrate the organization to a different location with the assistance of Microsoft support.

Azure DevOps doesn't move or replicate customer data outside the chosen location. Instead, your data is geo-replicated to a second region within the same location. The only exception is Brazil, which replicates data to the South Central US region for disaster recovery purposes.

> [!NOTE]
> For builds and releases that run on Microsoft-provided macOS agents, your data is transferred to a GitHub datacenter in the United States.

For more information, see [Data locations for Azure DevOps](data-location.md).

### Law enforcement access

In some cases, third parties such as law enforcement entities might approach Microsoft to obtain access to customer data stored in Azure DevOps. We try to redirect the requests to the organization owner for resolution. When a court order compels Microsoft to disclose customer data to a third party, Microsoft makes a reasonable effort to notify the organization owner in advance, unless we're legally prohibited from doing so.

Some customers require their data storage in a particular geographical location to ensure a specific legal jurisdiction for any law enforcement activities. All customer data, such as source code, work items, test results, and geo-redundant mirrors and offsite backups, is maintained within one of the previously mentioned locations.

### Microsoft access

From time to time, Microsoft employees need to obtain access to customer data stored in Azure DevOps. As a precaution, all employees who have (or might ever have) access to customer data must pass a background check that includes previous employment and criminal convictions. We permit access to the production systems only when there's a live site incident or other approved maintenance activity, which is logged and monitored.

Because not all data within our system is treated the same way, we classify data into these types:

- **Customer data**: What you upload to Azure DevOps.
- **Organization data**: Information that you submit when you sign up for or administer your organization.
- **Microsoft data**: Information required for or collected through the operation of the service.

Based on the classification, we control usage scenarios, geo-location requirements, access restrictions, and retention requirements.

### Microsoft promotional use

Microsoft occasionally wants to contact customers to let them know about more features and services that might be useful. Because not all customers want to be contacted about these offers, you can opt in and opt out of marketing email communications.

Microsoft never uses customer data to target specific offers for specific users or organizations. Instead, we use organization data and aggregate usage statistics at the organization level to determine groups that should receive specific offers.

### Managing privacy policies for admins to control user feedback collection

The feedback toggle feature allows Azure DevOps organization owners to control whether users are prompted to provide feedback and submit it. This feature is essential for ensuring that feedback practices align with your organization’s privacy and governance policies.

## Building confidence

You can be confident in other efforts that Microsoft makes on behalf of Azure DevOps. These efforts include internal adoption policies at Microsoft, the level of transparency into the state of our service, and progress toward receiving certification of our systems for managing information security.

### Internal adoption

Microsoft teams are adopting Azure DevOps internally. The Azure DevOps team moved into an organization in 2014 and uses it extensively. We established guidelines to enable the adoption plans for other teams.

Large teams move more gradually than smaller ones, because of their investments in existing DevOps systems. For teams that move quickly, we established a project classification approach. It assesses risk tolerance, based on project characteristics, to determine if the project is appropriate for Azure DevOps. For larger teams, the adoption typically occurs in phases, with more planning.

More requirements for internal projects include associating the organization with Microsoft Entra ID to ensure the proper user-identity lifecycle and password complexity. Projects that are more sensitive also require two-factor authentication.

### Compliance certifications

You might be interested in understanding third-party evaluation of our procedures for data security. Azure DevOps achieved the following certifications:

- ISO 27001:2013
- ISO 27018:2019
- ISO 26262:2023
- Health Insurance Portability and Accountability Act (HIPAA)
- Business Associate Agreement (BAA)
- EU Model Clauses
- System and Organization Controls (SOC) 1 Type 2
- SOC 2 Type 2
- Germany C5
- Australia IRAP
- ENS-Spain

The SOC audit for Azure DevOps covers controls for data security, availability, processing integrity, and confidentiality. The SOC reports for Azure DevOps are available through the [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuide?docTab=4ce99610-c9c0-11e7-8c2c-f908a777fa4d_SOC%20/%20SSAE%2016%20Reports).

The Consensus Assessment Initiative Questionnaire (CAIQ) helps organizations assess and evaluate the security practices and capabilities of cloud service providers. In alignment with our commitment to security and transparency, we recently completed the CAIQ assessment for Azure DevOps. We invite you to review the full report on the [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuide?docTab=4ce99610-c9c0-11e7-8c2c-f908a777fa4d_SOC%20/%20SSAE%2016%20Reports).

## Steps you can take

Proper data protection requires active engagement from you, your administrators, and your users. Your project data stored in Azure DevOps is only as secure as the user access points. Match the level of permission strictness and granularity for those organizations with your project's sensitivity level.

### Classify your data

The first step is to classify your data. Classify data based on sensitivity and risk horizon, along with the damage that might occur if compromised. Many enterprises have existing classification methods that they can reuse when projects move to Azure DevOps. For more information, you can download [Data classification for cloud readiness](https://download.microsoft.com/download/0/a/3/0a3be969-85c5-4dd2-83b6-366aa71d1fe3/data-classification-for-cloud-readiness.pdf) from Microsoft Trustworthy Computing.

<a name='adopt-azure-active-directory'></a>

### Adopt Microsoft Entra ID

Use Microsoft Entra ID to manage your organization's access to Azure DevOps. Microsoft Entra ID provides another way to improve the security of your users' credentials.

Microsoft Entra ID allows your IT department to manage its user access policy, password complexity, password refreshes, and expiration when users leave your organization. Through Active Directory federation, you can directly link Microsoft Entra ID to your organization's central directory, so you have only one location to manage these details for your enterprise.

The following table compares Microsoft account and Microsoft Entra characteristics relative to Azure DevOps access:

| Property                            | Microsoft account                        | Microsoft Entra ID  |
| :-------------------------------------|:---------------------------|:-----|
| Identity creator      | User | Organization |
| Single username and password for all work assets      | No      |   Yes |
| Password lifetime and complexity control | User      |    Organization|
| Azure DevOps membership limits | Any Microsoft account | Organization's directory
| Traceable identity | No | Yes
| Organization and IP ownership | Unclear | Organization
| Two-factor authentication enrollment | User | Organization
| Device-based conditional access | No | Organization

[Learn more about configuring this support for your organization](../accounts/access-with-azure-ad.md).

### Require two-factor authentication

You might want to restrict access to your organization by requiring more than one factor to sign in. You can require multiple factors by using Microsoft Entra ID. For example, you can require phone authentication, in addition to a username and password, for all authentication requests.

### Use BitLocker

For sensitive projects, you can use BitLocker on your Windows laptop or desktop computer. BitLocker encrypts the entire drive on which Windows and your data reside. When BitLocker is enabled, it automatically encrypts any file you save on that drive. If your computer falls into the wrong hands, BitLocker prevents unauthorized access of local copies of data from your projects.

### Limit use of alternate authentication credentials

The default authentication mechanism for Git-related tooling is alternate authentication (sometimes called *basic authentication*). This mechanism allows a user to set up an alternate username and password for use during Git command-line operations. The user can use this username/password combination to access any other data for which that user has permissions. By its nature, alternate authentication credentials are less secure than the default federated authentication.

You can still make choices for increased security. All communication is sent over HTTPS, and there are password complexity requirements. Your organization should continue to evaluate whether it needs more policies to meet your projects' security requirements.

You can disable alternate authentication credentials if you decide that it doesn't meet your organization's security requirements. For more information, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md).

### Secure access to your organization

Administrators can use Microsoft Entra ID to control access to Azure resources and applications, such as Azure DevOps. With conditional access control in place, Microsoft Entra ID checks for the specific conditions that you set for a user to access an application. After the user meets access requirements, the user is authenticated and can access the application.

Azure DevOps supports enforcing certain types of conditional access policies (for example, IP fencing) for custom Azure DevOps authentication mechanisms. These mechanisms include personal access tokens, alternate authentication, OAuth, and Secure Shell (SSH) keys. If your users access Azure DevOps through a third-party client, only IPv4-based policies are honored.

## More resources

- [Azure DevOps home page](https://azure.microsoft.com/services/devops/)
- [Data locations for Azure DevOps](data-location.md)
- [Microsoft privacy statement](https://privacy.microsoft.com/privacystatement)
- [Azure DevOps Support](https://developercommunity.visualstudio.com/spaces/21/index.html)
- [Features and services included with Azure DevOps](../../user-guide/services.md)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
