class Squares

  def initialize (n)
    @n = n
  end
  
  def square_of_sum
    puts @n
    return @n
  end
end

sq_sum = Squares.new(225).square_of_sum

puts sq_sum
