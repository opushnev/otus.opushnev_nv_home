const { Console } = require("console");
let fs=require("fs");
let path=require("path");
let GetTree=(startDir, prefix = "", depth = 0)=>
        {
            if (depth >= MaxDepth)  return;
            let di = fs.readdirSync(startDir);
            di.forEach((fsItem,index)=>{
                if (fs.statSync(path.join(startDir,fsItem)).isDirectory())
                {
                    console.log(prefix+'  '.repeat(depth*3) + (di.length===(index+1)?"└── "+fsItem:"├── "+fsItem));            
                    GetTree(path.join(startDir,fsItem),lastindex===path.join(startDir,fsItem)?" ":"│",depth+1)
                } 
                else {
                    console.log(prefix+'  '.repeat(depth*3) + (di.length===(index+1)?"└── "+fsItem:"├── "+fsItem));
                }
            })        
        }
let MaxDepth=50; //Максимальное число вложенности
let arg=process.argv.slice(2);
let pathIn=arg[0]; //Стартовая директория
if (arg.length<1||arg.length>3) {console.log('Аргументы заданы неверно! "Путь" -d вложенность: "C:\\test" -depth 3');process.exit();}
if (arg[1]==='-depth'||arg[1]==='-d') {MaxDepth=arg[2];} else {console.log('Неверный аргумент');process.exit();}
let di = fs.readdirSync(pathIn);
const lastindex=path.join(pathIn,di[di.length-1]);
console.log(pathIn);        
GetTree(pathIn);
