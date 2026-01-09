// https://www.codewars.com/kata/581bc0629ad9ff9873000316

function calculate(sum) {
    if (!/^[\d*$+-.]+$/.test(sum)) return "400: Bad request"; //[1]
    if (!isNaN(sum)) return +sum; //[2]

    sum = sum.replace(/-/g, "_"); //[3]

    let operations = {
        //[4]
        "+": (operand1, operand2) => +operand1 + +operand2,
        _: (operand1, operand2) => +operand1 - +operand2,
        "*": (operand1, operand2) => +operand1 * +operand2,
        $: (operand1, operand2) => +operand1 / +operand2,
    };

    ["$", "*", "_", "+"].forEach((operator) => regx_match(operator)); //[5]

    return +sum; //[6]

    function regx_match(operator) {
        if (sum.indexOf(operator) != -1) {
            sum.match(new RegExp(`-*\\d+(\\.\\d+)*(e-\\d+)*(\\${operator}-*\\d+(\\.\\d+)*(e-\\d+)*)+`, "g")).forEach(function (operation) {
                //[7]
                sum = sum.replace(operation, function () {
                    //[8]
                    return operation.split(operator).reduce(operations[operator]);
                });
            });
        }
    }
}
