//
//  problem_2.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_2() -> Int {
    var sum: Int = 0
    
    for (var i = 1; fibonacci(i) <= 4000000; i++) {
        if isEven(fibonacci(i)) {
            sum += fibonacci(i)
        }
    }
    
    return sum // 4613732
}