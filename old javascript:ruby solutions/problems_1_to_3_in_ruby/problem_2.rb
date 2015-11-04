def fib(n)
	n <= 1 ? n : fib(n-1) + fib(n-2)
end
x = 2
sum = 0
until fib(x) > 4000000
	x += 1
	sum += fib(x) if fib(x) % 2 == 0
end
puts sum