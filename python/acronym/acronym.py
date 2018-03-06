def abbreviate(words):
    acronym = []
    acronym.append(words[0].upper())

    for i in range(len(words)):
        if words[i] == ' ' or words[i] == '-':
            acronym.append(words[i+1].upper())

    return ''.join(acronym)
