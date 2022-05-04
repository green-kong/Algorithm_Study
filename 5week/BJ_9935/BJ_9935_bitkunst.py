string = str(input())
bomb = str(input())

newStr = string.split(bomb)
while True :
    letter = ''.join(newStr)
    if len(newStr) != 1 :
        newStr = letter.split(bomb)
    else : break

if newStr[0] != '' :
    print(newStr[0])
else :
    print('FRULA')