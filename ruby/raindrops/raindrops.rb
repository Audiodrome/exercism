class Raindrops
  VERSION = 1
  def self.convert(n)
    base = { 3 => "Pling", 5 => "Plang", 7 => "Plong" }
    #puts n
    pf_arr = Prime_factors.p_factors(n).uniq

    if (pf_arr.include?(3) || pf_arr.include?(5) || pf_arr.include?(7))  
      pf_arr = pf_arr.map! { |x| base[x] }.join('')
      return pf_arr
    else
      return n.to_s
    end
  end
end

class Prime_factors
  def self.p_factors(n)
    factors = []
    d = 2
    while n > 1
      while n % d == 0
        factors << d
        n /= d
      end
      d = d + 1
      if d*d > n
        if n > 1
          factors << n
          break
        end
      end
    end
    return factors
  end
end

puts Raindrops.convert(15)

# class GCD
#   remainder = 0
#   def self.gcd(a, b)
    
#     while b != 0
#       remainder = a % b
#       a = b
#       b = remainder
#     end
#     return a
#   end
# end

# class Pollard_Rho
#   number = 27
#   x_fixed = 2
#   cycle_size = 2
#   x = 2
#   factor = 1

#   while factor == 1
#     count = 1
#     while count <= cycle_size && factor <= 1
#       x = (x * x) % number
#       factor = GCD.gcd(x - x_fixed, number)
#       count += 1  
#     end
#     cycle_size *= 2
#     x_fixed = x   
#   end
#   puts "factor #{factor}\n"
# end
