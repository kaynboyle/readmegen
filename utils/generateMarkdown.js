// TODO: Create a function to generate markdown for README
function creditCheck(data) {
  let object = " ";
  item = data.colabGit.split(',');
  console.log(item);
  // item.forEach(gitLink);
  function gitLink(data) {
    object += "[github](https://github.com/"(data.colabGit)
  };
  console.log(getLink(data));
  if (data.credit = "yes"){
    // data.colabGit.forEach(element => {
    //    output.contcat("https://github.com/"(data.colabGit));
    
    return (data.colabs);
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

${creditCheck(data)(data)}

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
