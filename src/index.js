const fastify = require('fastify')({logger: true});



routefiles = [
    "nameserver"
]

routefiles.forEach((filename) => {
    fastify.register(require(`./routes/${filename}`));
})












fastify.listen({port: 2059, host: "0.0.0.0"}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log(`Server running at ${address}`);
})