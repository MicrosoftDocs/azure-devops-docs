# Running a self-hosted agent in Azure Kubernetes with Docker using Windows Nodes

## Requirements
- Container Registry (Azure Container Registry or DockerHub or other provider)
- Container Registry username and password (or token)
- Azure Kubernetes with a Windows Node
- Access to Kubernetes Shell
- PAT (Personal Access Token)

### Create and build the Dockerfile

Next, we'll create the Dockerfile.

1. Open a powershell window.
2. Create a new directory:

   ```shell
   mkdir C:\dockeragent
   ```

3. Change directories to this new directory:

   ```shell
   cd C:\dockeragent
   ```

4. Create a temporary powershell script and execute with the following content to download the latest agent:
   ```powershell
   param (
                [Parameter(Mandatory=$true)][String]$AZP_TOKEN,
                [Parameter(Mandatory=$true)][String]$AZP_URL
            )
   Write-Host "Determining matching Azure Pipelines agent..." -ForegroundColor Cyan
   
   $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$AZP_TOKEN"))
   $package = Invoke-RestMethod -Headers @{Authorization=("Basic $base64AuthInfo")} "$AZP_URL/_apis/distributedtask/packages/agent?platform=win-x64&`$top=1"
   $packageUrl = $package[0].Value.downloadUrl
   
   Write-Host $packageUrl
   
   Write-Host "Downloading and installing Azure Pipelines agent..." -ForegroundColor Cyan
   
   $wc = New-Object System.Net.WebClient
   $wc.DownloadFile($packageUrl, "$(Get-Location)\Dependencies\agent.zip")
   ```

5. Save the following content to a file called `C:\dockeragent\Dockerfile` (no file extension):

   ```docker
   FROM mcr.microsoft.com/windows/servercore:ltsc2019
     
   WORKDIR /azp
         
   run mkdir agent
   
   COPY Dependencies\\agent.zip agent
   
   RUN powershell expand-archive -path .\agent\agent.zip -destinationpath .\agent
   
   RUN powershell Remove-Item .\agent\agent.zip
   
   COPY start.ps1 .
   COPY stop.ps1 .
   
   CMD powershell .\start.ps1
   ```

6. Save the following content to `C:\dockeragent\start.ps1`:

   ```powershell
   
   if (-not (Test-Path Env:AZP_URL)) {
     Write-Error "error: missing AZP_URL environment variable"
     exit 1
   }
      
   if (-not (Test-Path Env:AZP_TOKEN_FILE)) {
     if (-not (Test-Path Env:AZP_TOKEN)) {
       Write-Error "error: missing AZP_TOKEN environment variable"
       exit 1
     }
   
     $Env:AZP_TOKEN_FILE = "\azp\.token"
     $Env:AZP_TOKEN | Out-File -FilePath $Env:AZP_TOKEN_FILE
   }
      
   Remove-Item Env:AZP_TOKEN
      
      
   if ($Env:AZP_WORK -and -not (Test-Path $Env:AZP_WORK)) {
     New-Item $Env:AZP_WORK -ItemType directory | Out-Null
   }
      
   $azpPool = "$(if (Test-Path Env:AZP_POOL) { ${Env:AZP_POOL} } else { 'Default' })"
   
   $azpAgentName = "$(if (Test-Path Env:AZP_AGENT_NAME) { ${Env:AZP_AGENT_NAME} } else { ${Env:computername} })"
   
   if (-not (Test-Path "\azp\agent")) {
       New-Item "\azp\agent" -ItemType directory | Out-Null
   }
       
   # Let the agent ignore the token env variables
   $Env:VSO_AGENT_IGNORE = "AZP_TOKEN,AZP_TOKEN_FILE"
       
   Set-Location agent
      
   $azpToken = "$(Get-Content ${Env:AZP_TOKEN_FILE})"
   
   function SetupAgent
   {
       Write-Host "1. Getting Current Agents" -ForegroundColor Cyan
   
       $currentDate = (Get-Date).ToString('MMddyyyyhhmmssffff')
   
       $azpAgentName = "$azpAgentName-$currentDate"
   
       Write-Host "2. Configuring Azure Pipelines agent: $azpAgentName" -ForegroundColor Cyan
   
       .\config.cmd --unattended `
           --agent "$azpAgentName" `
           --url "$(${Env:AZP_URL})" `
           --auth PAT `
           --token "$azpToken" `
           --pool "$azpPool" `
           --work "$(if (Test-Path Env:AZP_WORK) { ${Env:AZP_WORK} } else { '_work' })" `
           --replace
   
       Write-Host "3. Running Azure Pipelines agent..." -ForegroundColor Cyan
   
       .\run.cmd
   
   }    
   
   try
   {
       SetupAgent     
   }
   finally
   {
     Write-Host "4. Cleanup. Removing Azure Pipelines agent..." -ForegroundColor Cyan
     
     .\config.cmd remove --unattended `
       --auth PAT `
       --token "$azpToken"
   }
   ```
    
7. Save the following content to `C:\dockeragent\stop.ps1`:
   ```powershell
   Set-Location c:/azp
   
   $azpToken = "$(Get-Content ./.token)"
   
   Write-Host "Cleanup. Removing Azure Pipelines agent..." -ForegroundColor Cyan
   
   .\\agent\config.cmd remove --unattended --auth PAT --token "$azpToken"
   
   ```

8. Run the following docker commands within that directory:

   ```shell
   docker build -t dockeragent:latest .
   docker tag dockeragent:latest my.azurecr.io/azdockeragent
   docker push my.azurecr.io/azdockeragent
   ```
    
### Create and deploy the Kubernetes Pod

Next let's create the kubernetes file

9. Create a Kubernetes Deployment Template, save the following content to `C:\dockeragent\kubernetes-deployment.yml`:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: azure-devops-docker-agent-deployment
     labels:
       app: azure-devops-docker-agent-label
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: azure-devops-docker-agent-label
     template:
       metadata:
         labels:
           app: azure-devops-docker-agent-label
       spec:
         containers:
         - name: azure-devops-docker-agent
           image: my.azurecr.io/azdockeragent:latest
           lifecycle:
             preStop:
               exec:
                 command: ["powershell",". c:/azp/stop.ps1"]
           env:
             - name: AZP_URL
               value: "BASE_TFS_URL"
             - name: AZP_TOKEN
               value: "PAT"
             - name: AZP_AGENT_NAME
               value: "Pipeline-Agent"
             - name: AZP_POOL
               value: "PipelineContainers"
           resources:
             requests:
               memory: "2004Mi"
               cpu: "0.5"
             limits:
               memory: "2128Mi"
               cpu: "1"
           ports:
             - containerPort: 8080
         imagePullSecrets:
           - name: dockeracr
         restartPolicy: Always
   ```
10. Setup Kubernetes trust relationship with Container Registry

    We will create a secret that Kubernetes will use to authenticate with the docker container registry.
    The container registry can be Azure Container Registry, DockerHut or other Container Registry.
    
    ```shell
    kubectl create secret docker-registry dockeracr --docker-server=https://my.azurecr.io --docker-username=MY_Docker_Username --docker-password="MY_Docker_Password" 
    ```
  
11. Run the following kubernetes command within that directory:

    ```shell
    kubectl apply -f kubernetes-deployment.yaml
    ```

That's it! you're good to go.

## Useful commands
   
  Get Azure Credentials for Kubernetes:
  ```shell
  az aks get-credentials --resource-group "MY_RESOURCE_GROUP" --name "MY_CLUSTER_NAME"
  ```
   
  Debug container:
  ```shell
  kubectl exec -it POD_NAME powershell
  ```
   
  Pod details:
  ```shell
  kubectl describe pods my-pod
  ```
  
## More Information
   
  [Kubernetes Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
   
  [Configure Azure CNI](https://docs.microsoft.com/en-us/azure/aks/configure-azure-cni)
   
  [Running a self-hosted agent in Docker](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/docker?view=azure-devops)
   
