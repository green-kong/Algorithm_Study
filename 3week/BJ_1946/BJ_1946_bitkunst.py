test = int(input())
result = []

for i in range(test) :
    n = int(input())
    employee = []    
    applicants = []
    for j in range(n) :
        rank = list(map(int, input().split()))
        applicants.append(rank)

    applicants.sort(key=lambda x : x[0])
    employee.append(applicants[0])
    
    for k in range(1, len(applicants)) :
        if applicants[k][1] < employee[-1][1] :
            employee.append(applicants[k])
        
    result.append(len(employee))

for i in result :
    print(i)
