const fizzBuzz = () => {
    for( let i = 0; i < 101; i++) {
        if( i % 3 === 0 && i % 5 === 0) {
            i++
            console.log("FizzBuzz")
        }
        else if( i % 3 === 0 ) {
            i++
            console.log("Fizz")
        }
        else if( i % 5 === 0 ) {
            i++
            console.log("Buzz")
        }
        console.log(i)
    }
}

fizzBuzz();