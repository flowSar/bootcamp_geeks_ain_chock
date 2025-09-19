// 1- inside the function funcOne the value of "a" will be a=3 , becuase a was changed inside the function and we can access varible outside if block and change it's value

// 1.2- if we declared the variable "a" as const , will get error if we run the function becuase a is immutable

// 2.1: the value of a in funcThree will be a=5, because the variable a is globale and a mutable
// and we can asign new value to it

// 2.2- if we declared the variable "a" as const , will get error if we run the function becuase a is immutable

// 3 the value of "a" will be hello becuase a is attached to window which is a global object in the browser, and if we run this function ousid ethe browser in terminal for example will get an error

// 4- the value of variale "a" is "test" , the functon will use the local variable

// 4-1 if we declared the variable "a" as const, noting will happen becuase the a inside the function is a local variable and won't get affected by the type of global variable

// 5- the value of "a" will be a=2 outside if block and a=5 inside if block. becuase the variable inside if Block doesn't leave teh local scope

// 5.1 if we declared the variable "a" as const, not thing will change, becuase the two "a" variable are different
