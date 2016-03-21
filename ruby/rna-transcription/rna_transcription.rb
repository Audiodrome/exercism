class Complement
  VERSION = 3
  @@toRNA = { 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U' }
  def self.of_dna(arg = "C")

    check = (/^[ACGT]+$/ =~ arg)
    raise ArgumentError, "Not a valid DNA strand." if (!check)

    arg = arg.split('').map! { |x| @@toRNA[x] }.join('')
    # arg.map! { |x| @@toRNA[x] }
    return arg
  end
end

a = Complement.of_dna("CGTA")
puts a

# class Complement
#   VERSION = 3

#   def self.of_dna(dna)
#     raise ArgumentError if dna =~ /[^GCTA]/
#     dna.tr('GCTA', 'CGAU')
#   end
# end
