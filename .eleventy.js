module.exports = config => {

    config.addWatchTarget("./src/sass");

    config.addPassthroughCopy("./src/css");

    return {
        dir: {
            input: "src",
            output: "_site"
        }


    }
}