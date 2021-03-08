(function(){
var send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (data) {
    console.log('test', 12);
    //Do some stuff in here to modify the responseText
    send.call(this, data);
};
console.log("applyed")
})()
