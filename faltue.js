// import inquirer from "inquirer";
// import chalk from "chalk";
// import Table from "cli-table3";
// import { program } from "commander"

// const log = console.log;

// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow.dim('70%')}
// `);

// log(chalk.bgGreenBright.red.bold("Hello Dear!"))
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#aaaaed').bold('Bold gray!'));


// const table = new Table({
//     head: ["Roll NO", "Name"],
//     colWidths: [10, 20],
//       chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
//          , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
//          , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
//          , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
// })

// table.push(
//     [232, "Ahmad Siddique"],
//     [321, "Hamid Khan"]
// )

// console.log(table.toString())





// program
//   .option('--first')
//   .option('-s, --separator <char>')
//   .argument('<string>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));


// inquirer.prompt(["string", "number", "null"])
// .then((answer) => {
//     console.log(answer)
// })
// .catch((err) => {
//     console.log(err);
// })


// const askName = async () => {
//   const answers = await inquirer.prompt([
//     {
//       type: 'input',
//       name: 'userName',
//       message: 'What is your name?',
//     }
//   ]);

//   console.log(`Hello, ${answers.userName}!`);
// };

// askName();


// async function getname() {
    
//     const name = await inquirer.prompt([
//         {
//             type: "input",
//             name : "username",
//             message : "What is your name owl?"
//         },
//         {
//             type: "search",
//             name: "martialStatus",
//             message: "Martial-status",
//             choices: ["Single", "Married", "Complicated"]
//         }
//     ])

//     console.log(`Hello and welcom ${name.username}
// and you are nothing
// `);
// }

// getname();


// import ora from "ora";

// const spinner = ora("Loading Profile").start();

// setTimeout(() => {
//     spinner.color = "magenta";
//     spinner.text = "Loading Data";
// }, 1000);

// setTimeout(() => {
//     spinner.succeed("Profile Loaded!"); // stops the spinner
// }, 3000);


// import { Command } from "commander"

// const program = new Command()

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

// import chalk from "chalk";

// import figlet from "figlet";

// console.log(
//   chalk.green(figlet.textSync("Ahmad CLI", {
//     font: "Standard",
//   }))
// );




// import figlet from "figlet";
// import gradient from "gradient-string";
// import ora from 'ora'
// import chalk from "chalk";


// const spinner = ora(chalk.magenta("Loading Profile")).start();

// setTimeout(() => {
//   spinner.stop();        
//   console.clear();      

//   setTimeout(() => {
//     const text = figlet.textSync("Ahmad Siddique", { font: "Slant" });
//   console.log(gradient.pastel(text));
//   }, 1000);
// }, 2000);


