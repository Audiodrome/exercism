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
        self._bearing -= 1
        if self._bearing < EAST:
            self._bearing = SOUTH

    def turn_left(self):
        self._bearing += 1
        if self._bearing > SOUTH:
            self._bearing = EAST

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

        for char in directions:
            if (char == 'L'):
                self.turn_left()
            elif (char == 'R'):
                self.turn_right()
            else:
                self.advance()
