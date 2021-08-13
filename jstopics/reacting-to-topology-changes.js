hmLoadTopic({
hmKeywords:"",
hmTitle:"Reacting to topology changes",
hmDescription:"Changes to the topology - i.e which BLE-networked device is connected to the HsM Backend via which gateway device - will be propagated by the Data Link Monitoring Service via...",
hmPrevLink:"queuing-and-retry.html",
hmNextLink:"time-to-live.html",
hmParentLink:"c2dd.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"c2dd.html\">Cloud To Device Distribution Service<\/a>",
hmTitlePath:"Backend infrastructure > Cloud To Device Distribution Service > Reacting to topology changes",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Reacting to topology changes<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Changes to the topology - i.e which BLE-networked device is connected to the HsM Backend via which gateway device - will be propagated by the Data Link Monitoring Service via Inter Service Communication Service. <\/p>\n\r<p class=\"p_Normal\">Via the Inter Service Communication Service the Cloud To Device Distribution Service can therefore react immediately to topology changes. Tasks that could not be processed before because the Cloud To Device Distribution Service could not find a gateway for this task, will be retried after such a topology change.<\/p>\n\r"
})
