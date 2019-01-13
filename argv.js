//console.log(process.argv);
var sum = 0;
var my_argv = process.argv.slice(2);
for (var i=0; i<my_argv.length; i++) {
sum = sum + Number(my_argv[i]);
}
console.log(sum);