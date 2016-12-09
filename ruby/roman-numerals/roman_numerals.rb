public
def to_roman
  puts get_roman
end

private

def get_roman
  roman_to_arabic = { 1 => "I",
                      5 => "V",
                      10 => "X",
                      50 => "L",
                      100 => "C",
                      500 => "D",
                      1000 => "M" }

end

1.to_roman
