class Hamming
  VERSION = 1
  
  def Hamming.compute(dna_1 = "AG", dna_2 = "CT")
    dna1 = dna_1.length
    dna2 = dna_2.length
    
    raise ArgumentError, "String must be of equal length." if dna1 != dna2
    
    count = 0
    for i in 0..dna1
      if dna_1[i] != dna_2[i]
        count += 1
      end
    end
    return count    
  end  
end

Hamming.compute

