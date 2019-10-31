---
title: Authoring Evaluation Policies
description: Ensure artifacts adhere to custom policies
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: shashban
ms.author: shashban
author: shashankbansal
ms.date: 10/31/2019
monikerRange: 'azure-devops'
---

# Authoring Evaluation Policies

Adding a Check to Evaluate Artifact requires the custom policy to be configured. This guide describes how custom policies can be created.

> [!NOTE]
> Currently, this Check works with container image artifacts only

## Pre-requisites

Familiarize yourself with [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) query language. Basics will do.

## Creating custom policies

Below are the sample policies shared. Based on your requirements, you can build your own set of policies.

### checkBuilder

This policy checks if the images are built by Azure Pipelines.

```
checkBuilder[errors] {
	trace("Check if images are built by Azure Pipelines")
	resourceUri := values[index].build.resourceUri	
	image := fetchImage(resourceUri)
	builder := values[index].build.build.provenance.builderVersion
	trace(sprintf("%s: builder", [builder]))
	not startswith(builder, "AzureDevOps")
	errors := sprintf("%s: image not built by Azure Pipeline [%s]", [image,builder])
}

fetchRegistry(uri) = reg {
	out := regex.find_n("//.*/", uri, 1)
	reg = trim(out[0], "/")
}

fetchImage(uri) = img {
	out := regex.find_n("/.*@", uri, 1)
	img := trim(out[0], "/@")
}
```

### checkregistries

This policy checks for all the Whitelisted registries.

```
checkregistries[errors] {
	trace(sprintf("Whitelisted registries: %s", [concat(", ", whitelist)]))
	resourceUri := values[index].image.resourceUri
	registry := fetchRegistry(resourceUri)
	image := fetchImage(resourceUri)
	not whitelist[registry]
	errors := sprintf("%s: source registry not permitted", [image]) 
}

fetchRegistry(uri) = reg {
	out := regex.find_n("//.*/", uri, 1)
	reg = trim(out[0], "/")
}

fetchImage(uri) = img {
	out := regex.find_n("/.*@", uri, 1)
	img := trim(out[0], "/@")
}
```

### checkExposedPorts

This policy checks for all the forbidden exposed ports in the registry.

```
checkExposedPorts[errors] {
	trace(sprintf("Checking for forbidden exposed ports: %s", [concat(", ", forbiddenPorts)]))
	layerInfos := values[index].image.image.layerInfo
	layerInfos[x].directive == "EXPOSE"
	resourceUri := values[index].image.resourceUri
	image := fetchImage(resourceUri)
	ports := layerInfos[x].arguments
	trace(sprintf("exposed ports: %s", [ports]))
	forbiddenPorts[ports]
	errors := sprintf("%s: image exposes forbidden port %s", [image,ports])
}

fetchRegistry(uri) = reg {
	out := regex.find_n("//.*/", uri, 1)
	reg = trim(out[0], "/")
}

fetchImage(uri) = img {
	out := regex.find_n("/.*@", uri, 1)
	img := trim(out[0], "/@")
}

```

### checkDeployedEnvironments

This policy checks if the image has been pre-deployed to one of the environments.

```
checkDeployedEnvironments[errors] {
	trace(sprintf("Checking if the image has been pre-deployed to one of: [%s]", [concat(", ", predeployedEnvironments)]))
	deployments := values[index].deployment
	deployedAddress := deployments[i].deployment.address
	trace(sprintf("deployed to : %s",[deployedAddress]))
	resourceUri := deployments[i].resourceUri
	image := fetchImage(resourceUri)
	not predeployedEnvironments[deployedAddress]
	trace(sprintf("%s: fails pre-deployed environment condition. found %s", [image,deployedAddress]))
	errors := sprintf("image %s fails pre-deployed environment condition. found %s", [image,deployedAddress])
}

fetchRegistry(uri) = reg {
	out := regex.find_n("//.*/", uri, 1)
	reg = trim(out[0], "/")
}

fetchImage(uri) = img {
	out := regex.find_n("/.*@", uri, 1)
	img := trim(out[0], "/@")
}
```
