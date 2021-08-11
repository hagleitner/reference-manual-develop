hmLoadTopic({
hmKeywords:"",
hmTitle:"Eventual consistency",
hmDescription:"Data Analysis Service Changes to the topology will be propagated by the Data Link Monitoring Service via Inter Service Communication Service, so usually changes to the topology...",
hmPrevLink:"c2dd-service-dependencies.html",
hmNextLink:"c2dd-backup-recovery.html",
hmParentLink:"c2dd--operations.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"c2dd.html\">Cloud To Device Distribution Service<\/a> &gt; <a href=\"c2dd--operations.html\">Operations<\/a>",
hmTitlePath:"Backend infrastructure > Cloud To Device Distribution Service > Operations > Eventual consistency",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Eventual consistency<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data Analysis Service<\/span><\/h1>\n\r<p class=\"p_Normal\">Changes to the topology will be propagated by the Data Link Monitoring Service via Inter Service Communication Service, so usually changes to the topology will be immediately recognized to the Cloud To Device Distribution Service, even if the Cloud To Device Distribution Service is down it will handle the queued messages on the Inter Service Communication Service. In rare cases it might still happen, that some topology changes are missed by the Cloud To Device Distribution Service, therefore the Cloud To Device Distribution Service will gather topology information for the recipients of all queued messages once every x hours.<\/p>\n\r"
})
