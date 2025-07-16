---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/17/2025
ms.topic: include
---

### Markdown support for comments  

We’re excited to announce the general availability of the **Markdown editor for work item comments**! You can now use full Markdown syntax and enjoy a modern editing experience when writing new comments, bringing consistency with other Markdown-enabled areas across the product.

Existing large text fields will remain unchanged, but you can choose to convert them to Markdown individually as needed.
  
![53761898-4f61-4c95-a6d2-a36ed38729cd.gif](https://dev.azure.com/mseng/b924d696-3eae-4116-8443-9a18392d8544/_apis/wit/attachments/176fc614-520e-430d-8cbe-0463e9a20b1d?fileName=53761898-4f61-4c95-a6d2-a36ed38729cd.gif) 
 
[Community Suggestion Ticket](https://developercommunity.visualstudio.com/t/make-it-easy-to-insert-tables-into-a-work-item-des/1108159)

> [!NOTE]
> We are rolling this feature out gradually, region by region. We expect it to be available to all customers within 4–5 weeks.

### Bug fixes improving GitHub integration and security

This sprint, we resolved several critical bugs to improve the security and reliability of Azure Boards GitHub integrations:

*   Fixed multiple issues related to access token handling, including inability to revoke tokens, use of over-permissive scopes, and lack of token verification
*   Addressed privilege escalation vulnerabilities in both the GitHub connection and branch creation flows    
*   Removed persistent storage of GitHub PATs after disconnection to prevent unintended access    
*   Eliminated use of wildcard origins in CORS configuration to enforce stricter security controls    
*   Improved secret management by rotating GitHub client secrets and stopping global sharing across organizations    
*   Enhanced logging and auditability when removing service connections    
*   Resolved potential information leaks caused by misconfigured webhooks

### New Boards Hub now enabled for all customers

As of June 23rd, the New Boards Hub is now enabled for all customers across all regions. The legacy Boards experience is no longer available.

This marks a major milestone in a journey that began back in April 2022. While we’ve come a long way, we still have a backlog of minor usability issues to address. Our team remains focused on fixing bugs and continually improving the experience.

We’ll continue iterating and resolving usability feedback in the coming months, with the goal of addressing as much as possible before exploring support for the on-premises version of Azure DevOps.

If you have feedback to provide or need to report an issue, please create a [Feedback Ticket](https://developercommunity.visualstudio.com/AzureDevOps).