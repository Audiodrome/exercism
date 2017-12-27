def to_rna(dna_strand):
    transcription = {
                'G': 'C',
                'C': 'G',
                'T': 'A',
                'A': 'U'
            }

    rna = ''

    for char in dna_strand:
        if char not in transcription:
            raise ValueError('No such nucleotide')
        rna += transcription[char]

    return rna

