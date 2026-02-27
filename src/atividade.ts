import PromptSync from "prompt-sync";

const prompt = PromptSync();

let item : string;
let cadastrado: string [] = [];
let op: number;

do{ 
    console.log("MENU: ");
    console.log("1 - adicionar item; \n 2- listar itens; \n 3- remover itens; \n 0- sair: ");
op = Number(prompt("escolha \n"));

    switch (op){

        case 1:
            item = prompt("Qual item adicionar: \n");
            cadastrado.push(item);
            break;
        case 2: 
            console.log(cadastrado);
            break;
        case 3:
            item = prompt("Qual item deseja remover: \n");
            cadastrado.splice(cadastrado.indexOf(item), 1);
            break;
        default:
            console.log("digite entre 0 e 3");
    }


} while (op != 0);