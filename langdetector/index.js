let franc = require('franc');
let langs = require('langs')
console.log(process.argv)
let inputs = process.argv[2]
// let inputs=process.argv.slice(2)

let langcode = franc(inputs)
if (langcode === 'und') {
    console.log('language cannot be determined')
}
else {
    console.log(langcode)
    console.log(langs.where("3", langcode).name)
}
