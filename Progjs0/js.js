let table = ["azerty", "qwerty"]
let secondTable = table // CAS 1 : dans ce cas les tableaux pointes sur les mêmes données donc, si une modification est faite il sera visible dans l'autre 

secondTable[0] = "ERT"

console.log(secondTable[0])
console.log(table[0])

//----------------------------------------

let table1 = ["azerty", "qwerty"]
let secondTable1 = [...table1] //CAS : 2 dans ce cas les tableaux auront les mêmes données mais indépendant des chacuns, les modifications apportés dans un n'affecterons pas l'autre tableau car ils ne sont pas liés comme le premier cas

secondTable1[0] = "ERT"

console.log(secondTable1[0])
console.log(table1[0])