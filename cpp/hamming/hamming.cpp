#include "hamming.h"
#include <string>
#include <iostream>
#include <stdexcept>

int hamming::compute(std::string a, std::string b) {
    if (a.length() != b.length()) {
        throw std::domain_error("Unequal length dna strings.");
    }
    
    int hamming_distance = 0;
    int size = a.length();

    for (int i = 0; i < size; i++) {
        if (a[i] != b[i]) {
            hamming_distance++;
        }
    }

    return hamming_distance;
}