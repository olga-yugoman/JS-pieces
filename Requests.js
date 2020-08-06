//how to send request + add some assertions to check response, full notation

pm.sendRequest({
    url: %url%,
    method: '%method%',
    header: %header%,
    body: {
        mode: 'raw',
        raw: JSON.stringify({%body%})
    }
},
    function(err, res) {
        var response = res.json();
        pm.test("Test name", function () {
          your tests here
        });
});
