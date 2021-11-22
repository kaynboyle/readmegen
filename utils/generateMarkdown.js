// TODO: Create a function to generate markdown for README


// item = data.colabGit.split(',');
// console.log(item);
// function splitIt(data){
//   return data.colabGit[0]
  
// }
// console.log(splitIt);
// function generategithubLink(data){
  
//   return "https://github.com/"+(data.colabGit)
// };

function usageFunction(data){
  if (data.usage == 'no'){
    return "n/a"
  }
  else{
    return `![alt text](assets/images/${data.usage})`
  }
}
function tutorialCheck(data){
  var linkArray = []
  if (data.tutorials == 'no'){
    return "n/a"
    console.log(data.tutorials);
  }
  else{
    var item = data.tutorials.split(', ');
    item.forEach(mytutorialFunction);
    function mytutorialFunction(element, index){
      linkArray.push(`[tutorial ${index+1}]${element}\n`);
    };
    console.log(data.tutorials);
    return linkArray
  }
};
function thirdParty(data) {
  var thirdpartyArray = [];
  console.log(data.thirdpartyNames);
  if (data.thirdpartyYN == "yes"){
    var item = data.thirdpartyLinks.split(', ');
    var item2 = data.thirdpartyNames.split(', ');
    for(var i = 0; i < item.length; i++) {
      thirdpartyArray.push(`[${item2[i]}] ${item[i]}\n`);
    };
    return thirdpartyArray.join("\r\n");
    // item.forEach(myfunction); 
    // function myfunction(element,index){
    //   fakearray.push(`[github ${element}] http://github.com/${element}\n`);
    // };
    // for (let i=0; i < fakearray.length; i++){
    //   return fakearray[i]

    // };
      // , generategithubLink(data)
  }
  else{ 
    return " ";
  }
};
function creditCheck(data) {
  var fakearray = [];
  console.log(data);
  // item.forEach(gitLink);
  // function gitLink(data) {
  //   object += "[github](https://github.com/"(data.colabGit)
  if (data.credit == "yes"){
    console.log(data.credit);
    // data.colabGit.forEach(element => {
    //    output.contcat("https://github.com/"(data.colabGit));
    var item = data.colabGit.split(', ');
    for(var i = 0; i < item.length; i++) {
      fakearray.push(`[github ${item[i]}] http://github.com/${item[i]}\n`);
    };
    return fakearray.join("\r\n");
    // item.forEach(myfunction); 
    // function myfunction(element,index){
    //   fakearray.push(`[github ${element}] http://github.com/${element}\n`);
    // };
    // for (let i=0; i < fakearray.length; i++){
    //   return fakearray[i]

    // };
      // , generategithubLink(data)
  }
  else{ 
    return " ";
  }
};
 
function generateMarkdown(data) {
  return `# ${data.title}

![Github License](https://img.shields.io/badge/license-${data.licenses}-blue.svg)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${usageFunction(data)}
${data.usageDetails}

## Credits
### Collaborators
${data.colabs}
${creditCheck(data)}
### Tutorials
${tutorialCheck(data)}
### Third Party Documentation
${data.thirdpartyNames}
${thirdParty(data)}

## Test

${data.test}

## Contact Me

[github](https://github.com/${data.github})

\`\`\`
${data.test}
\`\`\`



`;
}

module.exports = generateMarkdown;
