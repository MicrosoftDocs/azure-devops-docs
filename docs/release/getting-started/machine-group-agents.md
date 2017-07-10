---
title: Configure Deployment Group agents
description: Configure Deployment Group agents for Windows, Android, xCode and many other kinds of apps on Visual Studio Team Services and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: code reference (API)
toc: show
ms.assetid: 817DE22C-432D-4388-A3BF-FD975545B526
ms.manager: douge
ms.author: alewis
ms.date: 11/09/2016
---

# Configure Deployment Group agents

_Deployment Groups_ are logical groups of deployment target machines with agents installed on each of them. They also specify the security context and runtime targets for the agents. When authoring a Team Services Release definition, you can specify the deployments targets for a 
[phase](../../build/concepts/process/phases.md) using the deployment group.

Deployment group agents are pull based agents and are different from the currently available build and deployment automation agents. You can install the Deployment Group agent on each of your target servers directly, and then drive rolling deployments to those servers. Unlike the agents which are installed on a set of proxy servers in an agent pool and drive deployments to remote target servers. 

You can use the Deployment Group agent as cross-platform agent and its pull-based execution model to easily drive deployments on many servers no matter which domain they are on, without having to worry about the myriad of pre-requisites. 
In addition to scalability, Deployment Group also provide traceability of releases all the way down to agents.

### Create a Deployment Group

1. Open your Team Services or TFS team project in your web browser. 
2. Open the **Deployment Groups** tab of the **Build & Release** hub and choose **+ Deployment Group** to create a new group
3. Provide a name for the Deployment in the **Details** tab
4. In the **Security** tab, add users and give them appropriate permissions to administer, manage, view and use the groups. 

## Get a Deployment Group agent

To build your code or deploy your software you need at least one agent, and as you add more code and people, you'll eventually need more.

