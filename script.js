 // WN𐐒ΛƆXZ˥˥ʞſHפℲpS∀ԀOI∩⅄⊥ᴚƎMb
var chars = {
  'A':'b',
  'B':'ӝ',
  'C':'Ǝ',
  'D':'ᴚ',
  'E':'⊥',
  'F':'∩',
  'G':'ӯ',
  'H':'O',
  'I':'Ԁ',
  'J':'∀',
  'K':'ş',
  'L':'p',
  'M':'Ⅎ',
  'N':'פ',
  'O':'H',
  'P':'ſ',
  'Q':'ʞ',
  'R':'Ƹ',
  'S':'˥',
  'T':'ϰ',
  'U':'Ɔ',
  'V':'Λ',
  'W':'Ъ',
  'X':'Ʌ',
  'Y':'ᵯ',
  'Z':'И',

  // numbers
  '1':'¼',
  '2':'×',
  '3':'¶',
  '4':'¤',
  '5':'Ɣ',
  '6':'Ż',
  '7':'ï',
  '8':'ᶾ',
  '9':'Ł',
  '0':'Ħ',

  // special chars
  ' ':'ꟸ',
  '.':'˙',
  'Ì':'ꝶ',
  'Ò':'ꝷ',
  'Ù':'Ꝺ',
  'À':'ꝸ',
  'È':'ꭡ',
  ',':'\'',
  '\'':',',
  '"':',,',
  '`':',',
  '<':'>',
  '>':'<',
  '∴':'∵',
  '&':'⅋',
  '_':'‾',
  '?':'¿',
  '!':'¡',
  '[':']',
  ']':'[',
  '(':')',
  ')':'(',
  '{':'}',
  '}':'{',
  
  // russian chars UPPERCASE
  /*
 'А':'∀',
 'Б':'ܦ',
 'В':'ꓭ',
 'Г':'⅃',
 'Д':'ჩ',
 'Е':'Ǝ',
 'З':'Ɛ',
 'Й':'И̯',
 'К':'ꓘ',
 'Л':'Ѵ',
 'М':'ꟽ',
 'П':'ⵡ',
 'Р':'Ԁ',
 'С':'Ͻ',
 'Т':'ꓕ',
 'У':'ʎ',
 'Ц':'ŉ',
 'Ч':'Ⴙ',
 'Ш':'ᗰ',
 'Ь':'ᑫ',
 'Э':'Є',
 'Ю':'Ꙕ',
 'Я':'ᖉ',

 // russian chars lowercase
 'а':'ɐ',
 'б':'ܦ',
 'в':'ʚ',
 'г':'⅃',
 'д':'ჩ',
 'е':'ǝ',
 'з':'ԑ',
 'й':'и̯',
 'к':'ʞ',
 'л':'ѵ',
 'м':'ᥕ',
 'п':'⊔',
 'р':'d',
 'с':'ɔ',
 'т':'ꓕ',
 'у':'ʎ',
 'ц':'ŉ',
 'ч':'h',
 'ш':'m',
 'ь':'৭',
 'э':'є',
 'ю':'ꙕ',
 'я':'ʁ'*/
}


function prendiValore() {
    var str = document.getElementById("testoEditabile").textContent.toUpperCase();
   

Object.keys(chars).forEach(function (key) {
    var value = chars[key]
    if(!chars[value]) {
      chars[value] = key
    }
  })

    var result = ''
    , c = str.length
    , ch = ''
  for (; c >= 0; --c) {
    ch = str.charAt(c)
    result += chars[ch] || chars[ch.toLowerCase()] || ch
  }

var risultato = document.getElementById("risultato")
risultato.textContent = result
}


function prendiValore2() {
    var str = document.getElementById("testoEditabile2").textContent
   

Object.keys(chars).forEach(function (key) {
    var value = chars[key]
    if(!chars[value]) {
      chars[value] = key
    }
  })

    var result = ''
    , c = str.length
    , ch = ''
  for (; c >= 0; --c) {
    ch = str.charAt(c)
    result += chars[ch] || chars[ch.toLowerCase()] || ch
  }

var risultato = document.getElementById("risultato2")
risultato.textContent = result
}



    
  