sum = 0
(3..999).each do |number|
	if number % 3 == 0 or number % 5 == 0
		sum += number
	end
end
puts sum

