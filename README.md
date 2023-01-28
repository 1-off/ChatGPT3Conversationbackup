# ChatGPT3Conversationbackup
This is an addon to backup your chats with the GPT3 AI

## Description
Introducing our new Firefox Add-on, the "ChatGPT Backup"! This add-on is designed to help users easily backup their chat conversations with ChatGPT, the cutting-edge language model developed by OpenAI. This add-on is open-source, meaning that it is freely available for anyone to use and modify. With this add-on, you can quickly and easily save a copy of your chat conversations with ChatGPT to your local computer. It is lightweight and easy to use, making it the perfect solution for anyone who wants to keep a record of their interactions with ChatGPT. This add-on is perfect for researchers, developers, and anyone else who wants to keep a record of their conversations with this powerful AI language model. With just a few simple clicks, you can have your chat conversations saved and ready to be reviewed at any time. Try our ChatGPT Backup add-on today and see the difference it can make in your work with ChatGPT.

## function description
#### saveDivsWithClass(className, color1, color2)
This function takes in three arguments:
1. `className`: a string representing the class name of the div elements to be selected.
2. `color1`: a string representing the first background color to be applied to the divs.
3. `color2`: a string representing the second background color to be applied to the divs in alternate.
##### What it does? 
- It selects all the div elements with the specified class using `document.getElementsByClassName(className)`
- It creates an empty string called `html` to store the HTML of the selected divs.
- It loops through the divs and adds their HTML to the `html` string.
- It also applies alternate background color (`color1` and `color2`) to the divs based on their index in the loop using a ternary operator.
- It then creates a Blob with the HTML and the appropriate MIME type.
- It then creates a link element to simulate a download, sets the download attribute to "divs.html", sets the href to the created object URL, and hides the link.
- It adds the link to the DOM and simulates a click on the link using `a.click()`.
- It then removes the link from the DOM.
