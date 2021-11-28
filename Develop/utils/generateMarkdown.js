// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensing) {
  if (licensing !== 'none') {
    return `![License](https://img.shields.io/badge/license-${licensing}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensing) {
  
  if (licensing == 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (licensing == 'Unlicense') {
    return 'https://choosealicense.com/licenses/unlicense/';
  } else if (licensing == 'Apache') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (licensing == 'GNUAGPLv3') {
    return 'https://choosealicense.com/licenses/agpl-3.0/';
  } else if (licensing == 'GNUGPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (licensing == 'GNULGPLv3') {
    return 'https://choosealicense.com/licenses/lgpl-3.0/';
  } else if (licensing == 'Mozilla') {
    return 'https://choosealicense.com/licenses/mpl-2.0/';
  } else if (licensing == 'Boost') {
    return 'https://choosealicense.com/licenses/bsl-1.0/';
  } else {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact-info](#contact-info)
  ## Licensing:
  ${renderLicenseBadge(data.licensing)}

  To view the license details click [here](${renderLicenseLink(data.licensing)}).

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contributing:
  ${data.contribution}
  ## Tests:
  ${data.testing}
  ## Contact Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
