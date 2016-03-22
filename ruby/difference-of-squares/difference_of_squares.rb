class Squares
  VERSION = 2
  def initialize (n)
    @n = n
  end
  
  def square_of_sum
    x = @n
    sq_sum = 0
    while x > 0
      sq_sum = sq_sum + x
      x -= 1
    end
    sq_sum = sq_sum**2
    return sq_sum
  end

  def sum_of_squares
    x = @n
    sum_sq = 0
    while x > 0
      sum_sq = sum_sq + (x**2)
      x -=1
    end
    return sum_sq
  end

  def difference
    a = square_of_sum
    b = sum_of_squares
    a = a - b
    return a
  end
end

sq_sum = Squares.new(100).difference

