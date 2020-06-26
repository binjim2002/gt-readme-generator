// function to generate markdown for README
function generateLicense(licenses) {
  console.log(licenses) ;

function generateMarkdown(data) {
  generateLicense(data.license);


  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
Description

