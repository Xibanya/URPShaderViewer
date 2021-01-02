// ---- SHADER VIEWER UTILS ---- //

//puts links on Shader names
function MakeShaderDirectory(database)
{
    var shaderTable = database.exec("SELECT * FROM Shaders");
    var nodes = document.getElementsByClassName(DIRECTORY_CLASS);
    var i;
    var NAME = 0;
    var SHADER_PATH = 1;
    var FILE_PATH = 2;
    for (i = 0; i < nodes.length; i++) 
    {
        table = JSON.parse(JSON.stringify(shaderTable));
        table[0].values.forEach(row => {
            if (nodes[i].innerText.includes(row[NAME]))
            {
                var page = LIBRARY_PATH + row[FILE_PATH] + row[NAME] + ".html";
                var newTag = "<a href=\"" + page + "\">" + row[NAME]+ "</a>";
                console.log(newTag);
                findAndReplace(row[NAME], newTag, nodes[i]);
            }
        });
    }
}

//puts links on known Includes
function MakeIncludesDirectory()
{
    var includesTable = db.exec("SELECT * FROM Includes");
    var nodes = document.getElementsByClassName(PRETTYPRINT_CLASS);
    var i;
    var NAME = 1;
    var FILE_PATH = 2;
    for (i = 0; i < nodes.length; i++) 
    {
        table = JSON.parse(JSON.stringify(includesTable));
        table[0].values.forEach(row => {
            if (nodes[i].innerText.includes(row[NAME]))
            {
                var page = LIBRARY_PATH + row[FILE_PATH] + row[NAME] + ".html";
                var newTag = "<a href=\"" + page + "\">" + row[NAME]+ "</a>";
                findAndReplace(row[NAME], newTag, nodes[i]);
            }
        });
    }
}