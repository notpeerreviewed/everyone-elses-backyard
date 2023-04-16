
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = config => {

    config.addWatchTarget("./src/sass");
    config.addPassthroughCopy("./src/css");
    config.addPlugin(syntaxHighlight);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: "src",
            output: "_site"
        }


    }

}