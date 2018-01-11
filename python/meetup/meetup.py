import calendar
from datetime import date
def meetup_day(year, month, day_of_the_week, which):
    monthcalendar = calendar.monthcalendar(year, month)

    day_descriptor = {
                'Monday': 0,
                'Tuesday': 1,
                'Wednesday': 2,
                'Thursday': 3,
                'Friday': 4,
                'Saturday': 5,
                'Sunday': 6,
                '1st': 1,
                '2nd': 2,
                '3rd': 3,
                '4th': 4,
                '5th': 5
            }

    # print(monthcalendar)
    day = day_descriptor[day_of_the_week]
    
    if (which == 'teenth'):
        for week in monthcalendar:
            if (week[day] > 12 and week[day] < 20):
                return date(year, month, week[day])
    
    nth_day = day_descriptor[which]
    
    if (date(year, month, 1).weekday() == day_descriptor[day_of_the_week]):
        day = calendar.Calendar(day).monthdayscalendar(year, month)[nth_day - 1][0]
        return date(year, month, day)
    else:
        day = calendar.Calendar(day).monthdayscalendar(year, month)[nth_day][0]
        return date(year, month, day)

meetup_day(2013, 11, 'Friday', '2nd')
