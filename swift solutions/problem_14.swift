//
//  problem_14.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/26/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_14() -> Int {
    
    var startingNumber = 2
    var temporaryNumber = 2
    var longestChain = 0
    var temporaryChain = 0
    var answer = 0
    
    repeat {
        repeat {
            if isEven(temporaryNumber) {
                temporaryNumber = temporaryNumber / 2
                temporaryChain++
            } else if !isEven(temporaryNumber) {
                temporaryNumber = 3 * temporaryNumber + 1
                temporaryChain++
            }
        } while temporaryNumber != 1
        
        if temporaryChain > longestChain {
            longestChain = temporaryChain
            answer = startingNumber
        }
        
        startingNumber++
        temporaryNumber = startingNumber
        temporaryChain = 0
    } while startingNumber < 1000000
    
    return answer // 837799
}