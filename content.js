// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// document.body.style.border = "5px solid " + getRandomColor();

clssName_ =
  "text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0";
let checkboxStatus = false;

function htmlToText(divs) {  
  var text = "";
  try {
    for (var i = 0; i < divs.length; i++) {
      var innerDiv = divs[i];
      var preTags = innerDiv.getElementsByTagName("pre");
      var listTags = innerDiv.getElementsByTagName("li");
      var pTags = innerDiv.getElementsByTagName("p");
      var question = innerDiv.getElementsByClassName(
        "min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"
      );

      if (question.length > 0 && i % 2 == 0) {
        text += `\n\n# ` + question[0].textContent.replace(/\\/g, "") + "\n";
      }
      if (pTags.length > 0) {
        text += "\n" + pTags[0].textContent.replace(/\\/g, "") + "\n";
      }
      if (preTags.length > 0) {
        var code = preTags[0].textContent;
        text += "\n[CODE]\n" + code + "\n[/CODE]\n";
      }
      if (listTags.length > 0) {
        var list = "\n";
        for (var j = 0; j < listTags.length; j++) {
          list += "- " + listTags[j].textContent + "\n";
        }
      }
    }
  } catch (error) {
    // handle the error
    console.error(error);

    // check the type of error and handle it appropriately
    if (error instanceof TypeError) {
      console.log("TypeError: A type error occurred");
    } else if (error instanceof ReferenceError) {
      console.log("ReferenceError: A reference error occurred");
    } else if (error instanceof SyntaxError) {
      console.log("SyntaxError: A syntax error occurred");
    } else if (error instanceof RangeError) {
      console.log("RangeError: A range error occurred");
    } else {
      console.log("An unknown error occurred");
    }
  }

  return text;
}

function htmlToMarkdown(divs) {
  // Initialize Markdown document
  var markdown = "";
  try {
    for (var i = 0; i < divs.length; i++) {
      var innerDiv = divs[i];
      var preTags = innerDiv.getElementsByTagName("pre");
      var listTags = innerDiv.getElementsByTagName("li");
      var pTags = innerDiv.getElementsByTagName("p");
      var question = innerDiv.getElementsByClassName(
        "min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"
      );

      if (question.length > 0 && i % 2 == 0) {
        for (var j = 0; j < question.length; j++) {
        markdown +=
          `\n\n# ` + question[0].textContent.replace(/\\/g, "") + "\n";
        }
      }
      if (pTags.length > 0) {
        for (var j = 0; j < pTags.length; j++) {
        markdown += "\n" + pTags[j].textContent.replace(/\\/g, "") + "\n";
        }
      }
      if (preTags.length > 0) {
        for (var j = 0; j < preTags.length; j++) {
        var code = preTags[j].textContent;
        markdown += "```\n" + code + "\n```\n";
        }
      }
      if (listTags.length > 0) {
        for (var j = 0; j < listTags.length; j++) {
          list += "- " + listTags[j].textContent + "\n";
        }
      }
    }
  } catch (error) {
    // handle the error
    console.error(error);

    // check the type of error and handle it appropriately
    if (error instanceof TypeError) {
      console.log("TypeError: A type error occurred");
    } else if (error instanceof ReferenceError) {
      console.log("ReferenceError: A reference error occurred");
    } else if (error instanceof SyntaxError) {
      console.log("SyntaxError: A syntax error occurred");
    } else if (error instanceof RangeError) {
      console.log("RangeError: A range error occurred");
    } else {
      console.log("An unknown error occurred");
    }
  }
  return markdown;
}

