#!/usr/bin/env node

import gradient from "gradient-string";
import figlet from "figlet";
import ora from "ora";
import chalk from "chalk";
import boxen from "boxen";
import Table from "cli-table3";

const spinner = ora(chalk.greenBright("Loading Profile...")).start();

setTimeout(() => {
  spinner.stop();
  console.clear();

  setTimeout(() => {
    showProfile();
  }, 1000);
}, 2000);

function showProfile() {
  // Title (Name)
  const text = figlet.textSync("Ahmad Siddique", { font: "Slant" });
  console.log(gradient.pastel(text));
  console.log("\n");

  // About Section
  console.log(chalk.magenta("About"));
  //   console.log("\n");

  // Bio Content
  const bio = `
${chalk.magenta("|")}    I'm a ${chalk.green(
    "Web Developer"
  )} with expertise in ${chalk.green("NodeJS")} and modern ${chalk.green(
    "JavaScript"
  )}.
${chalk.magenta(
  "|"
)}    This helped me learn and grow with frameworks like ${chalk.green(
    "React"
  )} and ${chalk.green("Express")}.
${chalk.magenta(
  "|"
)}    I have also learned edge technologies like ${chalk.green(
    "Redux-Toolkit"
  )} and ${chalk.green("JWT")} that
${chalk.magenta(
  "|"
)}    help me build scalable and optimized web apps with that I also have
${chalk.magenta("|")}    a precise knowledge of ${chalk.green(
    "Mongodb"
  )}. I'm passionate about exploring
${chalk.magenta("|")}    the tech world and growing in this direction.
`;
  console.log(bio);

  console.log(chalk.magenta("Skills"));

  const table = new Table({
    head: [chalk.yellow("Category"), chalk.yellow("Tools")],
    colWidths: [20, 50],
    style: { head: [], border: [] },
  });

  table.push(
    [
      chalk.cyan("Frontend"),
      chalk.green("React, TailwindCSS, Vercel, TypeScript"),
    ],
    [
      chalk.cyan("Backend"),
      chalk.green("Nodejs, Express, JWT, Socket.io, Railway"),
    ],
    [chalk.cyan("Database"), chalk.green("Mongodb, AppWrite")],
    [
      chalk.cyan("State Management"),
      chalk.green("Redux-toolkit, Zustand, Context Api"),
    ],
    [chalk.cyan("AddOns"), chalk.green("EJS")]
  );

  console.log(table.toString());

  console.log(chalk.magenta("\nContact Me:\n"));
  console.log(chalk.cyan("● Email: ") + chalk.green("ahmadsiddique.dev@gmail.com"));
  console.log(chalk.cyan("● GitHub: ") + chalk.gray("https://github.com/ahmadsiddique-dev"));
  console.log(
    chalk.cyan("● LinkedIn: ") +
      chalk.blue("https://linkedin.com/in/ahmad-siddique-dev\n\n")
  );

}
