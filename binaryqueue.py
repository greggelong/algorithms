def genBinary(n):
    # queue of empty strings
    q = []
    # push the first to the end of the queue and the first
    q.append("1")
    
    while (n>0):
        #get the front of the queue
        s1 = q[0]
        #pop it off
        q.pop(0)
        print(s1)
        
        s2 = s1 # coppy the var
        #append 0 to s1
        q.append(s1+"0")
        q.append(s2+"1")
        n=n-1
    return q


def genBinaryNoDq(n):
    # queue of empty strings
    q = []
    # push the first to the end of the queue and the first
    q.append("1")
    index = 0
    while (n>0):
        #get the front of the queue
        s1 = q[index]
        # dont pop it off
        #q.pop(0)
        print(s1)
        
        s2 = s1 # coppy the var
        #append 0 to s1
        q.append(s1+"0")
        q.append(s2+"1")
        n=n-1
        index+=1
    return q


n= 5

print(genBinary(n))
print("-"*20)
print(genBinaryNoDq(n))

