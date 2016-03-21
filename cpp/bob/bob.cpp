#include <iostream>
#include "bob.h"
using namespace bob;

namespace bob
{
  const double pi = 3.1416;
  double value() { return 2*pi; }
}

int bob::main () {
  cout << bob::value() << '\n';
  cout << bob::pi << '\n';
  return 0;
}
