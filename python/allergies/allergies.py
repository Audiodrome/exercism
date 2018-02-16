from collections import deque

class Allergies(object):

    def __init__(self, score):
        self._allergens = {
            1: "eggs",
            2: "peanuts",
            4: "shellfish",
            8: "strawberries",
            16: "tomatoes",
            32: "chocolate",
            64: "pollen",
            128: "cats"
        }
        self._score = score
        self._allergy_keys = deque()
        self._users_allergens = {}
        i = 1

        while i <= score:
            self._allergy_keys.appendleft(i)
            i = i << 1

        for i in range(len(self._allergy_keys)):
            key = self._allergy_keys[i]
            if score >= key:
                if key in self._allergens:
                    self._users_allergens[key] = self._allergens[key]
                score -= key

    def is_allergic_to(self, item):
        return True if item in self._users_allergens.values() else False

    @property
    def lst(self):
        # need to reverse the list
        return list(self._users_allergens.values())[::-1]
