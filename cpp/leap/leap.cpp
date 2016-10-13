#include "leap.h"
#include <iostream>

bool leap::is_leap_year(int year)
{
  bool is_leap = false;
  is_leap = (year%100 != 0 && year%4 == 0) || year%400 == 0 ? true : false;

  return is_leap;
}

