$(document).ready(function(){
    marked.setOptions({
        renderer: new marked.Renderer(),
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false
      });


    let inputTxt = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n2. Use just 1s if you want!\n3. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

    $('#editor').val(inputTxt);

    let input = marked.parse(inputTxt);
    $('#preview').html(input);

    $('button').click(function(event){
        let btnID = event.currentTarget.id;
        switch(btnID){
            case 'e-exp':{
                $('#e-exp').toggleClass('hide');
                $('#e-com').toggleClass('hide');
                $('#preview-pane').toggleClass('hide');
                $('textarea').attr('rows', '40');
            }
            break;
            case 'e-com':{
                $('#e-com').toggleClass('hide');
                $('#e-exp').toggleClass('hide');
                $('#preview-pane').toggleClass('hide');
                $('textarea').attr('rows', '10');
            }
            break;

            case 'p-exp':{
                $('#p-exp').toggleClass('hide');
                $('#p-com').toggleClass('hide');
                $('#editor-pane').toggleClass('hide');
            }
            break;

            case 'p-com':{
                $('#p-com').toggleClass('hide');
                $('#p-exp').toggleClass('hide');
                $('#editor-pane').toggleClass('hide');
            }
            break;
        }
    })

    $('#editor').keyup(function(){
        let temp = $(this).val();
        let parseTxt = marked.parse(temp);
        $('#preview').html(parseTxt);
    });
});