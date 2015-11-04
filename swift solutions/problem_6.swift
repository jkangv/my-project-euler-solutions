//
//  problem_6.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_6() -> Double{
    
    var sumOfTheFirstOneHundred: Double = 0.0
    var squareOfTheSum: Double = 0.0
    
    for (var i = 1.0; i <= 100.0; i++) {
        sumOfTheFirstOneHundred += pow(Double(i),2.0)
        squareOfTheSum += i
    }
    
    return pow(squareOfTheSum, 2.0) - sumOfTheFirstOneHundred  // 25164150.0
}