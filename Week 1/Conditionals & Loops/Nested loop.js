//Nested loop Monday to Friday
for (var i = 1; i <= 2; i++) {
  for (var j = 1; j <= 5; j++) {
    console.log("Week " + i + " day " + j);
  }
}

for (var year = 2023; year < 2025; year++) {
  console.log(year);
}

//ADDED NESTED LOOP INSIDE THE FORLOOP TO DISPLAY YEARS & MONTHS
for (var year = 2023; year < 2025; year++) {
  console.log(year);
  for (var month = 6; month < 9; month++) {
    console.log("------", month);
  }
}
