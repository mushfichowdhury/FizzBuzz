def fizzbuzz
    count = 0
    while count < 100 do 
        count += 1
        if count % 15 == 0
            count += 1
            puts "FizzBuzz"
        elsif count % 3 == 0
            count += 1
            puts "Fizz"
        elsif count % 5 == 0
            count += 1
            puts "Buzz"
        end
        puts count
    end
end

fizzbuzz