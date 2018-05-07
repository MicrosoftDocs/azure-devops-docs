---
title: Configure a private Docker build agent for your Java project with VSTS 
description: Tutorial lab for configuring Java build agents for Docker with Visual Studio Team Services (VSTS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: java
ms.manager: douge
ms.author: douge
author: erickson-doug
ms.date: 01/22/2018
monikerRange: '>= tfs-2017'
---


# Configure a private Java build agent with VSTS

In this exercise, you are going to configure a private build agent that runs in a Docker container.

## Prerequisites

This exercise assumes you have completed the exercises to create a Team Project. This exercise uses a team project named **jdev**, though your team project name may differ.

> **Note**: It is not necessary to run the VSTS agent in a container - but it is convenient to do so and means that you don't have to install any other prerequisites on the machine running the container, since all the prerequisites are inside the container.

## Generating a VSTS Personal Access Token (PAT)

In this task you will generate a PAT for yourself. You will use this PAT to connect the agent to your VSTS account.

> **Note**: If you already have a PAT, you can skip this step and use your existing PAT (assuming it has the correct scopes).

1. Connect to the virtual machine with the user credentials which you specified when creating the VM in Azure.

1. Open Chrome and browse to `http://<youraccount>.visualstudio.com` (where `youraccount` is the account you created in VSTS).

1. In the upper right, click on your profile image and Click Security.

    ![Click on Security](../_img/dockerbuildagent/click-security.png)

1. On the Personal access tokens page, click the "Add" button. Enter "java" (or whatever you want) for the Description. Scroll to the bottom of the page and click "Create token".

1. When the token is created you will have to copy it - this is your only chance to see the token. Copy it from the browser into the clipboard.

1. Click on the Visual Studio Code icon in the toolbar to open Visual Studio Code.

    ![Open VS Code](../_img/dockerbuildagent/vs-code.png)

1. Press Ctrl-N (or use File->New File) to create a new file. Paste in your PAT. Save this file (File->Save or Ctrl-S) to `/home/vmadmin/pat.txt`.

## Starting a VSTS Agent Container using Docker

In this task you will start a VSTS build agent container using Docker. This container will be used to run builds and releases.

1. On your VM, open a terminal by clicking on the Terminal Emulator icon in the toolbar.

    ![Click on the terminal icon in the Toolbar](../_img/dockerbuildagent/click-terminal.png)

1. Enter the following command:

    ```sh
    docker run -e VSTS_ACCOUNT=<account> -e VSTS_TOKEN=<pat> -v /var/run/docker.sock:/var/run/docker.sock --name vstsagent -it vsts/agent
    ```

    where:
    - _account_ is your VSTS account name (the bit before .visualstudio.com)
    - _pat_ is your PAT

    You should see a message indicating "Listening for Jobs":

    ![The agent container running](../_img/dockerbuildagent/agent-container-running.png)

    > **Note**: This starts a docker container (called vstsagent) that has a VSTS agent running inside it. The agent is connected to your VSTS account and has also mounted the VM Docker socket so that the container can perform Docker operations (like building containers). It is created from a Dockerfile (listed below) that installs PhantomJS for running headless Selenium tests and configures Docker certs and environment variables. You can move this terminal to the side since the container is running interactively, so the prompt you are seeing is actually inside the container. Open a new terminal by clicking on the Terminal Emulator icon in the toolbar.

    ```dockerfile
    # Dockerfile for custom vsts agent image with phantomjd and docker config
    FROM microsoft/vsts-agent

    # install phantomjs
    RUN curl -L https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM.tar.bz2 > $PHANTOM.tar.bz2 && \
    tar xvjf $PHANTOM.tar.bz2 -C /usr/local/share && \
    ln -sf /usr/local/share/$PHANTOM/bin/phantomjs /usr/local/share/phantomjs && \
    ln -sf /usr/local/share/$PHANTOM/bin/phantomjs /usr/local/bin/phantomjs && \
    ln -sf /usr/local/share/$PHANTOM/bin/phantomjs /usr/bin/phantomjs
    RUN apt-get update && apt-get install libfontconfig -y

    # configure docker
    COPY .docker /root/.docker/
    ENV DOCKER_HOST=tcp://$HOSTNAME:2376 DOCKER_TLS_VERIFY=1
    ```

    > **Note**: `$HOSTNAME` is a variable that resolves in the setup script that executed when you set up your Azure VM.

1. If your container stops running for some reason, you can run the following commands to restart and attach to it:

    ```sh
    docker start vstsagent
    docker attach vstsagent
    ```
