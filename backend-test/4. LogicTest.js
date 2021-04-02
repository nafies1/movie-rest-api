/* Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan 
sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
Dibawah ini ada array berisi sederetan Strings.
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok 
Anagramnya,
Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter
# Expected Outputs
[
 ["kita", "atik", "tika"],
 ["aku", "kua"],
 ["makan"],
 ["kia"]
]
*/

function anagramGrouping(arrStr){
    let finalResult = []
    let anagramGroup = {}
    for (let str of arrStr) {
        let sortedStr = str.split("").sort().join("")
        if (anagramGroup[sortedStr]) anagramGroup[sortedStr].push(str) 
        else anagramGroup[sortedStr] = [ str ] 
        // console.log(str, anagramGroup)
    }

    for (const key in anagramGroup) {
        if (!anagramGroup.hasOwnProperty(key)) break
        const result = anagramGroup[key];
        finalResult.push(result)
    }
    return finalResult
}

let arrayStr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

console.log(anagramGrouping(arrayStr))
