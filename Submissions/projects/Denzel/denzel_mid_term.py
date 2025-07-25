# -*- coding: utf-8 -*-
"""Denzel_Mid_term.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1vopdkZwZoggJlZzNYszzvuoYpCA-gH3a
"""

#11.GRADE CONVERTER
user_input = input("Enter the exam score:")
grade = int(user_input)
if not (0 <= grade <= 100):
    print("Invalid exam score: Percentage must be between 0 and 100.")
elif grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")

#12.VOWEL COUNTER
#Asks the user to enter a sentence
sentence = input("Enter a sentence:")

def count_vowels(sentence):
    #Makes the programm case insensitive
    vowels = "aeiouAEIOU"
    count = 0
    # The following lines were not indented correctly
    for ch in sentence:
        if ch in vowels:
            count += 1
    return count

#Gives a total count of the vowels.
print (count_vowels(sentence))

#13.DECIMAL TO BINARY CONVERTER
n = input("Enter a decimal number:")
def decimal_to_binary(n):
    if n == 0:
        return "0"
    binary = ""
    while n > 0:
        binary = str(n % 2) + binary
        n = n // 2
    return binary
# Convert the input to a float first to handle decimal inputs, then to an integer
print(decimal_to_binary(int(float(n))))

#14.Sum of digits code

# Prompt the user to enter a positive integer
num_str = input("Enter a positive integer: ")

# Initialize a variable to store the sum of the digits
digit_sum = 0

# Iterate through each character (digit) in the input string
for digit_char in num_str:
  # Convert the character to an integer and add it to the sum
  digit_sum += int(digit_char)

# Print the final sum of the digits
print("Sum of digits:", digit_sum)

