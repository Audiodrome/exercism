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
        # print(self._enrolled_students[2].sort())
        # print(self._enrolled_students)
        tmp = list(self._enrolled_students.items())
        return sorted(tmp, key=lambda tup: tup[0])

school = School('Sweet Valley High')

school.add("James", 2)
school.add("Blair", 2)
school.add("Paul", 2)
school.sort()

print(school.sort())
