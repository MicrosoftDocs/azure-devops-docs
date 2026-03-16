---
applyTo: "**"
---
# Moniker Rules for Azure DevOps Documentation

Microsoft Learn uses monikers to show different content for different Azure DevOps versions.

## Moniker definitions

| Moniker | Product | Use |
|---------|---------|-----|
| `azure-devops` | Azure DevOps Services (cloud) | **Primary target** — use by default |
| `azure-devops-2022` | Azure DevOps Server 2022 | Include when covering on-premises scenarios |
| `azure-devops-2020` | Azure DevOps Server 2020 | Include only if explicitly requested |
| `tfs-2018` | Team Foundation Server 2018 | **DISCARD** — end of life, no longer supported |

## Moniker block handling

- **INCLUDE** content in `azure-devops` and `azure-devops-2022` zones by default.
- **DISCARD** content in `tfs-2018` zones unless the user explicitly requests legacy coverage.
- Content outside any moniker block is shared across all versions — always include it.
- Every `::: moniker range="..."` must have a matching `::: moniker-end`.
- YAML `monikerRange` is only for pages restricted to a single version. Do NOT use it for articles with content spanning multiple versions.
- When procedures or screenshots differ by version, use moniker zones to isolate the differing sections. Prefer repeating an entire section rather than splitting individual list items.

## URL handling

- If a page only exists for a legacy moniker (e.g., `tfs-2018`), note the documentation gap.
- Do NOT use content from `tfs-2018` pages unless explicitly asked.

## Branding

- Use "Azure DevOps" for the cloud service, "Azure DevOps Server 2022" for on-premises.
- Do NOT abbreviate to "ADO" in published documentation.
- Use "Team Foundation Server" only when referring to TFS 2018 or earlier.
