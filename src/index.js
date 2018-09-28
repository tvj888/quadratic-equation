module.exports = function solveEquation(equation) {
  // your implementation
    let x1, x2;
    let arr = equation.split(" ");
    let a = arr[0];
    let b = arr[3] + arr[4];
    let c = arr[7] + arr[8];
    let d;
    //
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = Math.pow(b, 2) - (4 * a * c);
    //
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    //
    x1 = Math.round(x1);
    x2 = Math.round(x2);
    //
    function compareNumeric(a, b) {
        return a - b;
    }
    return [x1, x2].sort(compareNumeric);
}
