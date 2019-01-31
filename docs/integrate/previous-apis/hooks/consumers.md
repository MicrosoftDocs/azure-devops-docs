---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Hook Consumers | REST API Reference for Team Foundation Server
description: Work with service hook consumers programmatically using the REST APIs for Team Foundation Server.
ms.assetid: B05297FC-F542-42FD-ACDA-E9734974ACBC
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook consumers

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

A service hook consumer is the external service targeted by a subscription. Consumers, their supported actions, and the descriptors that define the inputs required for those actions are the primary resources in the Consumer APIs.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of consumers

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/consumers?api-version=1.0
```

#### Sample response

```json
{
  "count": 15,
  "value": [
    {
      "id": "zendesk",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk",
      "name": "Zendesk",
      "description": "Zendesk is a SaaS suite that offers help desk ticketing, issue tracking, and customer service support.",
      "imageUrl": "",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=396756",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "accountName",
          "name": "Account name",
          "description": "Zendesk account name like https://<account name>.zendesk.com",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": true,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^([A-Za-z0-9][A-Za-z0-9\\-]{0,61}[A-Za-z0-9]|[A-Za-z0-9]{1,63})$",
            "maxLength": 63
          }
        },
        {
          "id": "username",
          "name": "User name",
          "description": "The Zendesk user name of a user who will update tickets",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^.+\\@.+\\..+$",
            "maxLength": 254
          }
        },
        {
          "id": "apiToken",
          "name": "API token",
          "description": "The Zendesk API token (can be found in Zendesk app in Admin > Channels > API)",
          "inputMode": "passwordBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "maxLength": 100
          }
        }
      ],
      "actions": [
        {
          "id": "createPrivateComment",
          "consumerId": "zendesk",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions/createPrivateComment",
          "name": "Create a private comment in a ticket",
          "description": "Create a private comment in a ticket. <a href='http://go.microsoft.com/fwlink/?LinkId=396756'>Learn more.</a>",
          "supportedEventTypes": [
            "workitem.commented"
          ],
          "supportedResourceVersions": {
            "workitem.commented": [
              "1.0-preview.1"
            ]
          },
          "inputDescriptors": []
        }
      ]
    },
    {
      "id": "zapier",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zapier",
      "name": "Zapier",
      "description": "Zapier enables you to automate tasks between 200+ online services. <b>Note:</b> Subscriptions for this service must be created and managed at zapier.com.",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=390581",
      "authenticationType": "none",
      "externalConfiguration": {
        "editSubscriptionPropertyName": "editSubscriptionUrl"
      },
      "inputDescriptors": [],
      "actions": [
        {
          "id": "sendNotification",
          "consumerId": "zapier",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zapier/actions/sendNotification",
          "name": "Send notification",
          "description": "Send event information to the specified Zapier subscription URL.",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {
            "workitem.commented": [
              "1.0-preview.1"
            ],
            "workitem.created": [
              "1.0-preview.1"
            ],
            "workitem.updated": [
              "1.0-preview.1"
            ]
          },
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "url",
              "name": "Subscription URL",
              "description": "The URL on zapier.com that the notification POST will be sent to.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "uri",
                "isRequired": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "webHooks",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/webHooks",
      "name": "Web Hooks",
      "description": "Provides event communication via HTTP",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=390531",
      "authenticationType": "none",
      "inputDescriptors": [],
      "actions": [
        {
          "id": "httpRequest",
          "consumerId": "webHooks",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/webHooks/actions/httpRequest",
          "name": "Post via HTTP",
          "description": "This action posts a JSON object representation of the event to the specified URL. Secure, HTTPS endpoints are recommended due to the potential for private data in the event payload. <a href='http://go.microsoft.com/fwlink/?LinkID=390531'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "url",
              "name": "URL",
              "description": "The URL to which an HTTP POST will be sent.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "uri",
                "isRequired": true
              }
            },
            {
              "id": "httpHeaders",
              "name": "HTTP headers",
              "description": "HTTP header keys and values separated by a colon(e.g. \"Key1:value1\") with each key-value-pair appearing on its own line of text.",
              "inputMode": "textArea",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^([\\S]+[\\s]*:[\\s]*[\\S]+[\\s]*[\r\n\f]+)*?([\\S]+[\\s]*:[\\s]*[\\S]+)+$"
              }
            },
            {
              "id": "basicAuthUsername",
              "name": "Basic authentication username",
              "description": "Enter a username for standard HTTP authentication.  Basic HTTP authentication sends credentials in plain text (unencrypted) which means you should use a URL beginning with \"https\" to enable encryption of these credentials via secure transport layer (SSL).",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^[\\S]+$",
                "minLength": 1,
                "maxLength": 256
              }
            },
            {
              "id": "basicAuthPassword",
              "name": "Basic authentication password",
              "description": "Enter a password for standard HTTP authentication.  Basic HTTP authentication sends credentials in plain text (unencrypted) which means you should use a URL beginning with \"https\" to enable encryption of these credentials via secure transport layer (SSL).",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^[\\S]+$",
                "minLength": 1,
                "maxLength": 256
              }
            },
            {
              "id": "resourceDetailsToSend",
              "name": "Resource details to send",
              "description": "Control the resource fields to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "resourceDetailsToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "minimal",
                    "displayValue": "Minimal"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "messagesToSend",
              "name": "Messages to send",
              "description": "Control the messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "messagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "detailedMessagesToSend",
              "name": "Detailed messages to send",
              "description": "Control the detailed messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "detailedMessagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "userVoice",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/userVoice",
      "name": "UserVoice",
      "description": "UserVoice integrates easy-to-use feedback, helpdesk, and knowledge base management tools in one platform that empowers users to speak and companies to understand.  <b>Note:</b> Subscriptions for this service must be created and managed at uservoice.com.",
      "imageUrl": "",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393617",
      "authenticationType": "external",
      "externalConfiguration": {},
      "inputDescriptors": [],
      "actions": [
        {
          "id": "sendLinkedWorkItemEvent",
          "consumerId": "userVoice",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/userVoice/actions/sendLinkedWorkItemEvent",
          "name": "Send linked work item event",
          "description": "Send linked work item events to UserVoice",
          "supportedEventTypes": [
            "workitem.created",
            "workitem.updated"
          ],
          "supportedResourceVersions": {
            "workitem.created": [
              "1.0-preview.1"
            ],
            "workitem.updated": [
              "1.0-preview.1"
            ]
          },
          "inputDescriptors": [
            {
              "id": "url",
              "name": "URL",
              "description": "The URL to which the liked work item event will be sent",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "uri",
                "isRequired": true
              }
            },
            {
              "id": "authToken",
              "name": "Authorization token",
              "description": "The authorization token to use while sending the event to UserVoice",
              "inputMode": "textBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "trello",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/trello",
      "name": "Trello",
      "description": "Provides integration with Trello",
      "imageUrl": "https://d2k1ftgv7pobq7.cloudfront.net/images/bd87ee916375920ae72dffadbb10d412/logo-blue-lg.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=390530",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "userToken",
          "name": "User token (need one? <a href='http://go.microsoft.com/fwlink/?LinkID=390580'>Get it now</a>)",
          "description": "Your user token provided by Trello.  Click the link in the action description above to learn how to obtain this token.",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "minLength": 64,
            "maxLength": 64
          }
        }
      ],
      "actions": [
        {
          "id": "createCard",
          "consumerId": "trello",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/trello/actions/createCard",
          "name": "Create a card",
          "description": "This action creates a card on an existing list in Trello. A card can represent a task, issue, event, or just about anything. A card's state is typically determined by what list it is on. <a href='http://go.microsoft.com/fwlink/?LinkID=390530'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "boardId",
              "name": "Board",
              "description": "The name of the board on which the Trello card will be created.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "minLength": 8,
                "maxLength": 64
              },
              "dependencyInputIds": [
                "userToken"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "listId",
              "name": "List",
              "description": "The name of the list on which the Trello card will be created.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "minLength": 9,
                "maxLength": 64
              },
              "dependencyInputIds": [
                "boardId"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "labels",
              "name": "Labels",
              "description": "A comma-separated list of label colors to apply to the created card. Valid label color names are red, orange, yellow, green, blue, and purple.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^((red|orange|yellow|green|blue|purple),)*?(red|orange|yellow|green|blue|purple)+$",
                "minLength": 3,
                "maxLength": 35
              },
              "values": {
                "possibleValues": [
                  {
                    "value": "red"
                  },
                  {
                    "value": "orange"
                  },
                  {
                    "value": "yellow"
                  },
                  {
                    "value": "green"
                  },
                  {
                    "value": "blue"
                  },
                  {
                    "value": "purple"
                  }
                ]
              }
            },
            {
              "id": "addToTop",
              "name": "Create at top of list",
              "description": "Indicates if the card should be created at the top of the Trello list, instead of the bottom.",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              },
              "values": {
                "defaultValue": "False"
              }
            }
          ]
        },
        {
          "id": "createList",
          "consumerId": "trello",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/trello/actions/createList",
          "name": "Create a list",
          "description": "This action creates a list on an existing board in Trello. A list is used to organize cards on a board and typically represents a state. <a href='http://go.microsoft.com/fwlink/?LinkID=390530'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "boardId",
              "name": "Board",
              "description": "The name of the board on which the Trello list will be created.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "minLength": 8,
                "maxLength": 64
              },
              "dependencyInputIds": [
                "userToken"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "addToBottom",
              "name": "Create at bottom of board",
              "description": "Indicates if the list should be created at the bottom of the board, instead of the top.",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              },
              "values": {
                "defaultValue": "False"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "myGet",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/myGet",
      "name": "MyGet",
      "description": "MyGet allows you to create and host your own NuGet feeds with your own packages and those from other package sources such as NuGet.org.  <b>Note:</b> Subscriptions for this service must be created and managed at myget.org.",
      "imageUrl": "https://www.myget.org/Content/images/myget/logo.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393619",
      "authenticationType": "external",
      "externalConfiguration": {},
      "inputDescriptors": [],
      "actions": [
        {
          "id": "publishPackage",
          "consumerId": "myGet",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/myGet/actions/publishPackage",
          "name": "Publish NuGet package to MyGet",
          "description": "Publish NuGet package produced in a build to a MyGet feed",
          "supportedEventTypes": [
            "build.complete"
          ],
          "inputDescriptors": [
            {
              "id": "feedId",
              "name": "Feed",
              "description": "The MyGet private or public feed where to publish the packages",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[a-z0-9]\\([_-]?[a-z0-9]+\\)*$",
                "maxLength": 63
              }
            },
            {
              "id": "packageSourceId",
              "name": "Package source identifier",
              "description": "The MyGet package source identifier which defines the packages to publish",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "guid",
                "isRequired": true
              }
            }
          ]
        },
        {
          "id": "triggerBuild",
          "consumerId": "myGet",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/myGet/actions/triggerBuild",
          "name": "Trigger a MyGet build",
          "description": "Trigger a MyGet build, which is based on several conventions. <a href='http://docs.myget.org/docs/reference/build-services'>Learn more</a>.",
          "supportedEventTypes": [
            "git.push"
          ],
          "inputDescriptors": [
            {
              "id": "feedId",
              "name": "Feed",
              "description": "The MyGet private or public feed where to trigger a build",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[a-z0-9]\\([_-]?[a-z0-9]+\\)*$",
                "maxLength": 63
              }
            },
            {
              "id": "buildSourceId",
              "name": "Build source identifier",
              "description": "The MyGet build source identifier which defines the sources to build",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "guid",
                "isRequired": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "kato",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/kato",
      "name": "Kato",
      "description": "Kato is a powerful collaboration platform based on simple chat that helps organizations move faster by decreasing email volume and making all communication instantly searchable.",
      "imageUrl": "",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393614",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "roomToken",
          "name": "Room token",
          "description": "The token for interacting with a room using the Kato API",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^([a-zA-Z0-9]|-|_|\\.|!|\\^|\\*|~|'|\\(|\\))+$",
            "maxLength": 300
          }
        },
        {
          "id": "roomName",
          "name": "Room name",
          "description": "Room name as seen in Kato",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": true,
          "validation": {
            "dataType": "string"
          }
        }
      ],
      "actions": [
        {
          "id": "postEventToRoom",
          "consumerId": "kato",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/kato/actions/postEventToRoom",
          "name": "Post event to room",
          "description": "Posts an event to a Kato room. <a href='http://go.microsoft.com/fwlink/?LinkId=393614'>Learn more.</a>",
          "supportedEventTypes": [
            "*"
          ],
          "inputDescriptors": []
        }
      ]
    },
    {
      "id": "jenkins",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/jenkins",
      "name": "Jenkins",
      "description": "Jenkins is an open source continuous integration service popular with Java teams.",
      "imageUrl": "http://jenkins-ci.org/sites/default/files/images/headshot.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393616",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "serverBaseUrl",
          "name": "Jenkins base URL",
          "description": "The base URL that hosts the Jenkins server",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "uri",
            "isRequired": true
          }
        },
        {
          "id": "username",
          "name": "User name",
          "description": "The Jenkins user name of a user who is allowed to trigger the build",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true
          }
        },
        {
          "id": "password",
          "name": "User API token (or password)",
          "description": "The user's API token, which is available in the Jenkins user configuration page. The API token is new since version 1.426. For earlier versions of Jenkins the real user password must be specified.",
          "inputMode": "passwordBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true
          }
        }
      ],
      "actions": [
        {
          "id": "triggerGenericBuild",
          "consumerId": "jenkins",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/jenkins/actions/triggerGenericBuild",
          "name": "Trigger generic build",
          "description": "Triggers a generic Jenkins build, invoking the Jenkins build URL. Secure, HTTPS endpoints are recommended due to the potential for private data in the event payload. <a href='http://go.microsoft.com/fwlink/?LinkId=393616'>Learn more.</a>",
          "supportedEventTypes": [
            "git.push",
            "build.complete",
            "tfvc.checkin"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "buildName",
              "name": "Build",
              "description": "The build name to trigger",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true
              },
              "dependencyInputIds": [
                "serverBaseUrl",
                "username",
                "password"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "buildAuthToken",
              "name": "Build token",
              "description": "The authorization token in the form of a string so that only those who know it would be able to remotely trigger this project's builds",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              }
            },
            {
              "id": "buildParameterized",
              "name": "Accepts parameters",
              "description": "Indicates if the build is parameterized or not (build parameters are optionally specified above)",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              }
            },
            {
              "id": "buildParams",
              "name": "Build parameters",
              "description": "Build parameters names and values separated by a colon(e.g. \"param1:value1\") with each name-value pair appearing on its own line of text",
              "inputMode": "textArea",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^((.+?)(\\s*):(.*)[\r\n\f]?)+$"
              }
            }
          ]
        },
        {
          "id": "triggerGitBuild",
          "consumerId": "jenkins",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/jenkins/actions/triggerGitBuild",
          "name": "Trigger Git build",
          "description": "Triggers a build configured to use a Git repository using the <a href='https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin'>Jenkins Git Plugin</a>. Secure, HTTPS endpoints are recommended due to the potential for private data in the event payload.",
          "supportedEventTypes": [
            "git.push"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": []
        }
      ]
    },
    {
      "id": "hubot",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/hubot",
      "name": "Hubot",
      "description": "Hubot is a popular chat bot service that responds to commands sent by users in a team room; helping automate common tasks like creating work items, checking build status, and viewing recent team activity.",
      "imageUrl": "",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=402677",
      "authenticationType": "external",
      "inputDescriptors": [],
      "actions": [
        {
          "id": "postMessage",
          "consumerId": "hubot",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/hubot/actions/postMessage",
          "name": "Post a message",
          "description": "This action sends a team room message to the specified URL (typically this URL will end with /hubot/messagehook). A strong user name and password are highly recommended. <a href='http://go.microsoft.com/fwlink/?LinkID=402677'>Learn more.</a>",
          "supportedEventTypes": [
            "message.posted"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "url",
              "name": "URL",
              "description": "Hubot's URL",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "uri",
                "isRequired": true
              }
            },
            {
              "id": "username",
              "name": "Username",
              "description": "Hubot's username (as defined by HUBOT_VSONLINE_ADAPTER_BASIC_AUTH_USERNAME)",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 200
              }
            },
            {
              "id": "password",
              "name": "Password",
              "description": "Hubot's password (as defined by HUBOT_VSONLINE_ADAPTER_BASIC_AUTH_PASSWORD)",
              "inputMode": "passwordBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "maxLength": 500
              }
            }
          ]
        },
        {
          "id": "postMessageToQueue",
          "consumerId": "hubot",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/hubot/actions/postMessageToQueue",
          "name": "Post a message to an Azure Service Bus Queue",
          "description": "This action sends a team room message to the specified Azure Service Bus queue. <a href='http://go.microsoft.com/fwlink/?LinkID=402677'>Learn more.</a>",
          "supportedEventTypes": [
            "message.posted"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "connectionString",
              "name": "SAS connection string",
              "description": "The SAS (shared access signature) connection string to use to connect with Azure Service Bus. This connection string is available in the Azure Portal.",
              "inputMode": "textBox",
              "isConfidential": true,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "minLength": 1,
                "maxLength": 500
              }
            },
            {
              "id": "queueName",
              "name": "Queue name",
              "description": "The name of the queue to send the message to and where Hubot is listening for new messages. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the queue does not exists, it will be created if the specified connection string has the necessary permissions.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[A-Za-z0-9]$|^[A-Za-z0-9][\\w-\\.\\/]*[A-Za-z0-9]$",
                "minLength": 1,
                "maxLength": 50
              },
              "dependencyInputIds": [
                "connectionString"
              ],
              "hasDynamicValueInformation": true
            }
          ]
        }
      ]
    },
    {
      "id": "hipChat",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/hipChat",
      "name": "HipChat",
      "description": "HipChat, from Atlassian, provides group chat and video chat built for teams.",
      "imageUrl": "http://www.hipchat.com/img/logo.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkId=392098",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "authToken",
          "name": "Authorization token",
          "description": "Authorization token which allows to post messages to a room. It can be a room token which is just authorized to a given room, or a personal access token, which is authorized to all rooms that the token's owner is authorized.",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true
          }
        }
      ],
      "actions": [
        {
          "id": "postMessageToRoom",
          "consumerId": "hipChat",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/hipChat/actions/postMessageToRoom",
          "name": "Post a message to a room",
          "description": "Post a message about the event to a room in HipChat. <a href='http://go.microsoft.com/fwlink/?LinkId=392098'>Learn more.</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "roomName",
              "name": "Room",
              "description": "Room to post the message to.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "minLength": 1,
                "maxLength": 50
              },
              "dependencyInputIds": [
                "authToken"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "notifyRoom",
              "name": "Notify room participants",
              "description": "Whether or not this message should trigger a notification for people in the room (change the tab color, play a sound, etc). Each recipient's notification preferences are taken into account.",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              }
            },
            {
              "id": "showDetails",
              "name": "Send a detailed message",
              "description": "Post a short or detailed messages about the event.",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              }
            },
            {
              "id": "bgColor",
              "name": "Message color",
              "description": "Background color for message. Valid values: yellow, red, green, purple, gray, random (default: 'yellow')",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "possibleValues": [
                  {
                    "value": "gray",
                    "displayValue": "Gray"
                  },
                  {
                    "value": "green",
                    "displayValue": "Green"
                  },
                  {
                    "value": "purple",
                    "displayValue": "Purple"
                  },
                  {
                    "value": "random",
                    "displayValue": "Random"
                  },
                  {
                    "value": "red",
                    "displayValue": "Red"
                  },
                  {
                    "value": "yellow",
                    "displayValue": "Yellow"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "flowdock",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/flowdock",
      "name": "Flowdock",
      "description": "Flowdock provides chat and inbox for teams, providing one place to talk and stay up-to-date.",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393615",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "flowAPIToken",
          "name": "Flow API token",
          "description": "The authorization token to post messages to a team inbox or a group chat. You can get the flow API Token from Flowdock  (<a href='https://www.flowdock.com/account/tokens>'account settings</a>",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^[\\w0-9\\s]*$"
          }
        },
        {
          "id": "flowName",
          "name": "Flow name",
          "description": "Flow name as seen in Flowdock",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": true,
          "validation": {
            "dataType": "string",
            "maxLength": 100
          }
        },
        {
          "id": "showDetails",
          "name": "Send a detailed message",
          "description": "Post a short or detailed message about the event.",
          "inputMode": "checkBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "boolean"
          }
        }
      ],
      "actions": [
        {
          "id": "postMessageToChat",
          "consumerId": "flowdock",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/flowdock/actions/postMessageToChat",
          "name": "Post a message to a team chat",
          "description": "Post a message about the event to a team chat in Flowdock. <a href='http://go.microsoft.com/fwlink/?LinkId=393615'>Learn more.</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "externalUserName",
              "name": "Sender user name",
              "description": "Name of the \"user\" sending the message.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[\\w0-9@\\.]+$",
                "maxLength": 16
              }
            },
            {
              "id": "tags",
              "name": "Tags",
              "description": "List of tags to be added to the message (comma separated). User tags should start with '@'. Hashtags can optionally be prefixed with \"#\". Tags are case insensitive.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^(\\s*[^\\s,]+\\s*)(,(\\s*[^\\s,]+\\s*))*$"
              }
            }
          ]
        },
        {
          "id": "postMessageToTeamInbox",
          "consumerId": "flowdock",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/flowdock/actions/postMessageToTeamInbox",
          "name": "Post a message to a team inbox",
          "description": "Post a message about the event to a team inbox in Flowdock. <a href='http://go.microsoft.com/fwlink/?LinkId=393615'>Learn more.</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "subject",
              "name": "Subject",
              "description": "Subject line of the message (displayed as the title of the team inbox message)",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "fromName",
              "name": "From name",
              "description": "Name of the message sender",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              }
            },
            {
              "id": "fromAddress",
              "name": "From address",
              "description": "Email address of the message sender (used to show an avatar of the sender)",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^.+\\@.+\\..+$",
                "maxLength": 254
              }
            },
            {
              "id": "replyTo",
              "name": "Reply to",
              "description": "Email address for replies (used when replying to the message within Flowdock)",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^.+\\@.+\\..+$",
                "maxLength": 254
              }
            },
            {
              "id": "project",
              "name": "Project",
              "description": "Human readable identifier for more detailed message categorization",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^[\\w0-9\\s]*$"
              }
            },
            {
              "id": "tags",
              "name": "Tags",
              "description": "List of tags to be added to the message (comma separated). User tags should start with '@'. Hashtags can optionally be prefixed with \"#\". Tags are case insensitive.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^(\\s*[^\\s,]+\\s*)(,(\\s*[^\\s,]+\\s*))*$"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "campfire",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/campfire",
      "name": "Campfire",
      "description": "Campfire provides team collaboration with real time chat. Campfire is like instant messaging, but designed exclusively for groups.",
      "imageUrl": "https://campfirenow.com/images/logo_campfire-full.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=393613",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "accountName",
          "name": "Account name",
          "description": "Account name like https://<account name>.campfirenow.com",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^([A-Za-z0-9][A-Za-z0-9\\-]{0,61}[A-Za-z0-9]|[A-Za-z0-9]{1,63})$",
            "maxLength": 63
          }
        },
        {
          "id": "authToken",
          "name": "API authentication token",
          "description": "API authentication token for the user that messages will be posted from. You can get this token visiting the user profile page at Campfire.",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true
          }
        }
      ],
      "actions": [
        {
          "id": "postMessageToRoom",
          "consumerId": "campfire",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/campfire/actions/postMessageToRoom",
          "name": "Post a message to a room",
          "description": "Post a message about the event to a room in Campfire. <a href='http://go.microsoft.com/fwlink/?LinkID=393613'>Learn more.</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "inputDescriptors": [
            {
              "id": "roomId",
              "name": "Room",
              "description": "Room to post the message to.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "number",
                "isRequired": true,
                "minValue": 1
              },
              "dependencyInputIds": [
                "accountName",
                "authToken"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "showDetails",
              "name": "Send a detailed message",
              "description": "Post a short or detailed messages about the event.",
              "inputMode": "checkBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "boolean"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "azureServiceBus",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureServiceBus",
      "name": "Azure Service Bus",
      "description": "Microsoft Azure Service Bus provides a hosted, secure, and widely available infrastructure for widespread communication, large-scale event distribution, naming, and service publishing.",
      "imageUrl": "http://www.windowsazure.com/css/images/logo.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=392636",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "connectionString",
          "name": "SAS connection string",
          "description": "The SAS (shared access signature) connection string to use to connect with Azure Service Bus. This connection string is available in the Azure Portal.",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "minLength": 1,
            "maxLength": 500
          }
        }
      ],
      "actions": [
        {
          "id": "serviceBusNotificationHubSend",
          "consumerId": "azureServiceBus",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureServiceBus/actions/serviceBusNotificationHubSend",
          "name": "Send a message to a Notification Hub",
          "description": "This action sends a generic, template notification to the specified Azure Notification Hub. <a href='http://go.microsoft.com/fwlink/?LinkID=392636'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "notificationHubName",
              "name": "Notification Hub name",
              "description": "The name of the notification hub to send the notification to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. The hub should already exist.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[A-Za-z0-9]$|^[A-Za-z0-9][\\w-\\.\\/]*[A-Za-z0-9]$",
                "minLength": 1,
                "maxLength": 50
              },
              "dependencyInputIds": [
                "connectionString"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "tagsExpression",
              "name": "Tags",
              "description": "A tag expression is any boolean expression constructed using the logical operators AND (&&), OR (||), NOT (!), and round parentheses. For example: (A || B) && !C. If an expression uses only ORs, it can contain at most 20 tags. Other expressions are limited to 6 tags. Note that a single tag is a valid expression. Each tag in expression can be any string, up to 120 characters, containing alphanumeric and the following non-alphanumeric characters: ‘_’, ‘@’, ‘#’, ‘.’, ‘:’, ‘-’.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "maxLength": 1024
              }
            }
          ]
        },
        {
          "id": "serviceBusQueueSend",
          "consumerId": "azureServiceBus",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureServiceBus/actions/serviceBusQueueSend",
          "name": "Send a message to a Service Bus Queue",
          "description": "This action sends a JSON string representation of the event to the specified Azure Service Bus queue. <a href='http://go.microsoft.com/fwlink/?LinkID=392636'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "queueName",
              "name": "Queue name",
              "description": "The name of the queue to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the queue does not exists, it will be created if the specified connection string has the necessary permissions.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[A-Za-z0-9]$|^[A-Za-z0-9][\\w-\\.\\/]*[A-Za-z0-9]$",
                "minLength": 1,
                "maxLength": 50
              },
              "dependencyInputIds": [
                "connectionString"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "resourceDetailsToSend",
              "name": "Resource details to send",
              "description": "Control the resource fields to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "resourceDetailsToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "minimal",
                    "displayValue": "Minimal"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "messagesToSend",
              "name": "Messages to send",
              "description": "Control the messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "messagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "detailedMessagesToSend",
              "name": "Detailed messages to send",
              "description": "Control the detailed messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "detailedMessagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        },
        {
          "id": "serviceBusTopicSend",
          "consumerId": "azureServiceBus",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureServiceBus/actions/serviceBusTopicSend",
          "name": "Send a message to a Service Bus Topic",
          "description": "This action sends a JSON string representation of the event to the specified Azure Service Bus topic. <a href='http://go.microsoft.com/fwlink/?LinkID=392636'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "topicName",
              "name": "Topic name",
              "description": "The name of the topic to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the topic does not exists, it will be created if the specified connection string has the necessary permissions.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[A-Za-z0-9]$|^[A-Za-z0-9][\\w-\\.\\/]*[A-Za-z0-9]$",
                "minLength": 1,
                "maxLength": 50
              },
              "dependencyInputIds": [
                "connectionString"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "resourceDetailsToSend",
              "name": "Resource details to send",
              "description": "Control the resource fields to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "resourceDetailsToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "minimal",
                    "displayValue": "Minimal"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "messagesToSend",
              "name": "Messages to send",
              "description": "Control the messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "messagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "detailedMessagesToSend",
              "name": "Detailed messages to send",
              "description": "Control the detailed messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "detailedMessagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "azureStorageQueue",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureStorageQueue",
      "name": "Azure Storage",
      "description": "Microsoft Azure Storage is a service for storing large numbers of messages that can be accessed from anywhere in the world. It is useful for creating a backlog of work to process asynchronously.",
      "imageUrl": "http://www.windowsazure.com/css/images/logo.png",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=390532",
      "authenticationType": "external",
      "inputDescriptors": [
        {
          "id": "accountName",
          "name": "Storage account name",
          "description": "The name associated with your Azure storage account (e.g. https://STORAGE_ACCOUNT_NAME.queue.core.windows.net).",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "minLength": 1,
            "maxLength": 100
          }
        },
        {
          "id": "accountKey",
          "name": "Storage account key",
          "description": "The key associated with your Azure storage account.",
          "inputMode": "textBox",
          "isConfidential": true,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "minLength": 64,
            "maxLength": 100
          }
        }
      ],
      "actions": [
        {
          "id": "enqueue",
          "consumerId": "azureStorageQueue",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/azureStorageQueue/actions/enqueue",
          "name": "Insert a message in a Storage Queue",
          "description": "This action inserts a JSON string representation of the event to the specified Azure storage queue. <a href='http://go.microsoft.com/fwlink/?LinkID=390532'>Learn More</a>",
          "supportedEventTypes": [
            "*"
          ],
          "supportedResourceVersions": {},
          "allowResourceVersionOverride": true,
          "inputDescriptors": [
            {
              "id": "queueName",
              "name": "Queue name",
              "description": "The lowercase-only name of the queue to be used within Azure storage.  A queue by this name will be created if it does not already exist.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^[a-z0-9]+[a-z0-9-]+[a-z0-9]$",
                "minLength": 3,
                "maxLength": 63
              }
            },
            {
              "id": "visiTimeout",
              "name": "Message visibility timeout (in seconds)",
              "description": "Specifies the visibility timeout value, in seconds, for the enqueued message, relative to server time. The value must be larger than or equal to 0, and cannot be larger than 7 days, or 604,800 seconds. The visibility timeout must be set to a value smaller than the message's time-to-live value.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "number",
                "isRequired": true,
                "minValue": 0,
                "maxValue": 604800
              },
              "values": {
                "defaultValue": "0"
              }
            },
            {
              "id": "ttl",
              "name": "Message time-to-live (in seconds)",
              "description": "Specifies the time-to-live interval for the queue message, in seconds. The maximum time-to-live allowed is 7 days, or 604,800 seconds.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "number",
                "isRequired": true,
                "minValue": 1,
                "maxValue": 604800
              },
              "values": {
                "defaultValue": "604800"
              }
            },
            {
              "id": "resourceDetailsToSend",
              "name": "Resource details to send",
              "description": "Control the resource fields to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "resourceDetailsToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "minimal",
                    "displayValue": "Minimal"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "messagesToSend",
              "name": "Messages to send",
              "description": "Control the messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "messagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            },
            {
              "id": "detailedMessagesToSend",
              "name": "Detailed messages to send",
              "description": "Control the detailed messages to send",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "inputId": "detailedMessagesToSend",
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "All"
                  },
                  {
                    "value": "text",
                    "displayValue": "Text"
                  },
                  {
                    "value": "html",
                    "displayValue": "HTML"
                  },
                  {
                    "value": "markdown",
                    "displayValue": "Markdown"
                  },
                  {
                    "value": "none",
                    "displayValue": "None"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "appVeyor",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/appVeyor",
      "name": "AppVeyor",
      "description": "AppVeyor automates building, testing, and deployment of .NET applications - helping your team focus on delivering great apps.",
      "imageUrl": "",
      "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=396758",
      "authenticationType": "external",
      "externalConfiguration": {},
      "inputDescriptors": [],
      "actions": [
        {
          "id": "triggerBuild",
          "consumerId": "appVeyor",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/appVeyor/actions/triggerBuild",
          "name": "Trigger a AppVeyor build",
          "description": "Trigger a AppVeyor build <a href='http://go.microsoft.com/fwlink/?LinkID=396758'>Learn more</a>",
          "supportedEventTypes": [
            "git.push"
          ],
          "inputDescriptors": [
            {
              "id": "webHookId",
              "name": "Webhook ID",
              "description": "The Webhook ID that uniquely identifies a project in AppVeyor database",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true
              }
            },
            {
              "id": "projectName",
              "name": "Project name",
              "description": "Project name in AppVeyor",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": true,
              "validation": {
                "dataType": "string"
              }
            }
          ]
        }
      ]
    }
  ]
}
```


## Get a consumer

| Parameter | Type | Required | Notes |
|:----------|:-----|:---------|:------------|
| URL
| consumerId | String | Yes | Identifier of the consumer. |
| Query
| api-version| string |     | [Version](../../concepts/rest-api-versioning.md) of the API to use. |

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk?api-version=1.0
```

