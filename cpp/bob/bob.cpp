#include "bob.h"
#include <string>
#include <iostream>
#include <algorithm>

bool ChkForCaps(std::string arg);
std::string RMWhiteSpc(std::string arg);

std::string bob::hey(std::string input)
{
  bool upper = false;
  std::string arg = RMWhiteSpc(input);

  std::cout << "String: " << arg << "\n";

  // if (arg == "")
  //   return "Fine. Be that way!";

  upper = ChkForCaps(arg);

  std::cout << "Bool: " << upper << "\n";

  if (upper == 0)
    return "Whoa, chill out!";

  if (input[input.length() - 1] == '?')
    return "Sure.";
  
  return "Whatever.";
}

bool ChkForCaps(std::string arg)
{
  for (std::string::iterator it = arg.begin(); it != arg.end(); it++) {
    //std::cout<<*it;
    if(islower(*it))
      return true;
  }
  return false;
}

std::string RMWhiteSpc(std::string input)
{
  input.erase(remove_if(input.begin(), input.end(), isspace),input.end());
  return input;
}
