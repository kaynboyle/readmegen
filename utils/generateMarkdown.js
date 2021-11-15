// TODO: Create a function to generate markdown for README
function creditCheck(data) {
  let output = " ";
  if (data.credit === 'yes'){
    data.colabGit.forEach(element => {
       output.contcat(element);
    });
    return (data.colabs, output)
  }
  else{ 
    return "n/a"
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
${creditCheck()}
## Test

## Contact Me

[github](https://github.com/${data.github})

\`\`\`
${data.test}
\`\`\`



`;
}

module.exports = generateMarkdown;
