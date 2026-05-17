const fastify = require('fastify')({logger: true});
const db = require('./db');
const readline = require('node:readline');

const version = "v0.01";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


routefiles = [
    "nameserver"
]

routefiles.forEach((filename) => {
    fastify.register(require(`./routes/${filename}`));
})


async function getVersion()
{
    const versionresp = await fetch('https://raw.githubusercontent.com/DiscoKnax6808/DrangoRData/refs/heads/main/LatestVersion.txt');

if (!Response.ok) {
    console.log("Unable to fetch latest version!");
} else {
    const v = await versionresp.text();
    if (v == version)
    {
        console.log(`You are on the latest version!: ${version}`);
    } else {
        console.log(`You aren't on the latest version! LatestVersion: ${v}`)
    }
}
}



console.log("Welcome to DrangoR! Made by null_mason/nomason");



await getVersion();


rl.question('Please Enter Your Choice Here: ')






fastify.listen({port: 2059, host: "0.0.0.0"}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log(`Server running at ${address}`);
})