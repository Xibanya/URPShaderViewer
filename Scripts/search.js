
class Feedback 
{
    constructor(resultsElement) 
    {
        this.CLASS = "feedback";
        this.HIDDEN_CLASS = "feedback hidden";
        this.node = document.getElementById(FEEDBACK_ID);
        if (this.node == null)
        {
            this.node = document.createElement('div');
            this.node.classList = this.HIDDEN_CLASS;
            if (resultsElement != null)
            {
                resultsElement.parentNode.insertBefore(
                    this.node, resultsElement.nextSibling);
            }
        }
    }
    get Node() { return this.node; }
    Hide() 
    {
        this.node.classList = this.HIDDEN_CLASS;
    }
    Show(msg)
    {
        this.node.classList = this.CLASS;
        if (msg != null) this.node.innerText = msg;
    }
    set Message(msg)
    {
        this.node.innerText = msg;
    }
    get Message() { return this.node.innerText; }
}
var searchType;
var matches = 0;
var SNIPPET_SIZE = 150;
var zeroResults = []
var noResultsMsg;
var resultsContainer;
var TOGGLE_ID = "results-toggle"
var INPUT_ID = "text-input-search";
var FEEDBACK_ID = "search-feedback"
var inputField;
var toggleButton;
var feedback;

const SearchType = 
{
    ALL: 'All',
    DEFINITIONS: 'Definitions',
    TITLES: 'Titles'
}
const ResultType = {
    INCLUDE: 'Include',
    DEFINITION: 'Definition'
}

function GetRequiredNodes()
{
    if (targetNode == null) targetNode = document.getElementById(VIEWER_ID);
    if (resultsContainer == null) resultsContainer = document.getElementById(RESULTS_ID);
    if (inputField == null) inputField = document.getElementById(INPUT_FIELD_ID);
    if (toggleButton == null) toggleButton = document.getElementById(TOGGLE_ID);
    if (feedback == null) feedback = new Feedback(resultsContainer);
}

function GetSearchTerm()
{
    if (inputField == null) inputField = document.getElementById(INPUT_ID);
    return inputField? inputField.value : null;
}

function DoSearch()
{
    GetRequiredNodes();
    if (searchType)
    {
        var searchTerm = GetSearchTerm();
        if (searchTerm)
        {
            switch(searchType) 
            {
                case SearchType.ALL:

                case SearchType.DEFINITIONS:
                case SearchType.TITLES:
            }
        }
        else
        {
            //feedback: enter something to search
        }
    }
}

function DoSearchAll(searchTerm)
{

}

