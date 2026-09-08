---
title: Configure Copilot code review instructions
titleSuffix: Azure Repos
description: Use custom and path-scoped instructions and agent skills to tailor Copilot code review feedback in Azure Repos pull requests.
ms.service: azure-devops-repos
ms.topic: how-to
ai-usage: ai-assisted
ms.date: 08/03/2026
ms.author: chcomley
author: chcomley
---

# Configure Copilot code review instructions

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [copilot-code-review-preview-note](includes/copilot-code-review-preview-note.md)]

Use custom instructions to tailor Copilot's code review behavior at the organization, project, and repository levels. Custom instructions guide Copilot to focus on specific coding standards, best practices, or organizational policies.

## Prerequisites

| Category | Requirements |
|--|--|
| **Feature enablement** | Copilot code review must be [enabled](copilot-code-reviews.md) at the organization, project, and repository levels. |
| **Organization permissions** | Project Collection Administrator permissions to add or modify organization-level custom instructions. |
| **Project permissions** | Project Administrator permissions to add or modify project-level custom instructions. |
| **Repository permissions** | Push or administrator permissions to the repository to add or modify repository-level custom instructions. |

## Custom instruction scopes

You can define custom instructions at multiple scopes:

- **Organization level:** Baseline standards that apply across all projects.
- **Project level:** Team- or project-specific standards.
- **Repository level:** Repository-specific standards in `.github/copilot-instructions.md` or `.azuredevops/copilot-instructions.md`.

When instructions exist at multiple scopes, Copilot uses all applicable instructions during review.

> [!NOTE]
> Copilot reads repository-level and path-scoped instruction files from the pull request's target branch only. Changes to instruction files in the pull request don't affect its review. Copilot uses the changes only after they're merged into the target branch.

### Organization and project custom instructions

Configure organization-level and project-level custom instructions in Azure DevOps settings. Use these scopes for broad policies, such as security requirements, compliance rules, or language conventions shared by multiple repositories.

### Repository custom instructions file

Store custom instructions in either `.github/copilot-instructions.md` or `.azuredevops/copilot-instructions.md` in the root of your repository. Copilot reads this file during each review to understand your repository's specific guidelines.

```text
.github/
   copilot-instructions.md
   instructions/
      api.instructions.md

.azuredevops/                       # same files work here too
   copilot-instructions.md
   instructions/
      api.instructions.md
```

### Create custom instructions

1. In your repository, create a `.github` or `.azuredevops` folder if one doesn't already exist.
1. Create a new file named `copilot-instructions.md` in the `.github` or `.azuredevops` folder.
1. Add your custom instructions in Markdown format.
1. Commit and push the file to your repository.

## Add path-scoped instructions

Use path-scoped instruction files when you want different rules for specific folders, file types, or technologies.

- Create one or more `*.instructions.md` files in either `.github/instructions/` or `.azuredevops/instructions/`.
- Add YAML front matter with an `applyTo` value that targets matching files.
- Keep guidance focused on one language or concern per file.

Copilot applies path-scoped rules only to changed files that match the `applyTo` patterns.

### Path-scoped file format

```markdown
---
applyTo: "**/*.ts,**/*.tsx"
---

## TypeScript standards

- Avoid `any`; prefer `unknown` or a specific type.
- Prefer `const`; avoid `var`.
- Use optional chaining (`?.`) and nullish coalescing (`??`) where appropriate.
```

### applyTo pattern examples

- `applyTo: "**"` applies to all files.
- `applyTo: "**/*.cs"` applies to all C# files.
- `applyTo: "**/*.sql,**/Settings.xml"` applies to multiple patterns.

If a path-scoped file doesn't include `applyTo`, Copilot skips that file.

### Custom instructions best practices

- **Be specific:** Provide clear, actionable guidance for the types of issues Copilot should flag.
- **Focus on high-impact areas:** Prioritize code quality, security, and performance concerns relevant to your codebase.
- **Include examples:** When appropriate, provide code examples of issues to look for or patterns to avoid.
- **Keep it concise:** Copilot processes the entire file for each review, so be direct and avoid verbose explanations.
- **Update regularly:** Review and update instructions as your coding standards evolve.

### Example custom instructions

```markdown
# Copilot code review instructions

## Security focus
- Flag any hardcoded credentials, API keys, or sensitive data
- Identify potential SQL injection or XSS vulnerabilities
- Check for secure use of cryptographic functions

## Performance considerations
- Suggest database query optimizations
- Identify N+1 query problems
- Flag inefficient loops or algorithms

## Team coding standards
- Enforce naming conventions (camelCase for variables, PascalCase for classes)
- Check for proper error handling and logging
- Ensure consistent use of async/await patterns

## Documentation requirements
- Flag missing or incomplete function documentation
- Verify that complex logic includes explanatory comments
```

## Organization level

Add custom instructions at the organization level to define broad review standards across your enterprise.

Organization-level instructions influence Copilot code review for all projects and all repositories in that organization, so use them for requirements that every team should follow.

:::image type="content" source="media/copilot-code-reviews/organization-custom-instructions.png" alt-text="Screenshot of organization-level custom instructions configuration showing settings that apply to all projects and repositories in an organization." lightbox="media/copilot-code-reviews/organization-custom-instructions.png":::

## Project level

Add custom instructions at the project level to define shared review standards across all project repositories.

Project-level instructions influence Copilot code review for all repositories in that project, so use them for conventions that every team in the project should follow.

:::image type="content" source="media/copilot-code-reviews/project-custom-instructions.png" alt-text="Screenshot of project-level custom instructions configuration showing settings that apply to all repositories in a project." lightbox="media/copilot-code-reviews/project-custom-instructions.png":::

## Order of precedence

When instructions overlap, Copilot applies them in this order of precedence:

1. Repository-level instructions
1. Project-level instructions
1. Organization-level instructions

Repository instructions have the highest precedence, followed by project-level instructions, and then organization-level instructions.

If two instructions conflict, Copilot uses the instruction with the higher-precedence scope.

> [!NOTE]
> The order of precedence guides Copilot's review behavior but isn't guaranteed. Because Copilot uses a large language model, it might occasionally interpret or apply conflicting instructions differently.

## Get help

For troubleshooting custom instructions and answers to frequently asked questions about Copilot code review, see [Troubleshoot Copilot code review](copilot-code-reviews-faq.md).

## Next step

> [!div class="nextstepaction"]
> [Get started with Copilot code review](copilot-code-reviews.md)

## Related content

- [Troubleshoot Copilot code review](copilot-code-reviews-faq.md)
- [Get started with Copilot code review](copilot-code-reviews.md)
- [About custom instructions for GitHub Copilot](https://docs.github.com/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot)
- [Review pull requests](review-pull-requests.md)
- [Configure branch policies](branch-policies.md)
