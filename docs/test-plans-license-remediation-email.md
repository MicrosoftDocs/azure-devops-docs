# Azure Test Plans license remediation

## At a glance

- Users in your org who already have Azure Test Plans licenses aren't affected.
- Org admins have a grace period until **October 1, 2026** to take action and avoid disruptions.
- All affected orgs and users will also see in-app notifications about this change.
- Org admins are notified first, with approximately **eight weeks** to review affected users and start any required internal processes.
- Starting mid-May 2026, affected end users and admins will see in-app banners on Azure Test Plans pages indicating they'll soon lose access to paid features.
- Any affected users not assigned an Azure Test Plans license by **October 1, 2026** will lose access to advanced Azure Test Plans features.

## Overview

After the Test Manager Extension (TME) was deprecated, some Azure DevOps Services users retained advanced Azure Test Plans access without a paid license. This is a compliance and access-management issue. By **October 1, 2026**, Azure DevOps will remediate these incorrect access levels so that Test Plans access matches each user's assigned license.

**Affected users** are those who accessed at least one paid Azure Test Plans feature without an assigned Azure Test Plans license.

## Required actions for org admins

### Summary

1. Identify the affected users in your org.
2. Communicate internally and evaluate which affected users need a paid Azure Test Plans license.
3. Assign Azure Test Plans licenses to the required users before **October 1, 2026** to avoid operational disruptions.

### Phase 1 — First eight weeks (admin-only messaging), through mid-May 2026

#### Identify affected users

1. Ensure auditing is enabled in your org. Go to **Organization Settings** > **Policies** and verify that **Log Audit Events** is on. For more information, see [Access, export, and filter audit logs](https://learn.microsoft.com/azure/devops/organizations/audit/azure-devops-auditing).

2. Review the Auditing log to identify affected users.

3. Set the timeframe to at least 30 days and export the logs.

4. Filter for the following values:

   | Field | Value |
   |-------|-------|
   | **Area** | TestPlans |
   | **Category** | Access |
   | **Details** | Accessing Azure Test Plans without a license. |

5. From the filtered audit lines, extract the unique **Actor** entries. These are your affected users.

> **Note:** The TestPlans audit area is new and is deploying gradually across orgs. Logs start populating only after the new logic deploys to your org. Check the logs again after a few days, as more actors might appear.

#### Determine which users need a license

1. Validate the list of affected users against your teams' business requirements. Users who create and manage test plans, test suites, test cases, parameters, and configurations need a paid license. Users who only execute test cases don't need one. For more information, see [Azure Test Plans access levels](https://aka.ms/yourlink).

2. Assign Azure Test Plans licenses to the required users before the end of the grace period (**October 1, 2026**). To assign licenses, go to **Organization Settings** > **Users** and update the access level. You can also manage licenses through Visual Studio subscriptions.

3. (Optional) Draft and schedule an internal communication to team leaders explaining the change, the timeline, and how to request a new license.

By the end of Phase 1, all affected users should be identified through audit logs and mapped to a license decision (license required or not required).

### Phase 2 — Remaining grace period (admin + end-user messaging), mid-May through October 1, 2026

After the admin-only notification period, all affected users will start seeing in-product banners on Azure Test Plans pages that normally require paid access. End users and admins with access to these pages will see similar messages.

*[Insert screenshot of in-product banner here]*

1. Finalize which users need paid licenses and complete the assignments.

2. Affected users who are assigned a license before the end of the grace period will stop seeing the informational banners.

3. Affected users who aren't assigned a Test Plans license will continue seeing the informational messages until the end of the grace period and will then lose access to paid Azure Test Plans features.

Before the end of the grace period, confirm that:

- All required users are licensed.
- Users understand which Azure Test Plans features they'll retain access to.

### Phase 3 — After the grace period

By **October 1, 2026**, all affected users' Azure Test Plans access will automatically match their assigned license. Users with an Azure Test Plans license will retain access to all paid features.

## FAQs

**Q: Are Azure DevOps Server orgs affected by this remediation?**

A: No. This remediation applies only to Azure DevOps Services.

**Q: Are there affected users who might not show up in the audit logs?**

A: Yes. The TestPlans audit area is new, and logs are captured only after the code change deploys to your org. It's also possible that a user's activity isn't captured for weeks if they don't access any paid Azure Test Plans features during that time.

**Q: Will affected users who don't show up in the audit logs still have their access remediated?**

A: Yes. These users also retained advanced Azure Test Plans access without a paid license. Their access will be remediated regardless of whether they appear in the audit logs.

**Q: When do audit logs for the TestPlans area start populating?**

A: Audit logs populate from the moment the new logic is deployed to your org. Events from past months aren't captured. Allow a few days for logs to populate and check again for new actors.

**Q: How can I tell which users still need a license?**

A: Users who create and manage test plans, test suites, test cases, parameters, and configurations need a license. Users who only execute test cases don't need one. For more information, see [Azure Test Plans access levels](https://aka.ms/yourlink).

**Q: What happens to existing test plans created by affected users who lose access?**

A: Existing test plans aren't deleted. Affected users without a license will lose access to advanced features but can still view test-related data in read-only mode. A licensed user can continue managing those test plans.

**Q: Can the grace period be extended?**

A: No. The **October 1, 2026** deadline is fixed. Assign licenses before that date to avoid disruption.

**Q: What is the cost for each user's Azure Test Plans license?**

A: See the [Azure DevOps pricing page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/). If applicable, sync with your Microsoft Customer Success Account Manager.
