

class BowlingGame(object):
    def __init__(self):
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    def score(self):
        return 0

        
b = BowlingGame()
b.roll(4)
b.print_rolls()
b.roll(5)
b.print_rolls()
b.roll(6)
b.print_rolls()