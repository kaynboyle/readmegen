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
function tutorialCheck(data){
  var linkArray = []
  if (data.tutorials = 'no'){
    return "n0000"
  }
  else{
    var item = data.tutorials.split(', ');
    item.forEach(mytutorialFunction);
    function mytutorialFunction(element, index){
      linkArray.push(`[tutorial ${index+1}]${element}\n`);
    };
    return linkArray
  }
};
function creditCheck(data) {
  var fakearray = []
  console.log(data);
  // item.forEach(gitLink);
  // function gitLink(data) {
  //   object += "[github](https://github.com/"(data.colabGit)
  if (data.credit = "yes"){
    // data.colabGit.forEach(element => {
    //    output.contcat("https://github.com/"(data.colabGit));
    var item = data.colabGit.split(', ');
    item.forEach(myfunction); 
    function myfunction(element,index){
      fakearray.push(`[github ${element}] http://github.com/${element}\n`);
    };
    for (let i=0; i < fakearray.length; i++){
      return fakearray[i]

    };
      // , generategithubLink(data)
  }
  else{ 
    return "n/a";
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

## Credits
${data.colabs}
${creditCheck(data)}
${tutorialCheck(data)}

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
