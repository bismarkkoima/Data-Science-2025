# -*- coding: utf-8 -*-
"""binary_lamech_#.py

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/18Rb8zS0YZMvmgOGSFANOCHv3I8tN_R1A
"""

first_name = input("Please enter your name:")



for char in first_name:
  ascii_code = ord(char)
  binary_value = format(ascii_code, '08b')
  print(f"Character: {char}, ASCII Value: {ascii_code}")

from sre_constants import error
secret_binary_code = '1011'
correct_guess = False
while not correct_guess:
  try:
    user_guess_decimal = int(input("Your guess: "))
    user_guess_binary = format(user_guess_decimal, '04b')
    print(f"Binary of{user_guess_decimal} is {user_guess_binary}")
    if user_guess_binary == secret_binary_code:
      print("Door Unlocked!")
      correct_guess = True
    else:
      print("Not a match")
  except ValueError:
     print("Invalid input. Please enter a whole number.")
  except Exception as e:
    print(f"An unexpected error occurred!{e}")

