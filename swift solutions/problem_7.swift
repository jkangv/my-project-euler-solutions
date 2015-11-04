//
//  problem_7.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_7() -> Int {
    var term = 1
    var currentNumber = 3
    
    while term < 10001 {
        if isPrime(currentNumber) {
            term++
        }
        if term == 10001 { return currentNumber}
        currentNumber += 2
    }
    
    return currentNumber // 104743
}