//check the array in response body contains smth

var response = res.json();
pm.test("Test name", function () {
var yourArray = %path to array in json%;
            
function containsSmth(currentArrayElement) {
  return currentArrayElement.key == %expectedValue%;
}

let isTrue = yourArray.some(containsSmth);
pm.expect(isTrue).to.eql(true);
});
