### Mach Eight Sample Project

This is my code solution in NodeJS for the Mach Eight code challenge.

## How to run
To run the project, make sure you have node installed in your machine.
```
node-v
npm -v
```

In my case I progrogrammed this challenge in node v16.8.0 and npm v7.21.0.
I recommend to use nvm for manage node and its versions. It makes your life easier:
(https://github.com/nvm-sh/nvm)

Now that you have node in your machine, clone the repo and move to the path where you clonned it. Then use this command: 

```
npm start
```

The program will ask you to input the list:

```
Input the list of numbers separated by comma: 
```

Note that it has to be separated by comma. For example:

```
Input the list of numbers separated by comma: 1,2,3,4
```

Then it will ask you the value of the target sum, for example:

```
Input the target sum: 3
```

Output: 
```
1, 2
```

## How to execute the tests:
For executing the tests you have the install the test library included in package.json by simply using this command:

```
npm i
```

Then execute the next command to run the tests:

```
npm test
```
