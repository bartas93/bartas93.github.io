---
slug: regular-expressions
title: Wyrażenia regularne
authors: bjab
tags: [others]
---
# Wyrażenia regularne
- Składa się z sekwencji atomów (atom to literał - litera, cyfra, znak specjalny)
- Wielkość liter ma znaczenie
- Można przetestować regexy w narzędziach online typu: https://regex101.com/

# Kwantyfikatory

Kwantyfikator mówi ile może być wystąpień danego atomu. Kwantyfikator odnosi się do elementu położonego po lewej stronie od kwantyfikatora. Jeżeli przy atomie nie ma kwantyfikatora to oznacza, że atom będzie miał jedno wystąpienie (w przykładach poniżej atom `b` ma zawsze jedno wystąpienie.

- `*` - zero lub więcej wystąpień

  np. `a*b` może przekładać się między innymi na wyrażenia: `b`, `ab`, `aab`, `aaaaaaab`, …

- `+` - jedno lub więcej wystąpień

  np. `a+b` może przekładać się między innymi na wyrażenia: `ab`, `aab`, `aaaaab`, …

- `?` - zero lub jedno wystąpienie

  np. `a?b` przekłada się na `b`, `ab`

- `{min,max}` - Co najmniej `min` wystąpień, a maksymalnie `max` wystąpień

  np. `a{2,4}b` przekłada się na wyrażenia: `aab`, `aaab`, `aaaab`

- `{min,}` - Co najmniej `min` wystąpień. Maksymalnie może być nieskończenie wiele.
- `{,max}` - Nie ma minimalnej liczby wystąpień, a maksymalnie może być `max` wystąpień
- `{n}` - dokładna liczba wystąpień równa `n`

  np. `a{4}b` - przekłada się na: `aaaab`


# Zakresy []

Zakres oznacza, że wyrażenie może być jedną literą/cyfrą z zakresu. Myślnik `-` oznacza zakres od, do.

- `[abc]` - oznacza, że wyrażeniem będzie `a` lub `b` lub `c` (tylko jedna litera)
- `[a-bB-Z]` - wyrażeniem może być `a`, `b`, `B`, `C`, `D`, …, `Z`
- `[a-Z]` - wyrażeniem może być każdy anglojęzyczny znak (duży lub mały)
- `[0-9]` - wyrażeniem może być każda cyfra
- `[a-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]` - zakres wszystkich polskich znaków.

# Grupy ()

- `(ab){2}` - oznacza wyrażenie `abab`

# Flagi

- `(?i)` - ignorowanie wielkości liter z prawej strony od tego znaku

# Znaki specjalne

- `.` - każdy znak
- `$` - koniec wiersza (jeśli użyjemy ten znak na końcu to oznacza, że nie ma żadnego znaku po poszukiwanym wyrażeniu.
- `^` - początek wiersza (jeśli użyjemy ten znak na początku to oznacza, że nie ma żadnego znaku przed poszukiwanym wyrażeniem.
- `[^e]` - negacja - wyrażenie nie będzie zawierało litery `e`.
- `|` - znak oznacza logiczne lub, czyli wyrażeniem będzie dowolne wyrażenie oddzielone znakiem `|`

  np. `a|b` - oznacza `a` lub `b`

- `\s` - Spacja, tabulator lub znak nowego wiersza
- `\S` - Znak który jest negacją `\s`, czyli znak, który nie jest spacją, tabulatorem lub znakiem nowego wiersza
- `\w` - litera, cyfra lub znak `_` (zapis równoważny do `[a-Z_]`
- `\W` - znak który jest negacją `\w` czyli taki znak, który nie jest literą, cyfrą lub znakiem `_`
- `\d` - cyfra (digit) (zapis równoważny do `[0-9]`)
- `\D` - znak który jest negacją `\d` czyli taki znak, który nie jest cyfrą
- `\b` - Dowolny znak odstępu, początku łancucha, końca łańcucha oraz dowolnego znaku, który nie jest ani literą ani cyfrą.

**Jeżeli chcemy użyć w wyrażeniu regularnym jednego ze znaków specjalnych takich jak `.`, `*`, `/`, `?`, `:`, `.`, `^`, `+`, `\`, `=`, `|`, to poprzedzamy go znakiem `\` czyli np. `\.`**