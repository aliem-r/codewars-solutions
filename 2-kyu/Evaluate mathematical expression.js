// https://www.codewars.com/kata/52a78825cdfc2cfc87000005

const calc = function (expression) {
    //set operations
    let operations = {
        //[4]
        "+": (operand1, operand2) => +operand1 + +operand2,
        "-": (operand1, operand2) => +operand1 - +operand2,
        "*": (operand1, operand2) => +operand1 * +operand2,
        "/": (operand1, operand2) => +operand1 / +operand2,
    };
    //remove spaces
    expression = expression.replace(/\s/g, "");
    //wrap expression with parentheses
    expression = "(" + expression + ")";
    //operate as long as there are parentheses in expression
    while (expression[0] == "(") {
        //get the parentheses with no nested parentheses, loop and resolve them
        expression.match(new RegExp(/\(([^()]+)\)/, "g")).forEach(function (parentheses) {
            //copy current parentheses to replace it later
            let pcopy = parentheses;
            //get rid of all repeated or unnecessary operators
            while (/\+(?=[-+*/])|(?<=[-+*/])\+|--/g.test(parentheses)) {
                parentheses = parentheses.replace(/\+(?=[-+*/])|(?<=[-+*/])\+/g, "").replace(/--/g, "+");
            }
            //go through each operator in order and solve their operation
            ["/", "*", "-", "+"].forEach(function (operator) {
                //check if operator existis
                if (parentheses.indexOf(operator) > 1) {
                    //regex that gets current operator and the numbers around it
                    parentheses.match(new RegExp(`-*\\d+(\\.\\d+)*(\\${operator}-*\\d+(\\.\\d+)*)+`, "g")).forEach(function (operation) {
                        //operate and replace parentheses with the solution
                        parentheses = parentheses.replace(operation, function () {
                            return operation.split(operator).reduce(operations[operator]);
                        });
                    });
                }
            });
            //replace in the main expression the parentheses we just solved
            expression = expression.replace(pcopy, parentheses.slice(1, -1));
        });
    }
    //return answer as number when the loop ends
    return +expression;
};
