//
//  problem_3.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_3() -> Int {
    var largest:Int = 0
    
    for (var i = 3; Double(i) <= sqrt(600851475143.0); i += 2) {
        if isPrime(i) && 600851475143 % i == 0 {
            largest = i
        }
    }
    return largest // 6857
}