import chalk from "chalk";
const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow(
      "Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptSchemaMain;
