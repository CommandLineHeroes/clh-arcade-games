const compression = require("compression");
const bs = require("browser-sync").create();

bs.init({
    server: "./",
    watch: false,
	port: 2345,
	open: false,
    middleware: [compression({filter: () => true })]
});
