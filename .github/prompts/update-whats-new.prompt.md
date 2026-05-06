---
description: "Generate the monthly What's New in Azure DevOps docs update from git history. Use at the start of each month to add the previous month's changes."
argument-hint: "Month and year to generate, e.g. 'March 2026'"
agent: agent
---

# Update "What's New in Azure DevOps Docs"

Generate a monthly update section for [release-notes/docswhatsnew/azure-devops-docs-whats-new.md](../../release-notes/docswhatsnew/azure-devops-docs-whats-new.md) based on git commit history.

## Input

The target month: **${input:month}**

## Workflow

Follow these steps **in order**. Do not skip steps.

### Step 1: Determine the date range

Parse the month argument (e.g., "March 2026") to compute:
- `AFTER_DATE`: last day of the previous month (e.g., `2026-02-28`)
- `BEFORE_DATE`: first day of the next month (e.g., `2026-04-01`)

### Step 2: Get new articles

Run this git command to find files **added** during the month:

```
git log --after="AFTER_DATE" --before="BEFORE_DATE" --diff-filter=A --name-only --pretty=format:"COMMIT:%s" -- "docs/**/*.md"
```

Filter out files under `docs/**/includes/` and `release-notes/**` files. Filter out any files that do not exist in the repository at the time the command is run.

### Step 3: Get updated articles

Run this git command to find files **modified** during the month:

```
git log --after="AFTER_DATE" --before="BEFORE_DATE" --diff-filter=M --name-only --pretty=format:"COMMIT:%s" -- "docs/**/*.md"
```

Filter out files under `docs/**/includes/` and `release-notes/**` files. Filter out any files that do not exist in the repository at the time the command is run. Sort the list of files in descending order by size of the changes, so that articles with the most changes are first. Omit any updated articles that have 25 or fewer lines of changes. If there are fewer than 25 changed articles in total across areas, lower the threshold to 10 or fewer lines of changes and try again.

### Step 4: Extract article titles

For each changed file, extract the `title:` field from its YAML front matter using `Select-String`:

```
Select-String -Path $file -Pattern '^title:\s*"?(.+?)"?\s*$'
```

### Step 5: Compose the new month section

Build the section using these formatting rules.

#### Section structure

Organize by **doc area** (alphabetical), matching the folder structure under `docs/`. Use these area names:



| Folder | Section heading |
|--------|------------------|
| `docs/` | Miscellaneous |
| `docs/artifacts/` | Artifacts |
| `docs/boards/` | Azure Boards |
| `docs/cli/` | CLI |
| `docs/demo-gen/` | Demo-gen |
| `docs/deploy-azure/` | Deploy-azure |
| `docs/dev-resources/` | Dev-resources |
| `docs/extend/` | Extend |
| `docs/get-started/` | Get started |
| `docs/integrate/` | Integrate |
| `docs/java/` | Java |
| `docs/marketplace/` | Marketplace |
| `docs/marketplace-extensibility/` | Marketplace extensibility |
| `docs/migrate/` | Migrate |
| `docs/notifications/` | Notifications |
| `docs/organizations/` | Administration |
| `docs/pipelines/` | Azure Pipelines |
| `docs/managed-devops-pools/` | Managed DevOps Pools |
| `docs/project/` | Project |
| `docs/reference/` | Reference |
| `docs/report/` | Azure DevOps Reporting and Analytics service |
| `docs/repos/` | Azure Repos |
| `docs/security-access-billing/` | Security-access-billing |
| `docs/service-hooks/` | Service-hooks |
| `docs/test/` | Azure Test Plans |
| `docs/user-guide/` | User guide |

Only include sections that have changes. Skip areas with no new or updated articles.

#### Entry format

Each article entry is a Markdown link using a **site-relative path** that starts with `/azure/devops/` followed by the area (path to the article excluding `docs/`) followed by the filename of the article, without the `.md` extension. For example, a file located at `docs/pipelines/ci-cd.md` would be linked as `/azure/devops/pipelines/ci-cd`.

```markdown
- [Article Title](/azure/devops/area/filename)
```

#### New vs Updated

Within each area section, list **New articles** first (if any), then **Updated articles**:

```markdown
### Area Name

**New articles**

- [New Article Title](/azure/devops/area/new-article)

**Updated articles**

- [Updated Article Title](/azure/devops/updated-article)
```

If there are no new articles for an area, omit the **New articles** sub-heading entirely.

### Step 6: Insert the section and update metadata

1. **Insert** the new month section immediately after the intro paragraph ("Welcome to what's new...") and **before** the previous month's section.

2. After the Month and Year heading, and before the first area, add a bulleted list of the links to the area name headings included in the new section. Delete this list if it exists in any other the other following month sections so that only the newest month section contains this list.

3. **Update `ms.date`** in the YAML front matter to the current date in `MM/DD/YYYY` format.
4. If the article, with the new month section added, now has more than three months, **Remove the oldest months** so the file always shows exactly **three months** of content. The oldest month section starts at its `## Month Year` heading and runs to the end of the file.

### Step 7: Update the TOC

1. Update the table of contents in `release-notes\docswhatsnew\toc.yml` to include the links to the latest 3 months. The newest month should link to what's new article, and the two previous months should link to the corresponding sections within the same article so that readers can quickly navigate to each month's content. This section should have a maximum of 3 entries, so delete any older entries if adding the newest months would exceed that limit.

### Step 8: Update the index

Update the links to the 3 months of What's new in `release-notes\docswhatsnew\azure-devops-docs-whats-new.md` to include the links to the latest 3 months. The newest month should link to what's new article, and the two previous months should link to the corresponding sections within the same article so that readers can quickly navigate to each month's content. This section should have a maximum of 3 entries, so delete any older entries if adding the newest months would exceed that limit.


### Step 9: Final review

- Verify all relative links use the `/azure/devops/area/filename` pattern
- Verify article titles match the `title:` field in each file's front matter
- Confirm three months are shown (new month + two previous)
- Confirm no `docs/**/includes/` files appear in the listing

## Reference: Current file location

The file to update is: `release-notes/docswhatsnew/azure-devops-docs-whats-new.md`