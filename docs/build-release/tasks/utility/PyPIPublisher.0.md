---
title: PyPI Publisher
description: Publish Python packages to PyPI
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2d8a1d60-8ccd-11e7-a792-11ac56e9f553
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'VSTS'
---

# Utility: PyPI Publisher

![](_img/pypipublisher.png) Publish Python packages to PyPI

[!INCLUDE [temp](../_shared/yaml/PyPIPublisherV0.0.md)]

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>PyPI connection</td><td>(Required) Select the generic service endpoint where PyPI server details are present. 

Note: To configure a new generic service endpoint, under your VSTS project, go to Settings -> Services -> New Service Endpoint -> Generic. 

Connection Name – Use a friendly connection name of your choice. 
Server URL – PyPI package server (for example: https://upload.pypi.org/legacy/). 
User Name – PyPI registered username. 
Password – password for your PyPI account</td></tr>
<tr><td>Python package path</td><td>(Required) Python package directory to be published, where setup.py is present.</td></tr>
<tr><td>Upload wheel</td><td>(Optional) If checked, then task will additionally build and publish universal wheel (platform independent) of this package. For more information regarding universal wheel [see here](https://packaging.python.org/tutorials/distributing-packages/#wheels).</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
