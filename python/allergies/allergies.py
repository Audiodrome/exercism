class Allergies(object):
    allergens = {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats"
    }

    def __init__(self, score):
        self._score = score

    def is_allergic_to(self, item):
        print(item)

    @property
    def lst(self):
        pass

a = Allergies(4)

Allergies(1).is_allergic_to('peanuts')