#### Sample response

```json
{
  "id": "zendesk",
  "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk",
  "name": "Zendesk",
  "description": "Zendesk is a SaaS suite that offers help desk ticketing, issue tracking, and customer service support.",
  "imageUrl": "",
  "informationUrl": "http://go.microsoft.com/fwlink/?LinkID=396756",
  "authenticationType": "external",
  "inputDescriptors": [
    {
      "id": "accountName",
      "name": "Account name",
      "description": "Zendesk account name like https://<account name>.zendesk.com",
      "inputMode": "textBox",
      "isConfidential": false,
      "useInDefaultDescription": true,
      "validation": {
        "dataType": "string",
        "isRequired": true,
        "pattern": "^([A-Za-z0-9][A-Za-z0-9\\-]{0,61}[A-Za-z0-9]|[A-Za-z0-9]{1,63})$",
        "maxLength": 63
      }
    },
    {
      "id": "username",
      "name": "User name",
      "description": "The Zendesk user name of a user who will update tickets",
      "inputMode": "textBox",
      "isConfidential": false,
      "useInDefaultDescription": false,
      "validation": {
        "dataType": "string",
        "isRequired": true,
        "pattern": "^.+\\@.+\\..+$",
        "maxLength": 254
      }
    },
    {
      "id": "apiToken",
      "name": "API token",
      "description": "The Zendesk API token (can be found in Zendesk app in Admin > Channels > API)",
      "inputMode": "passwordBox",
      "isConfidential": true,
      "useInDefaultDescription": false,
      "validation": {
        "dataType": "string",
        "isRequired": true,
        "maxLength": 100
      }
    }
  ],
  "actions": [
    {
      "id": "createPrivateComment",
      "consumerId": "zendesk",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions/createPrivateComment",
      "name": "Create a private comment in a ticket",
      "description": "Create a private comment in a ticket. <a href='http://go.microsoft.com/fwlink/?LinkId=396756'>Learn more.</a>",
      "supportedEventTypes": [
        "workitem.commented"
      ],
      "supportedResourceVersions": {
        "workitem.commented": [
          "1.0-preview.1"
        ]
      },
      "inputDescriptors": []
    }
  ]
}
```


## Get a list of consumer actions

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions?api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "createPrivateComment",
      "consumerId": "zendesk",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions/createPrivateComment",
      "name": "Create a private comment in a ticket",
      "description": "Create a private comment in a ticket. <a href='http://go.microsoft.com/fwlink/?LinkId=396756'>Learn more.</a>",
      "supportedEventTypes": [
        "workitem.commented"
      ],
      "supportedResourceVersions": {
        "workitem.commented": [
          "1.0-preview.1"
        ]
      },
      "inputDescriptors": []
    }
  ]
}
```


## Get a consumer action

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions/createPrivateComment?api-version=1.0
```

#### Sample response

```json
{
  "id": "createPrivateComment",
  "consumerId": "zendesk",
  "url": "https://mytfsserver/DefaultCollection/_apis/hooks/consumers/zendesk/actions/createPrivateComment",
  "name": "Create a private comment in a ticket",
  "description": "Create a private comment in a ticket. <a href='http://go.microsoft.com/fwlink/?LinkId=396756'>Learn more.</a>",
  "supportedEventTypes": [
    "workitem.commented"
  ],
  "supportedResourceVersions": {
    "workitem.commented": [
      "1.0-preview.1"
    ]
  },
  "inputDescriptors": []
}
```


