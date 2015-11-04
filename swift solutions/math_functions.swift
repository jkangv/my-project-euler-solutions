//
//  math_functions.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func isPrime(number: Int) -> Bool {
    if number <= 1 {
        return false
    }
    if number == 2 {return true}

    var isPrime:Bool = true
    
    let newNumber = Double(number)
    let root = floor(sqrt(newNumber))
    
    for (var i = 2.0; i <= root; i++) {
        if (newNumber % i == 0) {
            isPrime = false
            break
        }
    }
    
    return isPrime
}

func isEven(number: Int) -> Bool {
    if number % 2 == 0 {
        return true
    } else {
        return false
    }
}

func numberOfFactors(number: Int) -> Int {
    var factors = 0
    
    let newNumber = Double(number)
    let root = floor(sqrt(newNumber))
    
    for var i = 1.0; i <= root ; i++ {
        if Double(number) % i == 0 && Double(number) / i != i {
            factors += 2
        } else if Double(number) / i == i {
            factors += 1
        }
    }
    
    return factors
}

func numberOfDigits(number: Int) -> Int {
    
    let numberString: String = String(number)
    let digits = [Character](numberString.characters)
    
    return digits.count
}

func fibonacci(term: Int) -> Int {
    if term == 1 || term == 0 {
        return 1
    } else {
        return fibonacci(term - 1) + fibonacci(term - 2)
    }
}