* [Windows](#windowsagent)
* [OSX](#osxagent)
* [Linux](#linuxagent)

<a name="windowsagent"></a>
## Configure Windows Agent

### Requirements

[Windows System Pre-requisites](https://aka.ms/vstsagentwinsystem)
 
### Configure your account

Create a PAT token with "all scopes" by following the steps outlined [here](https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate).
 
### Download and create the agent

1. Open your Team Services or TFS team project in your web browser. 
1. Open the **Deployment Groups** tab of the **Build &amp; Release** hub and choose an existing Deployment Group, or choose **+ Deployment Group** to create a new one.
1. In the **Machines** hub under the selected Deployment Group, choose **+ Machine**.
1. Choose **Windows**.
1. Choose the **Download** button to download the agent.
1. Run the commands under **Create the agent**.

### Configure the agent  

1. Run: `PS C:\agent> .\config.cmd --machinegroup`
1. Respond to the prompts by providing the following
   - Server URL
   - PAT token
   - Project Name
   - Deployment Group Name
   - Agent Name
1. You're asked if you want to run the agent as a service. 
   - If this is the first time you're running this agent, press Enter `N` to test the agent in [interactive mode](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#interactive).
   - Otherwise, enter `Y` to [run the agent as a service](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#service).

### Run interactively
After you've configured the agent, we recommend that you first try it in interactive mode to make sure it works. Also, in some cases you might need to run the agent interactively for production use. For example, if you need to run an elevated process or run UI tests.

If you configured the agent to run interactively, to run it: `PS C:\agent> .\run.cmd`

### Run as a service
After you've verified that the agent is working, for production use, we recommend that you run the agent as a service. The main advantage is that the agent stays more reliably in a running state. For example, it starts automatically when you restart the machine and after some kinds of failures.

After you configure the agent to run as a service (see above), it starts automatically. You can view and control the agent running status from the Services snap-in. Run `services.msc` and look for "VSTS Agent (*name of your agent*)".

If you need to change the logon account, don't do it from the services snap-in. Instead, see the information below to re-configure the agent.

### Replace an agent
When you configure an agent using the same name as an agent that already exists, you're asked if you want to replace the existing agent. If you answer `Y`, then make sure you remove the agent (see below) that you're replacing. Otherwise after a few minutes of conflicts, one of the agents will shut down.

### Remove and re-configure an agent

To remove the agent: `.\config remove`

After you've removed the agent, you can 
[configure it again](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#download_configure).

### Help on other options

To learn about other options: `.\config --help`

The help provides information on authentication alternatives and unattended configuration.

### Run the agent behind a web proxy

In the agent root directory, create .proxy file with your proxy server url.

`echo http://name-of-your-proxy-server:8888 | Out-File .proxy`

If your proxy doesn't require authentication, then you're ready to configure and run the agent as explained above.

>Note: For backwards compatibility, if the proxy is not specified as described above, the agent also checks for a proxy URL from the VSTS\_HTTP\_PROXY environment variable.

#### Proxy authentication

If your proxy requires authentication, the simplest way to handle it is to grant permissions to the user under which the agent runs. Otherwise, you can provide credentials through environment variables. 

#### Provide credentials through environment variables

When you provide credentials through environment variables, the agent keeps the credentials secret by masking them in job and diagnostic logs.

* Set the following environment variables:  

`batch set VSTS_HTTP_PROXY_USERNAME=proxyuser set VSTS_HTTP_PROXY_PASSWORD=proxypassword`

Now you're ready to configure and run the agent as explained above.

#### Limitations

This procedure enables the agent infrastructure to operate behind a web proxy. Your build definition and scripts must still handle proxy configuration for each task and tool you run in your build. For example:

* If you use Git, you must configure a proxy for it.
* If you are using a task that makes a REST API call, you must configure the proxy for that task.

<a name="osxagent"></a>
## Configure OS X Agent

### Requirements

[System pre-requisites](https://aka.ms/vstsagentosxsystem)
 
### Configure your account

Create a PAT token with "all scopes" by following the steps outlined [here](https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate).
 
### Download and create the agent

1. Open your Team Services or TFS team project in your web browser. 
1. Open the **Deployment Groups** tab of the **Build &amp; Release** hub and choose an existing Deployment Group, or choose **+ Deployment Group** to create a new one.
1. In the **Machines** hub under the selected Deployment Group, choose **+ Machine**.
1. Choose **Windows**.
1. Choose the **Download** button to download the agent.
1. Run the commands under **Create the agent**.

### Configure the agent  

1. Run: `~/myagent$ ./config.sh --machinegroup`
1. Respond to the prompts by providing the following
   - Server URL
   - PAT token
   - Project Name
   - Deployment Group Name
   - Agent Name
1. You're asked if you want to run the agent as a service. 
   - If this is the first time you're running this agent, press Enter `N` to test the agent in [interactive mode](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#interactive).
   - Otherwise, enter `Y` to [run the agent as a service](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#service).

### Run interactively

After you've configured the agent, we recommend that you first try it in interactive mode to make sure it works. Also, in some cases you might need to run the agent interactively for production use. For example, if you need to run an elevated process.

To run the agent interactively:

1. If you have been running the agent as a service, [uninstall the service](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#service_uninstall).
1. Run: `~/myagent$ ./run.sh`
 
### Run as a launchd service

After you've verified that the agent is working, for production use, we recommend that you run the agent as a service. The main advantage is that the agent stays more reliably in a running state. For example, it starts automatically when your account is logged in to the machine and after some kinds of failures.

We provide the `./svc.sh` script for you to run and manage your agent as a launchd LaunchAgent service. The service has access to the UI to run your UI tests.

>Note: If you prefer other approaches, you can use whatever kind of service mechanism you prefer. See [Service files. ](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#service_files)

### Tokens
In the section below, these tokens are replaced:

* `{agent-name}`
* `{tfs-name}`

For example, you have configured an agent (see above) with the name `our-osx-agent`. In the following examples, `{tfs-name}` will be either:

* Team Services: the name of your account. For example if you connect to fabrikam.visualstudio.com , then the service name would be `vsts.agent.fabrikam.our-osx-agent`

* TFS: the name of your on-premises TFS AT server. For example if you connect to our-server:8080/tfs, then the service name would be `vsts.agent.our-server.our-osx-agent`

### Commands

#### Change to the agent directory

For example, if you installed in the myagent subfolder of your home directory:
`cd ~/myagent$`

#### Install
Command: `./svc.sh install`

This command creates a launchd plist that points to `./runsvc.sh`. This script sets up the environment (more details below) and starts the agent's host. 

#### Start
Command: `./svc.sh start`

Output:  
`starting vsts.agent.{tfs-name}.{agent-name}`  
`status vsts.agent.{tfs-name}.{agent-name}:`

`/Users/{your-name}/Library/LaunchAgents/vsts.agent.{tfs-name}.{agent-name}.plist`

`Started:`  
`13472 0 vsts.agent.{tfs-name}.{agent-name}`

The left number is the pid if the service is running. If second number is not zero, then a problem occurred.

#### Status

Command: `./svc.sh status`

Output:  
`status vsts.agent.{tfs-name}.{agent-name}:`

`/Users/{your-name}/Library/LaunchAgents/vsts.{tfs-name}.{agent-name}.testsvc.plist`

`Started:`  
`13472 0 vsts.agent.{tfs-name}.{agent-name}`
 
The left number is the pid if the service is running. If second number is not zero, then a problem occurred.

#### Stop
Command: `./svc.sh stop`

Output:  
`stopping vsts.agent.{tfs-name}.{agent-name}`  
`status vsts.agent.{tfs-name}.{agent-name}:`

`/Users/{your-name}/Library/LaunchAgents/vsts.{tfs-name}.{agent-name}.testsvc.plist`

`Stopped`

#### Uninstall

>You should stop before you uninstall.

Command: `./svc.sh uninstall`

#### Automatic log on and lock

The service runs when the user logs in. If you want the agent service start when the machine restarts, you can configure the machine it to automatically log on and lock on startup. 
See [Auto Logon and Lock](http://www.tuaw.com/2011/03/07/terminally-geeky-use-automatic-login-more-securely/).

#### Update environment variables
When you start the service, it takes a snapshot of your PATH other useful environment variables such as PATH, LANG, JAVA\_HOME, ANT\_HOME, and MYSQL\_PATH. If you need to update the variables (for example, after installing some new software):

* `./env.sh`
* `./svc.sh stop`
* `./svc.sh start`

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts. For example, you could set up the environment or call scripts. 

1. Edit `runsvc.sh`.
1. Replace the following line with your instructions:  

`# insert anything to setup env when running as a service`

### Service Files

When you install the service, some service files are put in place.

#### .plist service file

A .plist service file is created:  
`~/Library/LaunchAgents/vsts.agent.{tfs-name}.{agent-name}.plist`

For example:  
`~/Library/LaunchAgents/vsts.agent.fabrikam.our-osx-agent.plist`  
`sudo ./svc.sh install generates this file from this template: ./bin/vsts.agent.plist.template`

#### .service file

`./svc.sh start` finds the service by reading the `.service` file, which contains the path to the plist service file described above. 

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a launchd LaunchAgent service. But you can use whatever kind of service mechanism you prefer.

You can use the template described above as to facilitate generating other kinds of service files. For example, you modify the template to generate a service that runs as a launch daemon if you don't need UI tests and don't want to configure automatic log on and lock. 
See [Mac Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html).

#### Replace an agent

When you configure an agent using the same name as an agent that already exists, you're asked if you want to replace the existing agent. If you answer `Y`, make sure you remove the agent (see below) that you're replacing. Otherwise after a few minutes of conflicts, one of the agents will shut down.

#### Remove and re-configure an agent

To remove the agent:

1. Stop and uninstall the service as explained above.
1. `./config.sh remove`
1. Enter your credentials.

After you've removed the agent, you can [configure it again](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#download_configure).

#### Help on other options

To learn about other options:

`./config.sh --help`

The help provides information on authentication alternatives and unattended configuration.

### Run the agent behind a web proxy

In the agent root directory, create .proxy file with your proxy server url.

`echo http://name-of-your-web-proxy:8888 > .proxy`

If your proxy doesn't require authentication, then you're ready to configure and run the agent as explained above.

>Note: For backwards compatibility, if the proxy is not specified as described above, the agent also checks for a proxy URL from the VSTS\_HTTP\_PROXY environment variable.

#### Proxy authentication

If your proxy requires authentication, the simplest way to handle it is to grant permissions to the user under which the agent runs. Otherwise, you can provide credentials through environment variables. 

#### Provide credentials through environment variables

When you provide credentials through environment variables, the agent keeps the credentials secret by masking them in job and diagnostic logs.

**If you are running the agent interactively:**

* Set the following environment variables:  

`bash export VSTS_HTTP_PROXY_USERNAME=proxyuser export VSTS_HTTP_PROXY_PASSWORD=proxypassword` 

Now you're ready to configure and run the agent as explained above.

**If you are running your agent as a service:**

1. Add the following section to `.env` file under the agent root directory:  
   - `VSTS_HTTP_PROXY_USERNAME=proxyuser`  
   - `VSTS_HTTP_PROXY_PASSWORD=proxypassword`

1. [Update the environment variables](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#service_update_environment_variables)

#### Limitations

This procedure enables the agent infrastructure to operate behind a web proxy. Your build definition and scripts must still handle proxy configuration for each task and tool you run in your build. For example:

* If you use Git, you must configure a proxy for it.
* If you are using a task that makes a REST API call, you must configure the proxy for that task.

### Q & A

**Where can I learn more about how the launchd service works?**

* [Mac Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)
* [launchd.plist manpage](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man5/launchd.plist.5.html)

<a name="linuxagent"></a>
## Configure Linux Agent

### Requirements

* [Ubuntu System Pre-requisites](https://aka.ms/vstsagentubuntusystem)
* [Redhat/CentOS System Pre-requisites](https://aka.ms/vstsagentredhatsystem)
 
### Configure your account

Create a PAT token with "all scopes" by following the steps outlined [here](https://www.visualstudio.com/en-us/docs/setup-admin/team-services/use-personal-access-tokens-to-authenticate).
 
### Download and create the agent

1. Open your Team Services or TFS team project in your web browser. 
1. Open the **Deployment Groups** tab of the **Build &amp; Release** hub and choose an existing Deployment Group, or choose **+ Deployment Group** to create a new one.
1. In the **Machines** hub under the selected Deployment Group, choose **+ Machine**.
1. Choose **Windows**.
1. Choose the **Download** button to download the agent.
1. Run the commands under **Create the agent**.

### Configure the agent
 
1. Run: `~/myagent$ ./config.sh --machinegroup`
1. Respond to the prompts by providing the following
   - Server URL
   - PAT token
   - Project Name
   - Deployment Group Name
   - Agent Name
1. You're asked if you want to run the agent as a service. 
   - If this is the first time you're running this agent, press Enter `N` to test the agent in [interactive mode](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#interactive).
   - Otherwise, enter `Y` to [run the agent as a service](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-windows#service).

### Run interactively

After you've configured the agent, we recommend that you first try it in interactive mode to make sure it works. Also, in some cases you might need to run the agent interactively for production use. For example, if you need to run an elevated process.

To run the agent interactively:

1. If you have been running the agent as a service, [uninstall the service](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#service_uninstall).
2. Run: `~/myagent$ ./run.sh`
 
### Run as a launchd service

#### systemd service

After you've verified that the agent is working, for production use, we recommend that you run the agent as a service. The main advantage is that the agent stays more reliably in a running state. For example, it starts automatically when you restart the machine and after some kinds of failures.

If your build agent is running on these operating systems, you can run the agent as a systemd service:

* Ubuntu 16 LTS or newer
* Red Hat 7.1 or newer

We provide the `./svc.sh` script for you to run and manage your agent as a systemd service. 

>Note: If you have a different distribution, or if you prefer other approaches, you can use whatever kind of service mechanism you prefer. See 
[Service files](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-linux#service_files). 

### Commands

#### Change to the agent directory

For example, if you installed in the `myagent` subfolder of your home directory:
`cd ~/myagent$`

#### Install

Command: `sudo ./svc.sh install`

This command creates a service file that points to `./runsvc.sh`. This script sets up the environment (more details below) and starts the agents host. 

#### Start

`sudo ./svc.sh start`

#### Status

`sudo ./svc.sh status`

#### Stop

`sudo ./svc.sh stop`

#### Uninstall

> You should stop before you uninstall.

`sudo ./svc.sh uninstall`

### Update environment variables

When you start the service, it takes a snapshot of your PATH other useful environment variables such as PATH, LANG, JAVA\_HOME, ANT\_HOME, and MYSQL\_PATH. If you need to update the variables (for example, after installing some new software):

1. `./env.sh`
1. `$ sudo ./svc.sh stop`
1. `$ sudo ./svc.sh start`

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts. For example, you could set up the environment or call scripts. 

1. Edit `runsvc.sh.`
1. Replace the following line with your instructions:  

`# insert anything to setup env when running as a service`

### Service files

When you install the service, some service files are put in place. 

#### systemd service file

A `systemd` service file is created:  
`/etc/systemd/system/vsts.agent.{tfs-name}.{agent-name}.service`

For example, you have configured an agent (see above) with the name `our-linux-agent`. The service file will be either:

* Team Services: the name of your account. For example, if you connect to fabrikam.visualstudio.com, the service name would be `/etc/systemd/system/vsts.agent.fabrikam.our-linux-agent.service`

* TFS: the name of your on-premises TFS AT server. For example, if you connect to our-server:8080/tfs, the service name would be `/etc/systemd/system/vsts.agent.our-server.our-linux-agent.service`

`sudo ./svc.sh install` generates this file from this template:  
`./bin/vsts.agent.service.template`

#### .service file

`sudo ./svc.sh start` finds the service by reading the `.service` file, which contains the name of systemd service file described above. 

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a systemd service. But you can use whatever kind of service mechanism you prefer (for example: initd or upstart).

You can use the template described above as to facilitate generating other kinds of service files.

### Replace an agent

When you configure an agent using the same name as an agent that already exists, you're asked if you want to replace the existing agent. If you answer `Y`, make sure you remove the agent (see below) that you're replacing. Otherwise after a few minutes of conflicts, one of the agents will shut down.

### Remove and re-configure an agent

To remove the agent:

1. Stop and uninstall the service as explained above.
1. Run `3.	./config.sh remove`
1. Enter your credentials.

After you've removed the agent, you can [configure it again](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-osx#download_configure).

### Help on other options

To learn about other options:

`./config.sh --help`

The help provides information on authentication alternatives and unattended configuration.

### Run the agent behind a web proxy

In the agent root directory, create .proxy file with your proxy server url:

`echo http://name-of-your-web-proxy:8888 > .proxy`

If your proxy doesn't require authentication, then you're ready to configure and run the agent as explained above.

>Note: For backwards compatibility, if the proxy is not specified as described above, the agent also checks for a proxy URL from the VSTS\_HTTP\_PROXY environment variable.

#### Proxy authentication

If your proxy requires authentication, the simplest way to handle it is to grant permissions to the user under which the agent runs. Otherwise, you can provide credentials through environment variables. 

#### Provide credentials through environment variables

When you provide credentials through environment variables, the agent keeps the credentials secret by masking them in job and diagnostic logs.

**If you are running the agent interactively:**

* Set the following environment variables:  

`bash export VSTS_HTTP_PROXY_USERNAME=proxyuser export VSTS_HTTP_PROXY_PASSWORD=proxypassword `

Now you're ready to configure and run the agent as explained above.

**If you are running your agent as a service:**

1. Add the following section to .env file under the agent root directory:   
   - `VSTS_HTTP_PROXY_USERNAME=proxyuser`  
   - `VSTS_HTTP_PROXY_PASSWORD=proxypassword`
1. [Update the environment variables](https://www.visualstudio.com/en-us/docs/build/admin/agents/v2-linux#service_update_environment_variables).

#### Limitations

This procedure enables the agent infrastructure to operate behind a web proxy. Your build definition and scripts must still handle proxy configuration for each task and tool you run in your build. For example:

* If you use Git, you must configure a proxy for it.
* If you are using a task that makes a REST API call, you must configure the proxy for that task.

#### Q & A

**How do I deploy an agent on Azure?**

* [Visual Studio devops Blog: Deploying an Azure Red Hat Linux VM Running Apache Tomcat](https://blogs.msdn.microsoft.com/visualstudioalm/2016/08/18/deploying-an-azure-red-hat-linux-vm-running-apache-tomcat-for-use-with-visual-studio-team-services-and-team-foundation-server)
* [Visual Studio devops Blog: Deploying an Azure Ubuntu Linux VM Running Apache Tomcat](https://blogs.msdn.microsoft.com/visualstudioalm/2016/08/18/deploying-an-azure-ubuntu-linux-vm-running-apache-tomcat-for-use-with-visual-studio-team-services-and-team-foundation-server) 

**Why is sudo needed to run the service commands?**

`./svc.sh` uses `systemctl`, which requires `sudo`.  
Source code: [systemd.svc.sh.template on GitHub](https://github.com/Microsoft/vsts-agent/blob/master/src/Misc/layoutbin/systemd.svc.sh.template)

