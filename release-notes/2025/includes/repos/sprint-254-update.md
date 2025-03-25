---
author: ckanyika
ms.author: ckanyika
ms.date: 4/2/2025
ms.topic: include
---

### Enhancement to GetRepository API

We have added `creationDate` property to the response of Repositories - Get Repository API returning repository creation date. The property is available on the API versions `7.2-preview` and higher.

## Enhancement to Pull Requests Query API

We have introduced a new `Label` property in the response of Pull Request Query - Get API. You can now specify whether to include labels (tags) for related pull requests in every query.
A new `Include` property is available - if set to Labels, the response will include labels for the specified PRs.
If left as `null`, labels will not be included.
To prevent unintended errors, ensure that `NotSet` is not explicitly assigned - this will result in `Bad Request`.
Please note that label enrichment resource utilization depends on the number of assigned labels and their length. Requesting labels can impact throttling and increase network load. To optimize the performance, we recommend avoiding unnecessary label requests.

Request payload example
```json
{
    "queries": [
        {
            "type": "lastMergeCommit",
            "include": "Labels",
            "items": [ 
                "0d6c9b2b524113113fced41aecbf8631a4649dec"
            ]
        },
        {
            "type": "lastMergeCommit",
            "items": [
                "b524113113f0dd41aecbf8631a4649dec6c9b2ce"
            ]
        }
    ]
}
```