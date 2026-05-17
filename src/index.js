const fastify = require('fastify')({ logger: true });
const db = require('./db');
const readline = require('node:readline');

const version = "v0.01";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

["nameserver"].forEach(file => fastify.register(require(`./routes/${file}`)));

console.log("Welcome to DrangoR! Made by null_mason/nomason");

(async () => {
    try {
        const res = await fetch('https://githubusercontent.com');
        if (!res.ok) throw new Error();
        
        const latest = (await res.text()).trim();
        console.log(latest === version ? `Latest version: ${version}` : `Update available! Latest: ${latest}`);
    } catch {
        console.log("Unable to fetch latest version!");
    }

    rl.question('Please Enter Your Choice Here: ', (choice) => {
        console.log(`Selected: ${choice}`);
    });
})();

fastify.listen({ port: 2059, host: "0.0.0.0" }, (err, address) => {
    if (err) { fastify.log.error(err); process.exit(1); }
    console.log(`Server running at ${address}`);
});
