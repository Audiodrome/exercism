# coding: utf-8
class Pangram

  VERSION = 1
  def self.is_pangram?(str)

    if (str == "")
      return false
    end

    alphabet = 26
    str = str.downcase
    str = str.gsub(/[^a-z]/, '')
    str = str.split('')
    str = str.uniq!
    str_size = str.length
  
    str_size == alphabet ? true : false

  end
end
