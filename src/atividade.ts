import PromptSync from "prompt-sync";

const prompt = PromptSync();

let item : string;
let cadastrado: string [] = [];
let op: number;

do{ 
    console.log("MENU: ");
    console.log("1 - adicionar item; \n 2- listar itens; \n 3- remover itens; \n 0- sair: ");
op = Number(prompt("escolha "));

    switch (op){

        case 1:
            item = prompt("Qual item adicionar: ");
            cadastrado.push(item);
            break;
        case 2: 
            console.log(cadastrado);
            break;
        case 3:
            item = prompt("Qual item deseja remover: ");
            cadastrado.splice(cadastrado.indexOf(item), 1);
            break;
        default:
            console.log("fim do programa!");
    }


} while (op != 0);
