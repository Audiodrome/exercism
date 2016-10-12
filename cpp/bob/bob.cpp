#include "bob.h"
#include <string>
#include <iostream>
#include <algorithm>

bool ChkForCaps(std::string arg);
bool ChkForAlphas(std::string arg);
std::string RMWhiteSpc(std::string arg);

std::string bob::hey(std::string input)
{
  bool is_alpha = false,
       is_upper = false;

  std::string arg = RMWhiteSpc(input);

  if (arg == "")
    return "Fine. Be that way!";

  is_upper = ChkForCaps(arg);
  is_alpha = ChkForAlphas(arg);

  if (is_upper == true && is_alpha == true)
    return "Whoa, chill out!";

  if (arg[arg.length() - 1] == '?')
    return "Sure.";

  return "Whatever.";
}

bool ChkForAlphas(std::string arg)
{
  for (std::string::iterator it = arg.begin(); it != arg.end(); it++) {
    if(isalpha(*it))
      return true;
  }
  return false;
}

bool ChkForCaps(std::string arg)
{
  for (std::string::iterator it = arg.begin(); it != arg.end(); it++) {
    if(islower(*it))
      return false;
  }
  return true;
}

std::string RMWhiteSpc(std::string input)
{
  input.erase(remove_if(input.begin(), input.end(), isspace),input.end());
  return input;
}
