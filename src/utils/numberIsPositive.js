function numberIsPositive(number){
    if(typeof number === 'string') return number[0] === "+"

    return number > 0
}

export default numberIsPositive