import inquirer from "inquirer"

let to_doList: string[] = [];

let while_condition: boolean = true;

while (while_condition === true) {

    // ......options......
    let options = await inquirer.prompt([{
        type: 'list',
        name: "user_option",
        message: 'select an options',
        choices: ["Add", "remove"]
    }])

    // ....Add.....
    if(options.user_option === "Add"){
        let ans = await inquirer.prompt([{
            type: 'input',
            name: 'usr_ans',
            message: 'write something to add in the task list.'
            
        }])

        if (ans.usr_ans !== ''){
            to_doList.push(ans.usr_ans);
            console.log(to_doList);
        }else{
            console.log('Please write something to add in the todo list');
        }
    }

    // .....remove....
    else if (options.user_option === "remove"){
        let removeChoice = await inquirer.prompt([{
            type: 'list',
            name: 'remove_item',
            message: 'select item to remove',
            choices: to_doList
        }]);

        let index_to_remove = to_doList.indexOf(removeChoice.remove_item);

        if(index_to_remove >= 0){
            to_doList.splice(index_to_remove, 1);
            console.log('You removed : ', removeChoice.remove_item);
            console.log(to_doList);
        }
    }

    // .......confirmation....
    let user_ans = await inquirer.prompt([{
        type: 'confirm',
        name: 'selection',
        message: 'Do you want to continue?',
        default: true
    }])

    if(user_ans.selection === false){
        while_condition = false;
    }    
}

console.log(`Thank you for using to do do list`);