function htmlToLatex(divs) {
  // Initialize LaTeX document
  var latex = "";
  latex +=
    "\\documentclass{article}\n\n\\usepackage{listings}\n\n\\usepackage{xcolor}\n\n\\lstset{backgroundcolor=\\color{pink!60},numbers=left,basicstyle=\\color{black}\\ttfamily,breaklines=true,breakatwhitespace=false,xleftmargin=20pt,xrightmargin=0pt,columns=flexible,linewidth=\\textwidth}\n\n\\begin{document}\n\n";

  try {
    for (var i = 0; i < divs.length; i++) {
      var innerDiv = divs[i];
      var scss = innerDiv.getElementsByClassName("flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans");
      while (scss.length > 0) {
        scss[0].parentNode.removeChild(scss[0]);
        }
      var preTags = innerDiv.getElementsByTagName("pre");
      var listTags = innerDiv.getElementsByTagName("li");
      var pTags = innerDiv.getElementsByTagName("p");
      var question = innerDiv.getElementsByClassName(
        "min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"
      );

      if (question.length > 0 && i % 2 == 0) {
        for (var j = 0; j < question.length; j++) {
        latex +=
          `\n\n\\section{Question}\n` +
          question[j].textContent.replace(/\\/g, "") +
          "\n";
        }
      }

      if (pTags.length > 0) {
        for (var j = 0; j < pTags.length; j++) {
        latex +=
          "\n\n\\subsection{}\n" +
          pTags[j].textContent+"\n\n";
        }
      }
      if (preTags.length > 0) {
        for (var j = 0; j < preTags.length; j++) {
        latex +=
          `\nCode[${j+1}]\n\\begin{lstlisting}\n` +
          preTags[j].textContent.replace(/\\/g, "") +
          "\n\n\\end{lstlisting}\n";
      }
    }
      if (listTags.length > 0) {
        latex += "\n\n\\begin{itemize}\n";
        for (var j = 0; j < listTags.length; j++) {
          latex +=
            "\\item " + listTags[j].textContent.replace(/\\/g, "") + "\n\n";
        }
        latex += "\n\\end{itemize}\n\n";
      } else {
        continue;
      }
    }
  } catch (error) {
    // handle the error
    console.error(error);

    // check the type of error and handle it appropriately
    if (error instanceof TypeError) {
      console.log("TypeError: A type error occurred");
    } else if (error instanceof ReferenceError) {
      console.log("ReferenceError: A reference error occurred");
    } else if (error instanceof SyntaxError) {
      console.log("SyntaxError: A syntax error occurred");
    } else if (error instanceof RangeError) {
      console.log("RangeError: A range error occurred");
    } else {
      console.log("An unknown error occurred");
    }
  }
  // Close the LaTeX document
  latex += "\n\n\\end{document}\n";
  return latex;
}

