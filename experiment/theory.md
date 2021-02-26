## Exception Handling in Java
The **Exception Handling in Java** is one of the powerful mechanism to handle the runtime errors so that normal flow of the application can be maintained. In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime.
Exception Handling is a mechanism to handle runtime errors such a ClassNotFoundException, IOException, SQLException, RemoteException, etc.


#### Hierarchy of Java Exception classes

![image](images/img1.png) 

#### Types of Java Exceptions
There are mainly two types of exceptions: checked and unchecked. Here, an error is considered as the unchecked exception. According to Oracle, there are three types of exceptions:
1.	Checked Exception
2.	Unchecked Exception
3.	Error

#### 1) Checked Exception
The classes which directly inherit Throwable class except RuntimeException and Error are known as checked exceptions e.g. IOException, SQLException etc. Checked exceptions are checked at compile-time.
#### 2) Unchecked Exception
The classes which inherit RuntimeException are known as unchecked exceptions e.g. ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException etc. Unchecked exceptions are not checked at compile-time, but they are checked at runtime.
#### 3) Error
Error is irrecoverable e.g. OutOfMemoryError, VirtualMachineError, AssertionError etc.
#### Java Exception Keywords

**try** :The "try" keyword is used to specify a block where we should place exception code. The try block must be followed by either catch or finally. It means, we can't use try block alone.<br>
**catch** :The "catch" block is used to handle the exception. It must be preceded by try block which means we can't use catch block alone. It can be followed by finally block later.<br>
**finally** : The "finally" block is used to execute the important code of the program. It is executed whether an exception is handled or not.<br>
**throw** :The "throw" keyword is used to throw an exception.<br>
**throws** : The "throws" keyword is used to declare exceptions. It doesn't throw an exception. It specifies that there may occur an exception in the method. It is always used with method signature.<br>

#### Common Scenarios of Java Exceptions
There are given some scenarios where unchecked exceptions may occur. They are as follows:
#### 1) A scenario where ArithmeticException occurs
If we divide any number by zero, there occurs an ArithmeticException.
```sh
1.	int a=50/0;//ArithmeticException  
```
#### 2) A scenario where NullPointerException occurs
If we have a null value in any variable, performing any operation on the variable throws a NullPointerException.
```sh
String s=null;  
System.out.println(s.length());//NullPointerException  
```


#### 3) A scenario where NumberFormatException occurs
The wrong formatting of any value may occurNumberFormatException.
```sh
String s="abc";  
Inti=Integer.parseInt(s);//NumberFormatException
```


#### Java Exception Handling Example
Let's see an example of Java Exception Handling where we using a try-catch statement to handle the exception.In this example, 100/0 raises an ArithmeticException which is handled by a try-catch block.
```sh
public class JavaExceptionExample{  
public static void main(String args[])
{  
try{
      //code that may raise exception  
int data=100/0;  
   }
catch(ArithmeticException e)
{
System.out.println(e);
}  
   //rest code of the program   
System.out.println("rest of the code...");  
  }  
}
```

#### OUTPUT

```sh
Exception in thread main java.lang.ArithmeticException:/ by zero
rest of the code...
```

