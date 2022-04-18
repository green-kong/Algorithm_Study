str = input()
arr1 = str.split('0')
arr0 = str.split('1')

while '' in arr1:
    arr1.remove('')
while '' in arr0:
    arr0.remove('')

if len(arr1) >= len(arr0):
    print(len(arr0))
else:
    print(len(arr1))