#recursion  of function in python
def my_fun(a,b):
    print("hello")
    my_fun(5,5) # when this functions is not completed then it is called stack overflow

print(my_fun(9,6))


# #recursion  of function in python with specified condition 
# count = 0 
# def my_fun(a,b):
#     if count == 20 : return
#     count = count + 1
#     print("hello")
#     my_fun(5,5)

# print(my_fun(9,6))
