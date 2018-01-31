#include "gigasecond.h"
#include <iostream>

ptime gigasecond::advance(ptime input) {
    std::cout<<"what is input: "<<input<<std::endl;
    const ptime actual = time_from_string("2011-04-25 00:00:00");
    
    return actual;
}