function generateMarkdown(data) {
return `
  # ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributors}
  ## License
  ${data.license}
  ## Test
  ${data.testing}
  ## Questions
  You may contact me with any questions on GitHub at https://github.com/${data.username}.
  ##Badges
  [![License: MIT]
`;
}
module.exports = generateMarkdown;