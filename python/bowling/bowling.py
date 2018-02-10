class BowlingGame(object):
    def __init__(self):
        self.rolls = []
        self.score = 0
        self.frameIndex = 0

    def roll(self, pins):
        if pins > 10:
            raise ValueError("There can't possibly be more than 10 pins")
        # if len(self.rolls) == 20:
        #     raise IndexError("There are already 10 frames.")
        if pins < 0:
            raise ValueError("There can't possible be less than 0 pins")
        self.rolls.append(pins)

    def score(self):
        # score = 0
        # frameIndex = 0

        def sumOfBallsInFrame():
            return self.rolls[self.frameIndex] + self.rolls[self.frameIndex + 1]
        
        def spareBonus():
            return self.rolls[self.frameIndex + 2]
        
        def strikeBonus():
            return self.rolls[self.frameIndex + 1] + self.rolls[self.frameIndex + 2]

        def isStrike():
            return self.rolls[self.frameIndex] == 10

        def isSpare():
            return self.rolls[self.frameIndex] + self.rolls[self.frameIndex + 1] == 10

        for frame in range(10):
            if isStrike():
                self.score += 10 + strikeBonus()
                self.frameIndex += 1
            elif isSpare():
                self.score += 10 + spareBonus()
                self.frameIndex += 2
            else:
                self.score += sumOfBallsInFrame()
                self.frameIndex += 2
        
        return self.score
