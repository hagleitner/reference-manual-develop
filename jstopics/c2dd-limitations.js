hmLoadTopic({
hmKeywords:"",
hmTitle:"Limitations",
hmDescription:"Tasks might result in duplicated processes on gateway and therefore duplicated actions on the recipient device. E.g. The Cloud To Device Distribution Service calls a direct...",
hmPrevLink:"c2dd-operation-principle.html",
hmNextLink:"c2dd-message-types.html",
hmParentLink:"c2dd.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"c2dd.html\">Cloud To Device Distribution Service<\/a>",
hmTitlePath:"Backend infrastructure > Cloud To Device Distribution Service > Limitations",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Limitations<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Tasks might result in duplicated processes on gateway and therefore duplicated actions on the recipient device. E.g. The Cloud To Device Distribution Service calls a direct method on a gateway, the gateway accepts the call and initiates the appropriate actions on the recipient device. The actions succeed but before the gateway can post the result of the process to the Event Hub it looses power. Therefore the information about successfull delivery is not available to the Cloud To Device Distribution Service. In that case the Cloud To Device Distribution Service service would retry to fulfil the task after a certain time. This might even lead to an overwriting of other tasks of for the same recipient device that were created at a later point in time.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
