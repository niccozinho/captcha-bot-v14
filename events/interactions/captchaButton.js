const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    const { customId, guild } = interaction;
    if (customId == "captcha") {
      const verified = guild.roles.cache.get("");
      if (interaction.member.roles.cache.has(verified.id)) {
        interaction.reply({
          content: "**OPSS!!** It looks like you're already verified.",
          ephemeral: true,
        });
      } else {
        interaction.member.roles.add(verified);
      }
    }
  },
};
