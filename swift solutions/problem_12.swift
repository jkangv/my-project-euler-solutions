//
//  problem_12.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/25/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_12() -> Int {
    var triangleNumber = 2
    var term = 1
    
    repeat {
        triangleNumber = term * (term + 1) / 2
        term++
    } while numberOfFactors(triangleNumber) < 500
    
    return triangleNumber // 76576500
}