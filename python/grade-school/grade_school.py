class School(object):
    def __init__(self, name):
        self._school_name = name
        self._enrolled_students = {}

    @property
    def grade(self, grade):
        if grade in self._enrolled_students:
            return self._enrolled_students[grade]
        else:
            return set()

    @add.setter
    def add(self, name, grade):
        if grade in self._enrolled_students:
            self._enrolled_students[grade] += (name, )
        else:
            self._enrolled_students[grade] = ()
            self._enrolled_students[grade] += (name, )

        # print(self._enrolled_students)

school = School('Sweet Valley High')

school.add("James", 2)
school.add("Blair", 2)
school.add("Paul", 2)

print(school.grade(2))