function htmlTohtml(divs) {
  // Create an empty string to store the HTML
  var html = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
      </head>
      <body>
      `;

  // Loop through the divs and add their HTML to the string
  for (var i = 0; i < divs.length; i++) {
    var innerDiv = divs[i].innerHTML;
    innerDiv = innerDiv.replace(/<button[^>]*>(.*?)<\/button>/gi, "").replace(/<input[^>]>(.?)<\/input>/gi, "");
    divs[i].innerHTML = innerDiv;
    divs[i].classList.add("box");
    divs[i].style.backgroundColor = i % 2 == 0 ? "#444654" : "#343541";
    divs[i].style.width = "70%";
    divs[i].style.margin = "0 auto";
    divs[i].style.color = "white";
    html += divs[i].outerHTML;    
  }

  html += `
      </body>
      </html>
      `;

  return html;
}

function backupallchat(method) {
  // console.log(method.match(/\-(\w+)$/)[1]);
  method = method.match(/\-(\w+)$/)[1];
  var divs = document.getElementsByClassName(clssName_);
  for (let i = divs.length + 1; i <= divs.length; i++) {
    if (divs[i].textContent.length <= 0) {
      divs[i].pop();
    }
  }  
  var blob;
  if (method === "html") {
    html = htmlTohtml(divs);
    blob = new Blob([html], { type: "text/html" });
  } else if (method === "latex") {
    html = htmlToLatex(divs);
    blob = new Blob([html], { type: "text/latex" });
  } else if (method === "text") {
    html = htmlToText(divs);
    blob = new Blob([html], { type: "text/plain" });
  } else if (method === "markdown") {
    html = htmlToMarkdown(divs);
    blob = new Blob([html], { type: "text/plain" });
  }

  download(blob, method);
}

function backupsomechat(method) {
  // console.log(method.match(/\-(\w+)$/)[1]);
  method = method.match(/\-(\w+)$/)[1];
  var meta_divs = document.getElementsByClassName(clssName_);

  meta_divs = [].slice.call(meta_divs).filter(function(div) {
    return div.textContent.trim() !== '';
  });

  divs = [];  
  for (var i = 0; i < meta_divs.length; i++){
    if (meta_divs[i].childNodes[0].type === "checkbox" && meta_divs[i].childNodes[0].checked) {
      divs.push(meta_divs[i]);
    }
  }

  
  if (method === "html") {
    html = htmlTohtml(divs);
  } else if (method === "latex") {
    html = htmlToLatex(divs);
  } else if (method === "text") {
    html = htmlToText(divs);
  } else if (method === "markdown") {
    html = htmlToMarkdown(divs);
  }

  saveToClipboard(html);
}

//--------------------------- support functions --------------------------- //

function download(blob,method){
  try{
  var a = document.createElement("a");
  confirm("Do you want to download?");
  var fileName = "file." + method;
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.style.display = "none";
  // Add the link to the DOM and click it
  document.body.appendChild(a);
 a.click();  

  // Remove the link from the DOM
  document.body.removeChild(a);
} catch (error) {
  // handle the error
  console.error(error);

  // check the type of error and handle it appropriately
  if (error instanceof TypeError) {
    console.log("TypeError: A type error occurred");
  } else if (error instanceof ReferenceError) {
    console.log("ReferenceError: A reference error occurred");
  } else if (error instanceof SyntaxError) {
    console.log("SyntaxError: A syntax error occurred");
  } else if (error instanceof RangeError) {
    console.log("RangeError: A range error occurred");
  } else {
    console.log("An unknown error occurred");
  }
}
}

function removeCheckboxesFromDivs() {
  checkboxStatus = false;
  var divs = document.getElementsByClassName(clssName_);
  for (var i = 0; i < divs.length; i++) {
    var checkbox = divs[i].getElementsByClassName("checkbox")[0];
    if (checkbox) {
      divs[i].removeChild(checkbox);
    }
  }
}

function addCheckboxesToDivs() {
  if(checkboxStatus === true) {
    checkboxStatus = false;
  var divs = document.getElementsByClassName(clssName_);
  for (var i = 0; i < divs.length; i++) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.value = i;
    checkbox.style.cssText = "margin-right: 10px";
    divs[i].insertBefore(checkbox, divs[i].firstChild);
  }
}
}

function saveToClipboard(value) {
  // check if the browser supports the Clipboard API

  removeCheckboxesFromDivs();

  if (!navigator.clipboard) {
    alert("Clipboard API is not supported in your browser.");
    return;
  }
  // check if the value is too big
  if (value.length > 100000) {
    alert(
      "The returned value is too large to be saved to the clipboard. Please consider reducing its size."
    );
    return;
  }

  // write the value to the clipboard
  navigator.clipboard.writeText(value).then(
    function () {

      alert("The value has been saved to the clipboard successfully.");
    },
    function (error) {
      alert(
        "An error occurred while saving the value to the clipboard.\n\n" + error
      );
    }
  );
}

//--------------- Listener
browser.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "backup-all-chat":
      backupallchat(message.method);
      break;
    case "backup-with-checkboxes":
      backupsomechat(message.method);
      break;
  }
  if (typeof message.type === "number" && !isNaN(message.type)){
    checkboxStatus = true;
    addCheckboxesToDivs();
  }
});
