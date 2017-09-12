### How do I run the agent behind a web proxy?

In the agent root directory, create .proxy file with your proxy server url.

```bash
echo http://name-of-your-web-proxy:8888 > .proxy
```  

If your proxy doesn't require authentication, then you're ready to configure and run the agent as explained above.

Note: For backwards compatibility, if the proxy is not specified as described above, the agent also checks for a proxy URL from the VSTS_HTTP_PROXY environment variable.

If your proxy requires authentication, the simplest way to handle it is to grant permissions to the user under which the agent runs. Otherwise, you can provide credentials through environment variables. When you provide credentials through environment variables, the agent keeps the credentials secret by masking them in job and diagnostic logs. To grant credentials through environment variables, set the following variables:

```bash
export VSTS_HTTP_PROXY_USERNAME=proxyuser
export VSTS_HTTP_PROXY_PASSWORD=proxypassword
```  

If you are running your agent as a service:

0. Add the following section to .env file under the agent root directory,
 ```
VSTS_HTTP_PROXY_USERNAME=proxyuser
VSTS_HTTP_PROXY_PASSWORD=proxypassword
 ```

0. [Update the environment variables](#service-update-environment-variables).

This procedure enables the agent infrastructure to operate behind a web proxy. Your build definition and scripts must still handle proxy configuration for each task and tool you run in your build. For example, if you are using a task that makes a REST API call, you must configure the proxy for that task.