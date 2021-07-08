### Exception Handling in Java

- The **Exception Handling in Java** is one of the powerful mechanism to handle the runtime errors so that normal flow of the application can be maintained. 
- In Java, an exception is an event that disrupts the normal flow of the program. 
- It is an object which is thrown at runtime.
- **Exception Handling** is a mechanism to handle runtime errors such a ClassNotFoundException, IOException, SQLException, RemoteException, etc.

---

### Advantage of Exception Handling

- The core advantage of exception handling is to maintain the normal flow of the application. 
- An exception normally disrupts the normal flow of the application that is why we use exception handling. 
Let's take a scenario:

```
statement 1;  
statement 2;  
statement 3;  
statement 4;  
statement 5;//exception occurs  
statement 6;  
statement 7;  
statement 8;  
statement 9;  
statement 10; 
```
Suppose there are 10 statements in your program and there occurs an exception at statement 5, the rest of the code will not be executed i.e. statement 6 to 10 will not be executed. If we perform exception handling, the rest of the statement will be executed. That is why we use exception handling in Java.

---

### Types of Java Exceptions

There are mainly two types of exceptions: checked and unchecked. Here, an error is considered as the unchecked exception. According to Oracle, there are three types of exceptions:
-	Checked Exception
-	Unchecked Exception
-	Error

### 1) Checked Exception

- The classes which directly inherit Throwable class except RuntimeException and Error are known as **checked exceptions**. 
- E.g. IOException, SQLException etc. Checked exceptions are checked at compile-time.

### 2) Unchecked Exception

- The classes which inherit RuntimeException are known as **unchecked exceptions**.
- E.g. ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException etc. Unchecked exceptions are not checked at compile-time, but they are checked at runtime.

### 3) Error

- Error is irrecoverable e.g. OutOfMemoryError, VirtualMachineError, AssertionError etc.

---

### Java Exception Keywords

- **try** : The **"try"** keyword is used to specify a block where we should place exception code. The try block must be followed by either catch or finally. It means, we can't use try block alone.<br>
- **catch** : The **"catch"** block is used to handle the exception. It must be preceded by try block which means we can't use catch block alone. It can be followed by finally block later.<br>
- **finally** :  The **"finally"** block is used to execute the important code of the program. It is executed whether an exception is handled or not.<br>
- **throw** : The **"throw"** keyword is used to throw an exception.<br>
- **throws** :  The **"throws"** keyword is used to declare exceptions. It doesn't throw an exception. It specifies that there may occur an exception in the method. It is always used with method signature.<br>

---

### Common Scenarios of Java Exceptions

There are given some scenarios where unchecked exceptions may occur. They are as follows:

### 1) A scenario where ArithmeticException occurs

If we divide any number by zero, there occurs an ArithmeticException.
```
int a=50/0;//ArithmeticException  
```
### 2) A scenario where NullPointerException occurs

If we have a null value in any variable, performing any operation on the variable throws a NullPointerException.
```
String s=null;  
System.out.println(s.length());//NullPointerException  
```
### 3) A scenario where NumberFormatException occurs

The wrong formatting of any value may occurNumberFormatException.
```
String s="abc";  
Inti=Integer.parseInt(s);//NumberFormatException
```
---

### Java Exception Handling Example

Let's see an example of Java Exception Handling where we using a try-catch statement to handle the exception.In this example, 100/0 raises an ArithmeticException which is handled by a try-catch block.

```
public class JavaExceptionExample
{  
public static void main(String args[])
{  
try
{
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

```
Exception in thread main java.lang.ArithmeticException:/ by zero
rest of the code...
```

---

### Java Multi-catch block

A try block can be followed by one or more catch blocks. Each catch block must contain a different exception handler. So, if you have to perform different tasks at the occurrence of different exceptions, use java multi-catch block.

### Points to remember
- At a time only one exception occurs and at a time only one catch block is executed.
- All catch blocks must be ordered from most specific to most general, i.e. catch for ArithmeticException must come before catch for Exception.

### Example 
Let's see a simple example of java multi-catch block.

```
public class MultipleCatchBlock1 {  
  
    public static void main(String[] args) {  
          
           try{    
                int a[]=new int[5];    
                a[5]=30/0;    
               }    
               catch(ArithmeticException e)  
                  {  
                   System.out.println("Arithmetic Exception occurs");  
                  }    
               catch(ArrayIndexOutOfBoundsException e)  
                  {  
                   System.out.println("ArrayIndexOutOfBounds Exception occurs");  
                  }    
               catch(Exception e)  
                  {  
                   System.out.println("Parent Exception occurs");  
                  }             
               System.out.println("rest of the code");    
    }  
}  
```

#### OUTPUT
```
Arithmetic Exception occurs
rest of the code
```
