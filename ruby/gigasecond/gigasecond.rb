class Gigasecond
  VERSION = 1
  @@G_second = 1000000000
  def Gigasecond.from(time)
    t = time + @@G_second
  end  
end





