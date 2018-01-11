import calendar
from datetime import date
def meetup_day(year, month, day_of_the_week, which):
    monthcalendar = calendar.monthcalendar(year, month)

    day_to_int = {
                'Monday': 0,
                'Tuesday': 1,
                'Wednesday': 2,
                'Thursday': 3,
                'Friday': 4,
                'Saturday': 5,
                'Sunday': 6 
               }

    # print(monthcalendar)

    if (which == 'teenth'):
        for week in monthcalendar:
            print(week)
            day = day_to_int[day_of_the_week]
            if (week[day] > 12 and week[day] < 20):
                print(date(year, month, week[day]))
                return date(year, month, week[day])

meetup_day(2013, 5, 'Monday', 'teenth')
