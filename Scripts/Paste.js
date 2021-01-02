var BTN_SUBMIT_ID = "btn-submit";
var PASTEBIN_ID = "pastebin";
var pastebin;
var btnSubmit;

function ProcessPaste()
{
    GetRequiredElements();
    targetNode.innerHTML = pastebin.value;
    ProcessPaste.prettyPrint();
    MakeLinks();
    LinkIncludes();
    AddFooter();
}

function GetRequiredElements()
{
    if (pastebin == null) pastebin = document.getElementById(PASTEBIN_ID);
    if (btnSubmit == null) btnSubmit = document.getElementById(BTN_SUBMIT_ID);
}