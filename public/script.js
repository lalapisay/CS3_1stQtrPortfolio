let Age;
Age = 1; 

let maxAge;
maxAge = 100;

let numPerDay;
numPerDay = 5;

let totalRequired;
totalRequired =  (numPerDay * 365) * (maxAge - Age);

let answer = "You'll need " + totalRequired + " chocolates to last you until the age of " + maxAge;
document.write(answer);
