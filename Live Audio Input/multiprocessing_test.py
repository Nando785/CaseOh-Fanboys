import multiprocessing
import time

def dosum1():
    for _ in range(10):
        print("doing sum")
        time.sleep(2)
        print("done")
    
def dosum2():
    for _ in range(10):
        print("doing sum else")
        time.sleep(2)
        print("done again")
    
if __name__ == "__main__":
    
    start = time.perf_counter()
    
    p1 = multiprocessing.Process(target=dosum1)
    p2 = multiprocessing.Process(target=dosum2)
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()
    
    end = time.perf_counter()
    
    print("done in ", end - start, " seconds")