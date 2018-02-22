# Globals for the bearings
# Change the values as you see fit
EAST = 0
NORTH = 1
WEST = 2
SOUTH = 3

class Robot(object):
    def __init__(self, bearing=NORTH, x=0, y=0):
        self._bearing = bearing
        self._x = x
        self._y = y

    @property
    def coordinates(self):
        return (self._x, self._y)

    @property
    def bearing(self):
        return self._bearing

    def turn_right(self):
        if (self._bearing == NORTH):
            self._bearing = EAST
        elif (self._bearing == EAST):
            self._bearing = SOUTH
        elif (self._bearing == SOUTH):
            self._bearing = WEST
        elif (self._bearing == WEST):
            self._bearing = NORTH

    def turn_left(self):
        if (self._bearing == NORTH):
            self._bearing = WEST
        elif (self._bearing == EAST):
            self._bearing = NORTH
        elif (self._bearing == SOUTH):
            self._bearing = EAST
        elif (self._bearing == WEST):
            self._bearing = SOUTH

    def advance(self):
        if (self._bearing == NORTH):
            self._y += 1
        elif (self._bearing == EAST):
            self._x += 1
        elif (self._bearing == SOUTH):
            self._y -= 1
        elif (self._bearing == WEST):
            self._x -= 1

    def simulate(self, directions):
        print("length: ", len(directions))

        for char in directions:
            if (char == 'L'):
                self.turn_left()
            elif (char == 'R'):
                self.turn_right()
            else:
                self.advance()
