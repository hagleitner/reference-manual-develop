hmLoadTopic({
hmKeywords:"",
hmTitle:"Eventual consistency",
hmDescription:"Data Link monitoring Service The C2DD gets topology information from the DLMS and will  Changes to the topology will be propagated by the DLMS via Inter service communication,...",
hmPrevLink:"service-dependencies-and-resil.html",
hmNextLink:"backup--recovery.html",
hmParentLink:"operations.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"c2dd.html\">C2D Message Delivery Service<\/a> &gt; <a href=\"operations.html\">Operations<\/a>",
hmTitlePath:"Backend infrastructure > C2D Message Delivery Service > Operations > Eventual consistency",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Eventual consistency<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Data Link monitoring Service<\/span><\/h1>\n\r<p class=\"p_Normal\">The C2DD gets topology information from the DLMS and will <\/p>\n\r<p class=\"p_Normal\">Changes to the topology will be propagated by the DLMS via Inter service communication, so usually changes to the topology will be immediately recognized to the C2DD, even if the C2DD is down it will handle the queued messages on the inter service communication bus. In rare cases it might still happen, that some topology changes are missed by the C2DD, therefore the C2DD will Gather topology information for the recipients of all queued messages once every x hours.<\/p>\n\r"
})
