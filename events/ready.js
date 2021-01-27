module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setPresence({ activity:{
              name: 'XAYAH',
              type: "STREAMING",
              url: "https://www.twitch.tv/whyats2"
      }
  });
};
