---
title: Troubleshoot Copilot code review
titleSuffix: Azure Repos
description: Get answers to common questions and troubleshoot issues with GitHub Copilot code review billing, data handling, and custom instructions in Azure Repos.
ms.service: azure-devops-repos
ms.topic: troubleshooting
ai-usage: ai-assisted
ms.date: 08/06/2026
ms.author: chcomley
author: chcomley
---

# Troubleshoot Copilot code review

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

## Billing and credits

### Q: Where can I find the list prices that I'm charged for tokens?

A: See [Models and pricing](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing#anthropic) in the GitHub Copilot documentation.

### Q: What factors influence the number of tokens consumed by a code review?

A: Token consumption depends on factors such as the size of the repository, the size of the change, and the complexity of the code being reviewed.

### Q: Do credits I purchase with Copilot subscriptions count toward code review usage in Azure DevOps? Can I use AI credits from a GitHub Copilot plan?

A: No, usage in Azure DevOps doesn't use AI credits from GitHub Copilot plans.

## Data handling and privacy

### Q: Is customer code or pull request review content used to train or improve foundation models?

A: No. Interaction data used for Copilot code review, including pull request diffs, prompts, responses, suggestions, and related review context, isn't used to train or improve foundation models.

### Q: What customer data is retained during or after a code review?

A: Data handling and retention follow GitHub Copilot policy documentation. Azure Repos doesn't publish a separate retention schedule for Copilot code review.

### Q: Are pull request diffs, prompts, generated suggestions, or telemetry stored beyond request processing? If retained, what are the retention periods?

A: For current storage and retention details, including any retention-related policy updates, see [GitHub Copilot trust and privacy documentation](https://copilot.github.trust.page/faq). Azure Repos doesn't currently publish a separate feature-specific retention period table for Copilot code review.

### Q: Where is customer content processed and stored for Copilot code review?

A: Copilot code review in Azure Repos is powered by GitHub Copilot. Data residency for GitHub Copilot doesn't align with Azure DevOps organization data residency boundaries for this preview feature. For example, if your Azure DevOps organization is hosted in the EU, Copilot code review processing might still occur in another geography, such as the United States.

### Q: Does GitHub Copilot Data Residency apply to Copilot code review for Azure Repos?

A: For this preview feature, don't assume Azure DevOps organization geography determines Copilot code review processing geography. Review [GitHub Copilot trust and privacy documentation](https://copilot.github.trust.page/faq) for current data residency scope and boundaries.

### Q: Does Copilot code review for Azure Repos follow the same data handling commitments as GitHub Copilot Business and GitHub Copilot Enterprise?

A: Yes, Copilot code review in Azure Repos follows GitHub Copilot data handling policies. For current commitments, see [GitHub Copilot trust and privacy documentation](https://copilot.github.trust.page/faq).

### Q: What customer-facing compliance documentation can I share with security and compliance teams?

A: Use these official references:

- [GitHub Copilot Trust Center FAQ](https://copilot.github.trust.page/faq)
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [About GitHub Copilot code review](https://docs.github.com/copilot/using-github-copilot/code-review/using-copilot-code-review)

## Preview limitations

### Q: Are there preview-specific limitations or exceptions I should be aware of?

A: Yes. Copilot code review for Azure Repos is in limited preview:

- Preview features can change or be removed without notice.
- Preview features have no Service Level Agreement (SLA) and limited support.
- Data residency for this feature doesn't align with Azure DevOps organization data residency boundaries.

## Troubleshoot failed code reviews

### Q: What should I do when a Copilot code review fails?

A: Review the failed job logs:

1. Go to **Organization settings** > **Agent pools**.
1. Select the agent pool used to run Copilot code reviews. The default agent pool is **Azure Pipelines**.
3. Find and open the failed job.
4. Review the raw logs in JSON format to identify the cause of the failure.

## Troubleshoot custom instructions

### Q: Copilot isn't following my custom instructions

A: Verify that the `.github/copilot-instructions.md` file is committed to your default branch. Check that instructions are written in clear, concise Markdown and focus on actionable patterns rather than abstract guidelines. Request a new review to apply updated instructions to existing pull requests.

### Q: My custom instructions are too aggressive or lenient

A: Review the types of comments Copilot is generating. Adjust your instructions to be more specific about which issues to prioritize, and use examples to clarify edge cases.

## Related content

- [Get started with Copilot code review](copilot-code-reviews.md)
- [Configure Copilot code review instructions](configure-copilot-code-review-instructions.md)
- [About GitHub Copilot code review](https://docs.github.com/copilot/using-github-copilot/code-review/using-copilot-code-review)
- [GitHub Copilot trust and privacy documentation](https://copilot.github.trust.page/faq)
