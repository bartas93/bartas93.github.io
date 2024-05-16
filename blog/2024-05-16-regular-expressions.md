---
slug: regular-expressions
title: Regular expressions
authors: bjab
tags: [others]
---
# Regular expressions
- Consists of a sequence of atoms (an atom is a literal - letter, digit, special character)
- Letters are case sensitive
- You can test regexes in online tools like: https://regex101.com/
<!-- truncate -->
# Quantifiers

The quantifier tells how many occurrences of a given atom there can be. A quantifier refers to the element to the left of the quantifier. If there is no quantifier next to an atom, it means that the atom will have one occurrence (in the examples below, atom `b` always has one occurrence.

- `*` - zero or more occurrences

  e.g. `a*b` can translate into, among others, the following expressions: `b`, `ab`, `aab`, `aaaaaaab`, …

- `+` - one or more occurrences

  e.g. `a+b` can translate into, among others, the following expressions: `ab`, `aab`, `aaaaab`, …

- `?` - zero or one occurrence

  e.g. `a?b` translates to `b`, `ab`

- `{min,max}` - At least `min` occurrences and maximum `max` occurrences

  e.g. `a{2,4}b` translates into the expressions: `aab`, `aaab`, `aaaab`

- `{min,}` - At least `min` occurrences. The maximum can be infinite.
- `{,max}` - There is no minimum number of occurrences, and the maximum can be `max` occurrences
- `{n}` - the exact number of occurrences equal to `n`

  e.g. `a{4}b` - translates into: `aaaab`


# Ranges []

Range means that the expression can be one letter/number from a range. The dash `-` denotes a range from, to.

- `[abc]` - means that the expression will be `a` or `b` or `c` (only one letter)
- `[a-bB-Z]` - the expression can be `a`, `b`, `B`, `C`, `D`, …, `Z`
- `[a-Z]` - the expression can be any English character (uppercase or lowercase)
- `[0-9]` - the expression can be any digit
- `[a-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]` - range of all Polish characters.

# Groups ()

- `(ab){2}` - means the expression `abab`

#Flags

- `(?i)` - ignore the case of letters to the right of this character

# Special signs

- `.` - any character
- `$` - end of line (if we use this character at the end, it means that there is no character after the searched expression.
- `^` - beginning of the line (if we use this character at the beginning, it means that there is no character before the searched expression.
- `[^e]` - negation - the expression will not contain the letter `e`.
- `|` - the sign means logical or, i.e. the expression will be any expression separated by the `|` sign

  e.g. `a|b` - means `a` or `b`

- `\s` - Space, tab or newline
- `\S` - A character that is the negation of `\s`, i.e. a character that is not a space, tab or newline character
- `\w` - letter, digit or character `_` (equivalent to `[a-Z_]`
- `\W` - a character that is the negation of `\w`, i.e. a character that is not a letter, digit or `_`
- `\d` - digit (equivalent to `[0-9]`)
- `\D` - a character that is the negation of `\d`, i.e. a character that is not a digit
- `\b` - Any whitespace character, the beginning of a string, the end of a string, and any character that is neither a letter nor a digit.

**If we want to use one of the special characters in the regular expression such as `.`, `*`, `/`, `?`, `:`, `.`, `^`, `+`, `\`, `=`, `|`, then we precede it with the `\` character, e.g. `\.`**