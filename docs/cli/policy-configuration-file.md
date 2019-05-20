# Configure policies

You can easily configure branch policies for your repository using the various policy commands. However, the policy commands accept a single scope, i.e., single combination of repository, branch and match type. If you want to apply the same policy across various scopes, you can do that using a policy configuration file.

## Create a policy configuration file for build policy, including the multiple application scopes

Say you want to create a manual queue build policy across all branch folders that start with "release" and also on the master branch. To achieve this, execute the following steps:

```json
{
"isBlocking": true,
"isDeleted": false,
"isEnabled": true,
"revision": 1,
"settings": {
  "buildDefinitionId": 22,
  "displayName": "Manual Queue Policy",
  "manualQueueOnly": true,
  "queueOnSourceUpdateOnly": false,
  "scope": [
  {
    "matchKind": "Prefix",
    "refName": "refs/heads/release",
    "repositoryId": "e646f204-53c9-4153-9ab9-fd41a11e3564"
  },
  {
    "matchKind": "Exact",
    "refName": "refs/heads/master",
    "repositoryId": "e646f204-53c9-4153-9ab9-fd41a11e1234"
  }
  ],
  "validDuration": 0
},
"type": {
  "displayName": "Build",
  "id": "0609b952-1397-4640-95ec-e00a01b2f659"
}
}
```

To learn more about the structure for various policy types, refer to [Policy create](/rest/api/azure/devops/policy/configurations/create#examples).

## Save the file and run the create policy command

`az repos policy create C:\policyConfiguration.txt`

Note that the path is provided using '\\' backslash.

