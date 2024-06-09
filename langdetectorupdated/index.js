import {franc,francAll} from 'franc'
import langs from 'langs'
let inputs=process.argv[2]
let langcode = franc(inputs)
if(langcode === 'und'){
    console.log(`cannot figure out the language increase the data input`)
}
else{
    let obj=langs.where("3",langcode)
    console.log(`The language is ${obj.name}`)
}
