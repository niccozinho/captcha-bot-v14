const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("captcha")
    .setDescription("Sends the verification message to the a channel.")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Sets a channel to send the captcha message.")
        .setRequired(true)
    ),
  requiredPerms: ["ADMINSITRATOR"],
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    const channel = interaction.options.getChannel("channel");
    interaction.reply({
      content: ":receipt: Captcha message successfully sent!",
      ephemeral: true,
    });

    const rowButton = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("captcha")
        .setLabel("Verification")
        .setStyle(ButtonStyle.Success)
        .setEmoji("🧾")
    );

    const captchaEmbed = new EmbedBuilder()
      .setAuthor({ name: "Verification System" })
      .setDescription(
        "Hello! Welcome to our Discord server, where you will be kept up to date with all new information and updates.\n\n> Before you join our Discord, do you mind doing a verification? This verification is for the security of our server."
      )
      .setColor("36393e");

    channel.send({ embeds: [captchaEmbed], components: [rowButton] });
  },
};
