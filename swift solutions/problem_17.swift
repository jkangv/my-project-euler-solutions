//
//  problem_17.swift
//  my_project_euler_solutions
//
//  Created by Jihun Kang on 10/26/15.
//  Copyright © 2015 jkang. All rights reserved.
//

import Foundation

/*



 IMPORTANT: NOT COMPLETELY POLISHED YET EVEN THOUGH IT DOES WORK
 Swift 2.0 / Swift 2.1


*/

func problem_17() -> Int {
    
    let numberConversion: [Int: String] = [1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", 100: "hundred", 1000: "thousand"]
    
    var longString = String()
    
    for number in 1...1000 {
        switch number {
        case 1...19:
            longString += numberConversion[number]!
        case 20...99:
            let tensDigit = round(Double(number / 10))
            longString += numberConversion[Int(tensDigit * 10)]!
            
            if number % 10 != 0 {
                longString += numberConversion[number % 10]!
            }
        case 100...999:
            if number % 100 == 0 {
                longString += numberConversion[number / 100]!
                longString += numberConversion[100]!
            } else if number % 100 > 0 && number % 100 < 20 {
                let twoDigitNumber = round(Double(number / 100))
                longString += numberConversion[Int(twoDigitNumber)]!
                longString += numberConversion[100]!
                longString += "and"
                longString += numberConversion[number % 100]!
            } else {
                let twoDigitNumber = round(Double(number / 100))
                longString += numberConversion[Int(twoDigitNumber)]!
                longString += numberConversion[100]!
                longString += "and"
                let newNumber = number % 100
                let tensDigit = round(Double(newNumber / 10))
                longString += numberConversion[Int(tensDigit * 10)]!
                if number % 10 != 0 {
                    longString += numberConversion[number % 10]!
                }
            }
        case 1000:
            longString += numberConversion[number / 1000]!
            longString += numberConversion[number]!
        default:
            break
        }
    }
    return longString.characters.count // 21124
}
