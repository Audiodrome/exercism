

class BowlingGame(object):
    def __init__(self):
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    def score(self):
        score = 0
        frameIndex = 0

        def sumOfBallsInFrame():
            return self.rolls[frameIndex] + self.rolls[frameIndex + 1]
        
        def spareBonus():
            return self.rolls[frameIndex + 2]
        
        def strikeBonus():
            return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2]

        def isStrike():
            return self.rolls[frameIndex] == 10

        def isSpare():
            return self.rolls[frameIndex] + self.rolls[frameIndex + 1] == 10

        for frame in range(10):
            if isStrike():
                score += 10 + strikeBonus()
                frameIndex += 1
            elif isSpare():
                score += 10 + spareBonus()
                frameIndex += 2
            else:
                score += sumOfBallsInFrame()
                frameIndex += 2
        
        return score
