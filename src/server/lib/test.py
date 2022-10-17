import sys

def main():
    args = sys.argv
    print("I'am Python<br><br>")
    print("Count: " + args[1] + "<br><br>")
    for x in range(int(args[1])):
      print(str(x) + "<br>")
      
if __name__ == "__main__":
    main()