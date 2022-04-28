def solution(answers):
    answer = []
    supo1 = [1, 2, 3, 4, 5]
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    score1 = 0
    score2 = 0
    score3 = 0
    
    n = 1 
    while len(answers) > (n-1)*5 :
        for i in range((n-1)*5, n*5) :
            if len(answers) - 1 < i : break
            if supo1[i%5] == answers[i] : score1 += 1
        n += 1
    
    n = 1
    while len(answers) > (n-1)*8 :
        for i in range((n-1)*8, n*8) :
            if len(answers) - 1 < i : break
            if supo2[i%8] == answers[i] : score2 += 1
        n += 1
    
    n = 1
    while len(answers) > (n-1)*10 :
        for i in range((n-1)*10, n*10) :
            if len(answers) - 1 < i : break
            if supo3[i%10] == answers[i] : score3 += 1
        n += 1
    
    temp = [(1,score1), (2,score2), (3,score3)]
    temp.sort(key=lambda x : -x[1])
    if temp[0][1] == temp[1][1] == temp[2][1] : answer = [1, 2, 3]
    elif temp[0][1] == temp[1][1] and temp[0][1] != temp[2][1] : answer = [temp[0][0], temp[1][0]]
    else : answer = [temp[0][0]]
    
    return answer