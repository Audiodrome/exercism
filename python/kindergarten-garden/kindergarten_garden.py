class Garden(object):
    def __init__(self, diagram, students = None):
        self._plant_codes = {
            'G': 'Grass',
            'C': 'Clover',
            'R': 'Radishes',
            'V': 'Violets'
        }
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
            self._students.sort()

        self._diagram = diagram
        self._student_plants = self.preprocess_diagram()

    def preprocess_diagram(self):
        diagram = self._diagram.split('\n')
        
        result = {}
        
        diagram[0] = list(diagram[0])
        diagram[1] = list(diagram[1])

        # diagram pointer moves by two, student pointer moves by 1
        j = 0
        for i in range(0, len(diagram[0]), 2):
            student_name = self._students[j]

            temp_plants = []
            temp_plants.append(self._plant_codes[diagram[0][i]])
            temp_plants.append(self._plant_codes[diagram[0][i+1]])
            temp_plants.append(self._plant_codes[diagram[1][i]])
            temp_plants.append(self._plant_codes[diagram[1][i+1]])

            result[student_name] = temp_plants
            j = j + 1

        return result

    def plants(self, student_name):
        return self._student_plants[student_name]  
