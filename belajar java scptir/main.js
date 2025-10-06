///array
const arraySaya =[`daffa`,`fadil`,`surya`,`fatar`,`bram`]//indeks dimlai(0,1,2,3,..)
const newArray= [...arraySaya]
newArray[0]=`jingga`
console.log({arraySaya})
console.log({newArray})

///set() dalam java sccript
let setObject = new Set();//cara set object
let obj =[{name:`jhon`}]
let setObject2 = new Set(obj)
console.log(setObject2)

let chars = new Set([`a`,`b`,`c`,`d`,`d`,`a`])//set object
console.log(chars)

console.log(typeof chars)//cek tipe data
console.log(chars instanceof Set)//cek kbenaran data
console.log(chars.size)//cek banyak data
//menambahkan data
chars.add(`g`)
chars.add(`w`)
chars.add(`s`).add(`q`)
//cek keberadaan data (true/false)
console.log(chars.has(`a`))
chars.delete(`d`)//menghapus data
console.log(chars)

//membuat perulangan dalam Set()
let roles = new Set();
roles.add(`admin`).add(`bandar`).add(`user`)
for(let role of roles){
    console.log(`role terdiri dari-`,role)
}

//menggunakan keys and value
for(let[keys,value] of roles.entries()){
    console.log(keys==value)
}