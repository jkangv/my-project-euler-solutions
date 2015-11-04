//
//  problem_1.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_1() -> Int {
    var sum = 0
    
    for number in 1..<1000 {
        if number % 3 == 0 || number % 5 == 0 {
            sum += number
        }
    }
    return sum // 233168
}
