// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licensing) {
    // return license badge
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licensing) {
    // return license link
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licensing) {
    // return license section of README
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing:
  ![license](https://img.shields.io/badge/license-${data.licensing}-blue)
  ## Description:
  ${data.description}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact-info](#contact-info)
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.licensing}
  ## Contributing:
  ${data.contribution}
  ## Tests:
  ${data.testing}
  ## Contact Info:
  Github: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
