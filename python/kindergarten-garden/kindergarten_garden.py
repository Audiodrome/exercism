class Garden(object):
    def __init__(self, diagram, students = None):
        self._diagram = diagram
        if students == None:
            self._students = [
                'Alice', 
                'Bob',
                'Charlie',
                'David',
                'Eve',
                'Fred',
                'Ginny',
                'Harrient',
                'Ileana',
                'Joseph',
                'Kincaid',
                'Larry'
            ]
        else:
            self._students = students

    def print_student_list(self):
        print(self._students)

garden = Garden("RC\nGG", "Samantha Patricia Xander Roger".split())

garden.print_student_list()