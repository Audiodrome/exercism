# sieve comment
class Sieve
  def initialize(num)
    @num = num
    @marks = Array.new(num + 1, 0)
    @prime_list = []
  end

  def primes
    return [] if @num == 1
    return [2] if @num == 2

    eratosthenes
    build_prime_list

    return @prime_list
  end

  def eratosthenes
    p = 2
    while p <= @num
      mark_composites(p)
      p += 1
    end
  end

  def mark_composites(p)
    i = 2
    index = p * i
    while index <= @num
      @marks[index] = 1 if @marks[index] == 0
      index = p * i
      i += 1
    end
  end

  def build_prime_list
    index = 2
    while index <= @num
      @prime_list << index if @marks[index] == 0
      index += 1
    end
  end
end
