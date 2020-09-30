<?xml version="1.0" encoding="utf-8"?>
<ServicingStepGroup name="InstallTfsFrameworkHosting">
  <ExecutionHandlers>
    <ExecutionHandler type="Microsoft.VisualStudio.Services.Framework.HostingExecutionHandler" />
  </ExecutionHandlers>
  <Steps>
    <ServicingStep name="Add TFS Hosting Job Definitions" stepPerformer="Job" stepType="UpdateJobDefinitions">
      <StepData>
        <ArrayOfUpdateJobDefinitionsStepData>

          <UpdateJobDefinitionsStepData queueNow="false" staggerSchedules="false">
            <Job JobId="0B58949F-5E2E-453D-80F5-AD5DF4B0D993" Name="Delete Empty Hosts Job" ExtensionName="Microsoft.TeamFoundation.JobService.Extensions.Hosting.TfsDeleteEmptyHostsJob" priorityClass="5">
            </Job>
          </UpdateJobDefinitionsStepData>

          <UpdateJobDefinitionsStepData queueNow="true">
            <Job JobId="8ED77658-36FA-48AB-BEDC-9A4471BEBE31" Name="Extension Fallback Sync Job" ExtensionName="Microsoft.TeamFoundation.JobService.Extensions.Hosting.PersistBuiltInExtensionsJob" priorityClass="5">
              <Schedule>
                <TeamFoundationJobSchedule Interval="3600" ScheduledTime="2008-07-16T03:02:00.0000000Z" priorityLevel="3" />
              </Schedule>
            </Job>
          </UpdateJobDefinitionsStepData>

          <UpdateJobDefinitionsStepData queueNow="false">
            <Job JobId="0852B701-0F93-4852-8B04-B071D3CD8FB1" Name="Drop Finished Target Data Import Databases Job" ExtensionName="Microsoft.VisualStudio.Services.Framework.JobAgentPlugins.DropFinishedDataImportTargetDatabasesJob" priorityClass="1">
              <Schedule>
                <TeamFoundationJobSchedule Interval="86400" ScheduledTime="2008-07-16T03:00:00.0000000Z" />
              </Schedule>
            </Job>
          </UpdateJobDefinitionsStepData>
        </ArrayOfUpdateJobDefinitionsStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Add TFS SU2 Job Definitions" stepPerformer="CloudOnPremSqlServer" stepType="UpdateCloudOnPremSqlServerJobDefinitions" hostedOnly="true">
      <StepData>
        <ArrayOfUpdateJobDefinitionsStepData>
          <UpdateJobDefinitionsStepData queueNow="false">
            <Job JobId="b99a67b7-beb3-4829-a8ae-baf56334ee3b" Name="SqlServer AlwaysOn Health Monitor Job" ExtensionName="Microsoft.TeamFoundation.JobService.Extensions.Hosting.SqlServerAlwaysOnHealthMonitorJob" priorityClass="5">
              <Schedule>
                <TeamFoundationJobSchedule Interval="60" ScheduledTime="2016-07-17T09:00:00.0000000Z" />
              </Schedule>
            </Job>
          </UpdateJobDefinitionsStepData>
        </ArrayOfUpdateJobDefinitionsStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Write required entries to the Registry" stepPerformer="Registry" stepType="SetRegistryValues" hostedOnly="true">
      <StepData>
        <SetRegistryValuesStepData>
          <!-- ResourceUtilization -->
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/DelayTime/Thresholds/User/86400/Flagged" value="40000" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/WhitelistedUrl/Thresholds/User/300/Tarpit" value="60" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/WhitelistedUrl/Track/RelativePath/%2F_apis%2FUtilization%2FUsageSummary" value="Usage page" />
          <SetRegistryValue path="/Service/ThrottlingNotification/Settings/UsageSummaryQueryableServices" value="tfs;TFS;00025394-6065-48CA-87D9-7F5672854EF7,ReleaseManagement;Release Management;0000000D-0000-8888-8000-000000000000,AX;Analytics;0000003C-0000-8888-8000-000000000000" />

          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_apis%2FUtilization%2FUsageSummary" value="Usage page" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_apps%2Fhub%2Fms.vss-tfs-web.utilization-usagesummary-hub" value="Usage page (account settings)" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_apps%2Fhub%2Fms.vss-tfs-web.utilization-userusagesummary-hub" value="Usage page (user)" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_public%2F_Bundling%2FDynamicBundles" value="Dynamic  bundles" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_public%2F_Bundling%2FContent" value="Public bundles" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_apis%2Fcustomerintelligence%2FEvents" value="CI" />
          <SetRegistryValue path="/Service/ResourceUtilization/Extensions/CPUCycles/Whitelist/RelativePath/%2F_usersSettings%2Fusage" value="User Page(Usage) new UI" />

          <!-- Azure application settings -->
          <SetRegistryValue path="/Configuration/Azure/ServiceManagementUrl" value="$i$AzureServiceManagementUrl$i$" />

          <!-- Disabled UserAgents -->
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/VSSConverter80/UserAgent" value="Team Foundation (VSSConverter.exe, 8.*)" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/VSSConverter90/UserAgent" value="Team Foundation (VSSConverter.exe, 9.*)" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS80/UserAgent" value="Team Foundation (*.exe, 8.0.50727.&lt;4406)" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS80/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.WhidbeyGDRRequired##" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS90/UserAgent" value="Team Foundation (*.exe, 9.0.21022.*)" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS90/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.OrcasGDRRequired##" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS90SP1/UserAgent" value="Team Foundation (*.exe, 9.0.30729.&lt;4172)" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/TFS90SP1/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.OrcasGDRRequired##" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise10/UserAgent" value="Teamprise 1.*" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise10/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.Teamprise33Required##" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise20/UserAgent" value="Teamprise 2.*" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise20/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.Teamprise33Required##" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise30/UserAgent" value="Teamprise*/3.&lt;3*" />
          <SetRegistryValue path="/Configuration/Application/DisabledRequests/Teamprise30/Message" value="##Microsoft.TeamFoundation.ApplicationTier.PlugIns.Core.CorePluginResources.Teamprise33Required##" />

          <!-- Account Migration -->
          <SetRegistryValue path="/Configuration/Servicing/AccountMigrateEnabled" value="true" />

          <!-- OrgId dev/test environment redirector-->
          <!-- MSMRedirectorKey is used to prevent an endpoint necessary for MSA-MSM integration to work in internal environments
           from being exploited as an open redirector. It is technically a "secret", but relatively low value.
           This is not a good pattern to follow for any other secret usage.
           We will be deprecating and then removing its usage as soon as the Identity team can complete ACS decommission work for interactive authentication. -->
          <SetRegistryValue path="/OrgId/Authentication/MSMRedirectorKey" value="$i$MSMRedirectorKey$i$" />
          <SetRegistryValue path="/OrgId/Authentication/DisambiguationEndpointUrl" value="$i$OrgIdAuthenticationDisambiguationEndpointUrl$i$" />

          <!-- Delete Empty Accounts Job defaults -->
          <SetRegistryValue path="/Configuration/Servicing/DeleteEmptyAccountsJob/MaxNumberOfJobs" value="50" />

          <!-- Register service bus event listener for ReleaseManagement Events for TFS -->
          <SetRegistryValue path="/Service/MessageBus/SubscriberJobs/Microsoft.TeamFoundation.ReleaseManagement.Server" value="Microsoft.TeamFoundation.ReleaseManagement.Server.ReleaseManagementEventListener" />

          <!-- Database Management -->
          <SetRegistryValue path="/Configuration/DatabaseManagement/SizePercentageToSealDatabase" value="75" />

          <!-- DataImport -->
          <SetRegistryValue path="/Configuration/DataImport/AllowCustomTargetServiceObjective" value="true" />
        </SetRegistryValuesStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Deploy RU pipeline Guid.Empty whitelist" stepPerformer="ResourceUtilization" stepType="DeployEntitySpecificThresholds" hostedOnly="true">
      <StepData>
        <SpecificThresholds>
          <SpecificThreshold ruleName="Concurrency.Pipeline" entity="00000000-0000-0000-0000-000000000000" threshold="-1, -1, -1, " />
          <SpecificThreshold ruleName="ATCPU.Pipeline" entity="00000000-0000-0000-0000-000000000000" threshold="-1, -1, -1, " />
          <SpecificThreshold ruleName="DBCPU.Pipeline" entity="00000000-0000-0000-0000-000000000000" threshold="-1, -1, -1, " />
        </SpecificThresholds>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Add system store ACL templates for team projects" stepPerformer="SecurityTemplate" stepType="UpdateSecurityTemplateEntries" hostedOnly="true">
      <StepData>
        <ArrayOfSecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the OssManagement service principal -->
          <SecurityTemplateEntryStepData id="990F9E86-F795-4359-A566-06E2BBAC5ECA" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000014-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          
          <!-- Grant CREATE_PROJECTS permission to the Azure Boards service principal -->
          <SecurityTemplateEntryStepData id="5BAB676B-3C7C-443F-9944-F3A149856DF0" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the Pipelines service principal -->
          <SecurityTemplateEntryStepData id="41903fb5-7f1d-4669-8834-56a6258166f5" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the Portal Extension service principal -->
          <SecurityTemplateEntryStepData id="0040D132-07FC-4736-85CC-CF2EE5D9964A" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000003B-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the 1CS service principal -->
          <SecurityTemplateEntryStepData id="8F3F64BC-1884-46AA-8AFD-C5EA8F2E64C2" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000035-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the Microsoft.VisualStudio.MobileCenter service principal -->
          <SecurityTemplateEntryStepData id="b64bec44-fbbd-41ef-8bb9-99b7c6af13be" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "tenantSpecific", "value": { "token" : "NAMESPACE", "tenantIds" : $i$MobileCenterValidTenantIds$i$ } }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000004A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS permission to the Microsoft.VisualStudio.MobileCenter.Test service principal -->
          <SecurityTemplateEntryStepData id="7eedab20-5bfe-40bb-b517-8855e695fc6f" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "tenantSpecific", "value": { "token" : "NAMESPACE", "tenantIds" : $i$MobileCenterValidTestTenantIds$i$ } }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "F000004A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read, Publish Test Results, Delete Test Results, View Test Results, Manage Properties permissions to all team projects to the TFS service principal (self-reference) -->
          <SecurityTemplateEntryStepData id="F6ABDE60-D91D-4C75-9347-1229E62B0EAA" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="131849">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000002-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant 'Read' and 'Work Item Delete and Restore' permission to all team projects to the 1CS service principal (8193 = 8192 + 1) -->
          <SecurityTemplateEntryStepData id="B1C8EDCA-D9B8-492E-9BE1-133FCB799747" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="8193">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000035-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the ServiceHooks service principal -->
          <SecurityTemplateEntryStepData id="AB882FAA-18D2-4DE0-8029-067AA336F762" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000003-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Release Management service principal -->
          <SecurityTemplateEntryStepData id="356922EF-9D09-4082-837D-5B2A6275970D" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000D-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the DevSecOps service principal -->
          <SecurityTemplateEntryStepData id="B90091E9-309F-4C53-8793-B0AAF27FC6AA" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000059-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the DevTestLabs service principal -->
          <SecurityTemplateEntryStepData id="61AA450E-3F23-40FD-B923-6F5F02976C08" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000E-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the CodeLens service principal -->
          <SecurityTemplateEntryStepData id="796B7C8A-2B8E-433E-8126-74B680F2380D" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000F-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Search service principal -->
          <SecurityTemplateEntryStepData id="CB5FDC1F-C889-4DE0-A5D6-7100EFAEC484" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000010-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the AccountAdmin service principal -->
          <SecurityTemplateEntryStepData id="6EF8142F-ABE4-40A4-B7FC-637266E9CA07" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000013-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the OssManagement service principal -->
          <SecurityTemplateEntryStepData id="F6612070-95C0-41DB-96C8-C778C47F8C50" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000014-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Analytics service principal -->
          <SecurityTemplateEntryStepData id="3AC6CA41-D357-40B0-B847-5D4FDDE50F75" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000003C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Microsoft.Azure.WebSites service principal -->
          <SecurityTemplateEntryStepData id="32A7ED76-A7F5-4D04-B7CF-1FB5237B4882" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000003F-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Keros service principal -->
          <SecurityTemplateEntryStepData id="0E174910-090C-4AFF-B4E7-0DCE618DB4E6" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000004E-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the AEX service principal -->
          <SecurityTemplateEntryStepData id="9B34AE5D-3C84-4BF5-AEF0-A02760B29ACB" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000041-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the AzChatOps service principal -->
          <SecurityTemplateEntryStepData id="03E5B127-5326-4CCE-901B-91B4B4E6AC19" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000067-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Kalypso service principal -->
          <SecurityTemplateEntryStepData id="616499D8-E105-4FE1-9C95-9FCB6DA7ACF0" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000044-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the OrgSearch service principal -->
          <SecurityTemplateEntryStepData id="4E20FCA3-A7F0-4720-AA6A-BD92FE23D3F2" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000004B-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the CLT service principal -->
          <SecurityTemplateEntryStepData id="42FD727B-E970-46C0-9876-0884960A9CB6" hostType="4" namespaceId="52D39943-CB85-4d7f-8FA8-C6BAAC873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the TCM service principal -->
          <SecurityTemplateEntryStepData id="73C58F0E-8B75-4AFB-A543-BC9654154A2B" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="521">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000054-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Feed service principal -->
          <SecurityTemplateEntryStepData id="FC85C785-48E4-44C5-8A3B-86CEDE4851A3" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000036-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Packaging service principal -->
          <SecurityTemplateEntryStepData id="02149AE8-4CB8-46C7-89E1-365CD87DF4D1" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000030-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission and bypass project property cache to all team projects to the Azure Boards service principal -->
          <SecurityTemplateEntryStepData id="3DD73935-DAE1-4F0A-A0EF-F0600270EC45" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="524289">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Pipelines service principal -->
          <SecurityTemplateEntryStepData id="72c63782-9ef2-4563-8c98-0da5a438c764" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ, GENERIC_WRITE, ADMINISTER_BUILD, START_BUILD, EDIT_BUILD_STATUS, UPDATE_BUILD permission to the Microsoft.VisualStudio.MobileCenter service principal -->
          <SecurityTemplateEntryStepData id="750b3d02-ada2-417b-a122-1bf047bb85aa" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="243">
            <TokenTemplate>{ "type": "tenantSpecific", "value": { "token" : "$PROJECT", "tenantIds" : $i$MobileCenterValidTenantIds$i$ } }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000004A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ, GENERIC_WRITE, ADMINISTER_BUILD, START_BUILD, EDIT_BUILD_STATUS, UPDATE_BUILD permission to the Microsoft.VisualStudio.MobileCenter.Test service principal -->
          <SecurityTemplateEntryStepData id="5483c843-d952-4f70-872b-5987d9b95688" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="243">
            <TokenTemplate>{ "type": "tenantSpecific", "value": { "token" : "$PROJECT", "tenantIds" : $i$MobileCenterValidTestTenantIds$i$ } }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "F000004A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Allow the TFS service principal to change project visibility to support automated CVS takedowns-->
          <SecurityTemplateEntryStepData id="FCAF48A0-CA4C-4A63-8B7C-4E0D441EFFBD" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="4194304">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000002-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ permission to all team projects to the Governance service principal -->
          <SecurityTemplateEntryStepData id="EC4F620F-B680-49E4-8A8C-90C76BD37E68" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000049-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ permission to all team projects to the Artifact service principal -->
          <SecurityTemplateEntryStepData id="11D4FDBC-D8EF-47C4-8A04-5031ACB70A12" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000016-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ permission to all team projects to the Blobstore service principal -->
          <SecurityTemplateEntryStepData id="DD09BDB4-31F8-45B7-84D8-0A297B334AC8" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000019-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant all non system masked permission bits (except WORK_ITEM_DELETE, WORK_ITEM_MOVE, WORK_ITEM_PERMANENTLY_DELETE) to the hosted stakeholder license holders -->
          <SecurityTemplateEntryStepData id="0D384CAD-AEC2-404B-A7B7-CA501EC7FD53" hostType="4" namespaceId="52D39943-CB85-4D7F-8FA8-C6BAAC873819" allow="15932415">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "license", "value": "stakeholder" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS(4) permission to the hosted stakeholder license holders -->
          <SecurityTemplateEntryStepData id="00F86BEB-0329-4F33-8D3A-1DC82CE5BE48" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "license", "value": "stakeholder" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant CREATE_PROJECTS(4) permission to TFS service principal to support project precreation -->
          <SecurityTemplateEntryStepData id="BFB34EC1-45D1-461D-B239-B6DE1A15F8F7" hostType="4" namespaceId="3E65F728-F8BC-4ECD-8764-7E378B19BFA7" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "NAMESPACE" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000002-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          
          <!-- Grant DELETE(4) permission to TFS service principal so that it can delete precreated project -->
          <SecurityTemplateEntryStepData id="FA7874B5-7D82-4820-B279-8BCB2C12B4CA" hostType="4" namespaceId="52D39943-CB85-4D7F-8FA8-C6BAAC873819" allow="4">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000002-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant READ(1), DELETE(4) & MANAGE PROPERTIES(131072) permission on all team projects to the Portal Extension service principal -->
          <SecurityTemplateEntryStepData id="44A9E95F-870B-46BC-9C7A-04CB2A82B6DA" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="131077">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000003B-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          
         <!-- Grant READ(1), DELET_PROJECT(4) permission to GenevaActions Customer Support Extension -->
          <SecurityTemplateEntryStepData id="25A0C550-C21E-47C8-8B46-3712E1ACD4EB" hostType="4" namespaceId="52D39943-CB85-4D7F-8FA8-C6BAAC873819" allow="5">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005B-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to all team projects to the Audit service principal -->
          <SecurityTemplateEntryStepData id="0423E390-0200-4CC4-A6F5-9E87B626A79C" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000064-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant GENERIC_READ permission to all team projects to Governance (MS Dependabot Service Identity) -->
          <SecurityTemplateEntryStepData id="C683B9EC-3119-4F3E-8B8D-C2238B1A0029" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="1">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "serviceIdentity", "value": "96e43d25-8325-4a32-ad3e-467af4642cfd" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
        </ArrayOfSecurityTemplateEntryStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Add L2 only system store ACL templates for team projects" stepPerformer="SecurityTemplate" stepType="UpdateSecurityTemplateEntries" hostedOnly="true" l2Only="true">
      <StepData>
        <ArrayOfSecurityTemplateEntryStepData>
          <!-- Grant to TFS service principal (self-reference) additional permissions in L2 -->
          <!-- Manage System Properties (262144), Bypass Property Cache (524288) -->
          <SecurityTemplateEntryStepData id="21D48B05-A9F8-4851-B7DC-F313504B09F2" hostType="4" namespaceId="52d39943-cb85-4d7f-8fa8-c6baac873819" allow="786432">
            <TokenTemplate>{ "type": "literal", "value": "$PROJECT" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000002-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
        </ArrayOfSecurityTemplateEntryStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Enable tracepoint for L2 environment to debug licensing issue." stepPerformer="Sql" stepType="ExecuteStoredProcedure" hostedOnly="true" l2Only="true">
      <StepData>
        <ExecuteStoredProcedureStepData name="prc_CreateTrace" bindPartitionId="false">
          <Parameter name="@traceId" value="5843cc84-402e-400e-a665-28b7f81ffef1" />
          <Parameter name="@tracepoint" value="520065" />
        </ExecuteStoredProcedureStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Add system store ACL templates for security backing store (SBS)" stepPerformer="SecurityTemplate" stepType="UpdateSecurityTemplateEntries" hostedOnly="true">
      <StepData>
        <ArrayOfSecurityTemplateEntryStepData>

          <!-- Team Project Security Namespace -->
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the ReleaseManagement service principal -->
          <SecurityTemplateEntryStepData id="40612170-7E1F-4590-9EBE-018E824B1A96" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000D-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the DTL service principal -->
          <SecurityTemplateEntryStepData id="34A7A853-B8FF-4FAA-AFD9-CB412331C538" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000E-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Search service principal -->
          <SecurityTemplateEntryStepData id="58D35EF6-9BCF-44C9-891A-473F569B4739" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000010-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Analytics service principal -->
          <SecurityTemplateEntryStepData id="CAE7E8FF-E9F5-4413-96A2-5CA181394053" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000003C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Compliance service principal -->
          <SecurityTemplateEntryStepData id="431F6871-1FE3-48C0-AB00-A8CA31BF4B92" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000035-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the DevSecOps service principal -->
          <SecurityTemplateEntryStepData id="183DA457-17AB-4891-8251-05396B298AFD" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000059-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Keros service principal -->
          <SecurityTemplateEntryStepData id="E3CA3534-29C7-47FB-A388-434B2AD46F8A" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000004E-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the CLT service principal -->
          <SecurityTemplateEntryStepData id="507B867D-A904-4E12-AA4F-E20E9342379E" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000000A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the TCM service principal -->
          <SecurityTemplateEntryStepData id="CF7F8AC1-C7AF-4D69-B715-4FC39D7D649E" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000054-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Governance service principal -->
          <SecurityTemplateEntryStepData id="D42A6881-2BCA-4160-8D47-8A7B46DE5717" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000049-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Feed service principal -->
          <SecurityTemplateEntryStepData id="FA346CEC-BCE1-47E6-BBB3-FE29D87F91E0" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000036-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Packaging service principal -->
          <SecurityTemplateEntryStepData id="6E94A6E4-AF21-4297-8F13-E9A53BE15FFA" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000030-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Azure Boards  service principal -->
          <SecurityTemplateEntryStepData id="ADA051A7-358F-4A0E-9CE1-A8E6F637A014" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- Grant Read and Write permission to the Project security namespace at the ProjectCollection host level to the Pipelines service principal -->
          <!-- (the namespaceId here is the Security Backing Store namespace. the Project namespace is defined in the token.) -->
          <SecurityTemplateEntryStepData id="ffbe88d2-9da3-4da5-b805-0f57ca8dbdfe" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="3">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>

          <!-- CSS Security Namespace -->
          <!-- Grant Read permission to the CSS security namespace at the ProjectCollection host level to the Search service principal -->
          <SecurityTemplateEntryStepData id="F9CC3F24-280A-42FF-82E9-7AC404343646" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/83E28AD4-2D72-4CEB-97B0-C7726D5502C3/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000010-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the CSS security namespace at the ProjectCollection host level to the TCM service principal -->
          <SecurityTemplateEntryStepData id="B0AFA033-3356-43EC-BB39-44BE55F94F79" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/83E28AD4-2D72-4CEB-97B0-C7726D5502C3/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000054-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the CSS security namespace at the ProjectCollection host level to the Azure boards service principal -->
          <SecurityTemplateEntryStepData id="AD698F84-7416-4E10-BEC9-62549E7409BE" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/83E28AD4-2D72-4CEB-97B0-C7726D5502C3/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Service hooks service principal -->
          <SecurityTemplateEntryStepData id="0614885B-EF84-4AA8-9F7E-08F078D8C97B" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000003-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Azure boards service principal -->
          <SecurityTemplateEntryStepData id="F0FFEAEC-595F-42A8-A895-94D46F8D527F" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/3e65f728-f8bc-4ecd-8764-7e378b19bfa7/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005C-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read and Write permission to the Collections security namespace at the ProjectCollection host level to the Pipelines service principal -->
          <!-- this is needed for Dreamlifter to grant permissions to the service identity -->
          <SecurityTemplateEntryStepData id="88b15365-fc0c-4f1c-8821-3ad543b92755" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="3">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/3e65f728-f8bc-4ecd-8764-7e378b19bfa7/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "0000005A-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Artifact service principal -->
          <SecurityTemplateEntryStepData id="C2C49260-0EA6-42AB-A21E-4A1CD31CC651" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000016-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Blobstore service principal -->
          <SecurityTemplateEntryStepData id="6CFABC8F-C38E-485C-B131-52622851761C" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000019-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
          <!-- Grant Read permission to the Project security namespace at the ProjectCollection host level to the Audit service principal -->
          <SecurityTemplateEntryStepData id="4B876092-9CDB-42C0-BAB2-CCDB5C97B32F" hostType="1" namespaceId="32B259FC-926F-411D-82FA-E13864305465" allow="1">
            <!-- Token format: First path part is the GUID of the namespace to which permission should be granted.
                               Second path part: Host level (1, 2, or 4) where the rule applies -->
            <TokenTemplate>{ "type": "literal", "value": "/52D39943-CB85-4D7F-8FA8-C6BAAC873819/4" }</TokenTemplate>
            <SubjectTemplate>{ "type": "servicePrincipal", "value": "00000064-0000-8888-8000-000000000000" }</SubjectTemplate>
          </SecurityTemplateEntryStepData>
        </ArrayOfSecurityTemplateEntryStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Set registry keys for hosted only" stepPerformer="Registry" stepType="SetRegistryValues" hostedOnly="true">
      <StepData>
        <SetRegistryValuesStepData>

          <!--Set Metabase Keys for Early Adopter-->
          <SetRegistryValue path="/Service/Commerce/Metering/EarlyAdopterSelectDate" value="2013-12-16T14:00:00.000" />
          <SetRegistryValue path="/Service/Commerce/Metering/EarlyAdopterIncentiveDuration" value="142.00:00:00" />

          <!--Default Standard Min Service Objective for Tfs-->
          <SetRegistryValue path="/Configuration/DatabaseManagement/SqlRightSizing/DefaultPartitionDbMinStandardServiceObjective" value="S3" />

        </SetRegistryValuesStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create new pool definition for CollectionStagingPool" stepPerformer="DatabaseManagement" stepType="CreateDatabasePool">
      <StepData>
        <CreateDatabasePoolStepData poolName="CollectionStagingPool" databaseType="Partition" credentialPolicy="InProcessRotation" initialCapacity="1" createThreshold="0" growBy="0" servicingOperations="CreatePartitionDbSchema;$i$PartitionDbServicingOperations$i$;CreatePartitionDbComplete" maxDatabaseLimit="$i$PartitionDbMaxDatabaseLimit$i$" deltaOperationPrefixes="$i$PartitionDbDeltaOperationPrefixes$i$" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create new pool definition for CollectionExportPool" stepPerformer="DatabaseManagement" stepType="CreateDatabasePool">
      <StepData>
        <CreateDatabasePoolStepData poolName="CollectionExportPool" databaseType="Partition" credentialPolicy="ProvisionNewCredentialForEachUse" initialCapacity="1" createThreshold="0" growBy="$i$CollectionExportPoolSize$i$" servicingOperations="" maxDatabaseLimit="$i$CollectionExportPoolSize$i$" serviceObjective="$i$CollectionExportDbServiceObjective$i$" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Install Service Identity Signing Key to StrongBox" stepPerformer="StrongBox" stepType="AddStrongboxValue">
      <StepData>
        <AddStrongboxValueStepData drawer="FedAuthSigningCertificates"
                                   key="ServiceIdentitySigningKeys"
                                   value="$i$ServiceIdentitySigningKey$i$"/>
      </StepData>
    </ServicingStep>

    <!-- Test user. If ApplicationAdminAccountName is string.Empty, no user will be created.-->
    <ServicingStep name="Provision Application Administrator Service Identity" stepPerformer="Acs" stepType="ProvisionServiceIdentity">
      <StepData>
        <ProvisionServiceIdentityStepData serviceIdentityName="$i$ApplicationAdminAccountName$i$" serviceIdentityPassword="$i$ApplicationAdminAccountPassword$i$" isAdmin="true" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create Version Control MessageBus publisher" stepPerformer="MessageBus" stepType="CreatePublisher">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.VersionControl.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create Git Server MessageBus publisher" stepPerformer="MessageBus" stepType="CreatePublisher">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.Git.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create Build MessageBus publisher" stepPerformer="MessageBus" stepType="CreatePublisher">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.Build.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create BuildTagsAddedEvent MessageBus publisher" stepPerformer="MessageBus" stepType="CreatePublisher">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.Build.Server.BuildTagsAddedEvent" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create Project Service Publisher" stepPerformer="MessageBus" stepType="CreatePublisher" hostedOnly="true">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.Project.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create WorkItem Service Publisher" stepPerformer="MessageBus" stepType="CreatePublisher" hostedOnly="true">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.WorkItemTracking.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Create Wiki Server MessageBus Publisher" stepPerformer="MessageBus" stepType="CreatePublisher" hostedOnly="true">
      <StepData>
        <CreatePublisherData name="Microsoft.TeamFoundation.Wiki.Server" />
      </StepData>
    </ServicingStep>

    <ServicingStep name="Setting the aggregation time interval for workitem changed notifications" stepPerformer="Registry" stepType="SetRegistryValues">
      <StepData>
        <SetRegistryValuesStepData>
          <SetRegistryValue path="/Service/WorkItemTracking/Settings/WorkItemUpdateEventsAggregationTime" value="5" />
        </SetRegistryValuesStepData>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Setup SERVERUICULTURE Token" stepPerformer="Integration" stepType="ConfigureServerUICultureToken" executeAlways="true" hostedOnly="true" />

    <ServicingStep name="Register Framework Extended Attributes" stepPerformer="RegistrationBackwardsCompatibility" stepType="RegisterExtendedAttribute" hostedOnly="true">
      <StepData>
        <ExtendedAttributesForTool xmlns:tfs="http://schemas.microsoft.com/TeamFoundation/2005/06/Services/Registration/03" toolId="vstfs">
          <Attributes>
            <RegistrationExtendedAttribute2>
              <tfs:Name>InstalledUICulture</tfs:Name>
              <tfs:Value>$$SERVERUICULTURE$$</tfs:Value>
            </RegistrationExtendedAttribute2>
          </Attributes>
        </ExtendedAttributesForTool>
      </StepData>
    </ServicingStep>

    <ServicingStep name="Set IUserAccessLoggingService Implementation" stepPerformer="Registry" stepType="RegisterExtensibleTypes">
      <StepData>
        <RegisterExtensibleTypesStepData>
          <RegisterExtensibleType type="IUserAccessLoggingService" implementation="Microsoft.TeamFoundation.Framework.Hosting.Server.TfsUserAccessLoggingService, Microsoft.TeamFoundation.Framework.Hosting.Server" />
        </RegisterExtensibleTypesStepData>
      </StepData>
    </ServicingStep>
  </Steps>
</ServicingStepGroup>
