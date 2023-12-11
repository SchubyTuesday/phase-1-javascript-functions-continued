function saturdayFun(str = 'roller-skate') {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office') {
    return `This Monday, I will ${str}.`
}

function wrapAdjective(char) {
    return function callback(str) {
      return `You are ${char}${str}${char}!`
    }
}