class Gigasecond
  VERSION = 1
  G_second = 10**9
  def self.from(time)
    time + G_second
  end
end
