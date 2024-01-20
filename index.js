// README Generator

(async () => {
    // Inquirer module
    const inquirer = await import("inquirer");

    function generateReadme(answers) {
        // Readme
        return `
        # ${answers.title}

        ## Description
        ${answers.description}
        Click [Here](https://www.linktothevideo.domain) to view a video description of how the project works. 

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#future)

        ## Installation
        Follow these instructions to install the software.
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        ![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

        This project is licensed under the ${answers.license} license.

        ## Contributing
        ${answers.contributing}

        ## Tests
        If you would like to run more tests on the application, below are some guidelines:
        ${answers.tests}

        ## Questions
        If you have any questions about the repo, open an issue or contact me directly at ${answers.email}.
        You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).

        ## Future Developments
        I would like to focus on the following developments in the future:
        ${answers.future}
                `;
    }


    async function init() {
        try {
            const answers = await inquirer.default.prompt([
                // Prompts
                {
                    type: "input",
                    name: "title",
                    message: "What is your project title?",
                },
                {
                    type: "input",
                    name: "description",
                    message: "Provide a description of the project:",
                },
                {
                    type: "input",
                    name: "installation",
                    message: "Provide installation instructions:",
                },
                {
                    type: "input",
                    name: "usage",
                    message: "Provide usage information:",
                },
                {
                    type: "list",
                    name: "license",
                    message: "Choose a license for your project:",
                    choices: ["MIT", "GPLv3", "Apache", "BSD", "None"],
                },
                {
                    type: "input",
                    name: "contributing",
                    message: "Provide contribution guidelines:",
                },
                {
                    type: "input",
                    name: "tests",
                    message: "Provide test instructions:",
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter your GitHub Username:",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter your email address:",
                },
                {
                    type: "input",
                    name: "future",
                    message: "List proposed future developments:",
                },
            ]);

            const readmeContent = generateReadme(answers);
            require("fs").writeFile("README.md", readmeContent, (err) => {
                if (err) throw err;
                console.log("README generated successfully!");
            });
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    // Start
    await init();
})();
