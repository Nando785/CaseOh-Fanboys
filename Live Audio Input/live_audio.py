import multiprocessing
from multiprocessing import Manager
import time
from scipy.io import wavfile
from record_audio import record_audio


def continuous_recording(event, audio_queue: list):
    for _ in range(10):
        record_audio('output')
        samplerate, audio_file = wavfile.read('output.wav')
        audio_queue.append(audio_file)
    event.set()

def process_audio(event, audio_queue: list):
    while True:
        if audio_queue:
            print("Processed ", audio_queue.pop(0))
        if event.is_set():
            break


if __name__ == "__main__":
    
    start = time.perf_counter()
    
    with Manager() as manager:
        
        audio_queue = manager.list()
        
        event = multiprocessing.Event()
        
        p1 = multiprocessing.Process(target=continuous_recording, args=(event, audio_queue,))
        p2 = multiprocessing.Process(target=process_audio, args=(event, audio_queue,))
        
        p1.start()
        p2.start()
        
        p1.join()
        p2.join()
        
        end = time.perf_counter()
        
        print(audio_queue)
        print("done in ", end - start, " seconds")