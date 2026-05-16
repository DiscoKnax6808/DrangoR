const fastify = require('fastify')({logger: true});


















fastify.listen({port: 2059, host: "0.0.0.0"}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log(`Server running at ${address}`);
})