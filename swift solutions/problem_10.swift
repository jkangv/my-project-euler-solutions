//
//  problem_10.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_10() -> Int {
    var sum = 2
    var prime = 3
    
    while prime < 2000000 {
        if isPrime(prime) {
            sum += prime
        }
        
        prime += 2
    }
    
    return sum // 142913828922
}