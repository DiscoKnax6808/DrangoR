
const localurl = "http://0.0.0.0:2059"; //Dont change this, you can change the port tho!

async function nameserver(fastify, options) {
    fastify.get('/', async (req, rep) => {
        return (
            {
                Accounts: localurl,
                AI: localurl,
                API: localurl,
                Auth: localurl,
                BugReporting: localurl,
                Cards: localurl,
                CDN: localurl+"/cdnserver",
                Chat: localurl,
                Clubs: localurl,
                CMS: localurl,
                Commerce: localurl,
                Data: localurl,
                DataCollection: localurl,
                Discovery: localurl,
                Econ: localurl,
                GameLogs: localurl,
                Geo: localurl,
                Images: localurl+"/imageserver",
                Leaderboard: localurl,
                Link: localurl,
                Lists: localurl,
                Matchmaking: localurl,
                Moderation: localurl,
                Notifications: localurl,
                PlatformNotifications: localurl,
                PlayerSettings: localurl,
                RoomComments: localurl,
                RoomieIntegrations: localurl,
                Rooms: localurl,
                Storage: localurl,
                Strings: localurl,
                StringsCDN: localurl,
                Studio: localurl,
                Thorn: localurl,
                Videos: localurl,
                WWW: localurl,
                RecNetStatus: null //Change this to a string like "Server Maintenance!" 
                // if you want a error to pop up on builds 2021-modern - null_mason

            }
        );
    });
}

module.exports = nameserver;