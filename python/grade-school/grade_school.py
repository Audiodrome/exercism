class School(object):
    def __init__(self, name):
        self._school_name = name
        self._enrolled_students = {}

    def grade(self, grade):
        if grade in self._enrolled_students:
            return self._enrolled_students[grade]
        else:
            return set()

    def add(self, name, grade):
        if grade in self._enrolled_students:
            self._enrolled_students[grade] += (name, )
        else:
            self._enrolled_students[grade] = ()
            self._enrolled_students[grade] += (name, )

    def sort(self):
        for key in self._enrolled_students:
            a = self._enrolled_students[key]
            self._enrolled_students[key] = tuple(sorted(a))
        
        tmp = list(self._enrolled_students.items())
        return sorted(tmp, key=lambda tup: tup[0])
