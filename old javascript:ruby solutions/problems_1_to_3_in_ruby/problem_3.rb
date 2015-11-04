require 'prime'

number = 600851475143
greatest_possible = Math.sqrt(number).round
largest = greatest_possible
until largest.prime? && number % largest == 0
	largest -= 1
end
puts largest
