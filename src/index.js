module.exports = function toReadable (number) {
  
	const words = {
		0 : 'zero',
		1 : 'one',
		2 : 'two',
		3 : 'three',
		4 : 'four',
		5 : 'five',
		6 : 'six',
		7 : 'seven',
		8 : 'eight',
		9 : 'nine',
		10 : 'ten',
		11 : 'eleven',
		12 : 'twelve',
		13 : 'thirteen',
		14 : 'fourteen',
		15 : 'fifteen',
		16 : 'sixteen',
		17 : 'seventeen',
		18 : 'eighteen',
		19 : 'nineteen',
		20 : 'twenty',
		30 : 'thirty',
		40 : 'forty',
		50 : 'fifty',
		60 : 'sixty',
		70 : 'seventy',
		80 : 'eighty',
		90 : 'ninety',
	}

  const dict = {
    100 : 'hundred'
  }

  if( words[number] !== undefined )
    return words[number];
  else{
    let text = '';
    let dopspace = '';
    if(number >= 100){
      text = words[Math.floor(number/100)] + ' ' + dict[100];
      dopspace = ' ';
    }
    const part = number%100;
    if(part === 0)
      return text;
    if( words[part] !== undefined )
      return text += ' '+ words[part];
    else{
      text += dopspace + words[Math.floor(part/10)*10] + ' ' + words[part%10]
      return text;
    }

  }
    

}
