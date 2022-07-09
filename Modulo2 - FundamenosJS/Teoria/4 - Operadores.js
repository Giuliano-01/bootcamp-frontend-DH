//Operators
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement

//Bitwise operators
5 & 1	//AND 	 5 & 1 (0101 & 0001)	1 (1)
5 | 1	//OR 	 5 | 1 (0101 | 0001)	5 (101)
~ 5	    //NOT 	 ~ 5 (~0101)	10 (1010)
5 ^ 1	//XOR 	 5 ^ 1 (0101 ^ 0001)	4 (100)
5 << 1	//left shift 	 5 << 1 (0101 << 1)	10 (1010)
5 >> 1	//right shift 	 5 >> 1 (0101 >> 1)	2 (10)
5 >>> 1	//zero fill right shift 	 5 >>> 1 (0101 >>> 1)	2 (10)

//Arithmetic
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2,  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal (mismo valor y tipo)
a !== b             // strict unequal
a < b,   a > b       // less and greater than
a <= b,  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or
