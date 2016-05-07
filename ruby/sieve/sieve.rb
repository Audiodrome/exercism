class Sieve

  def initialize(num)
    @num = num
    @mark_arr = Array.new(num + 1, "0")
    @prime_list = []
  end

  def primes
    if @num == 1
      return []
    end

    if @num == 2
      return [2]
    end

    eratosthenes
    buildPrimeList
    # puts @mark_arr.inspect
    # puts @prime_list.inspect
    return @prime_list
  end

  def eratosthenes
    p = 2
    while p <= @num
      markTheArray(p)
      p += 1
    end
  end

  def markTheArray(p)
    i = 2
    index = p * i
    while index <= @num 
      if @mark_arr[index] == "0"
        @mark_arr[index] = "marked"
      end
      index = p * i
      i += 1
    end
  end

  def buildPrimeList
    # prime_arr = []
    index = 2
    while index <= @num
      if @mark_arr[index] == "0"
        @prime_list << index
      end
      index += 1
    end
  end

end
