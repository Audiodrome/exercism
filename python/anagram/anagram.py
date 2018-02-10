def detect_anagrams(word, candidates):
    anagram = []
    sorted_word = ''.join(sorted(word.lower()))
    sorted_candidates = [''.join(sorted(word.lower())) for word in candidates]

    for i in range(len(candidates)):
        if (sorted_word == sorted_candidates[i] and 
            word.lower() != candidates[i].lower()):
            
            anagram.append(candidates[i])

    return anagram
