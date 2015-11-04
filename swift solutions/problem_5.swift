//
//  problem_5.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/22/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

func problem_5() -> Int {
    var special = 2520
    var factor = 1
    
    while factor != 20 {
        for (; factor <= 20; factor++) {
            if special % factor != 0 {
                factor = 1
                break
            }
            if factor == 20 {return special}
        }
        special += 20
    }
    return special // 232792560
}