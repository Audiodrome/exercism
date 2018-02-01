#include "gigasecond.h"
#include <iostream>

ptime gigasecond::advance(ptime input) {
    return input + seconds(1000000000);
}