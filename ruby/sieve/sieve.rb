class Sieve

  def initialize(num)
    @num = num
    @mark_arr = Array.new(num, "0")
  end

  def primes
    if @num == 1
      return []
    end

    if @num == 2
      return [2]
    end

    eratosthenes

  end

  def eratosthenes
    i = 2
    while i < @num do
      index = 2 * i
    end
    end

  end


end

# puts Sieve.new(1).primes
# puts Sieve.new(2).primes
puts Sieve.new(3).primes
