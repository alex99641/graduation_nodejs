// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    //response.json(request.body);
    response.sendFile(__dirname + "/text.json");
    //response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

/*const http = require("http");
const fs = require("fs");
http.createServer(function(request,response){
     
 
	// асинхронное чтение
	fs.readFile("text.json", "utf8", 
		    function(error,data){
		        console.log("Асинхронное чтение файла");
		        if(error) throw error; // если возникла ошибка
		        console.log(data);  // выводим считанные данные
	});
	 
	// синхронное чтение
	console.log("Синхронное чтение файла")
	let fileContent = fs.readFileSync("text.json", "utf8");
	console.log(fileContent);
    response.end(fileContent);
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});*/
