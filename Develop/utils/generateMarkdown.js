// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data[0].licenseChosen) {
    return ''
  } else {
    console.log(data[0].licenseChosen)
    return licenseChosen
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].projectTitle} 's README.md

  ## Description 
  ${data[0].projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  -[License](#license)
  -[Contribution](#contribution)
  -[Tests](#test)
  -[Questions](#questions)

  ## Installation
  ${data[0].usageInstructions}

  ## License
  ${data[0].licenseChosen}

  ## Contribution
  ${data[0].contribute}

  ## Tests
  ${data[0].tests}

  ## Questions
  Visit my github repo here!
  https://github.com/${data[0].githubUsername}

  and feel free to email me at ${data[0].email} with any questions
`;
}

module.exports = generateMarkdown;
