 var app = angular.module('todoApp', ["ngRoute"])
 .controller('TodoListController', ['$scope','$http',function ($scope,$http,$location,$window){
    $scope.persons = []; 
	 
    $scope.bodys = [
	{
		"id":"1",
		"nome":"João Santos",
		"email":"joaosantos@gmail.com",
		"consulta":"#MVJS0001",
		"doenca":"Diabetes",
		"medico":"Dr.Marcos Santana",
		"title":"Parabéns! Continue o bom trabalho. Aceita uma dica de saúde?",
		"bodytitle":"Dicas para viver bem com Diabetes - Tua Saude",
		"body":"A diabetes é uma doença que leva ao excesso de açucar no sangue."
	}
];
   
$scope.buscar = function(id){
	 angular.forEach($scope.bodys, function(value, key){
      if(value.id == id)
         $scope.persons.push(value);
   });
}



}]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bom',{template:"<p style='padding:5%;margin-bottom:5%;color:#fff;width:100%;text-align:center;background-color:#4CAF50;margin-left:0'>Estou Bem</div><h1 style='text-align:center'>Parabéns! Continue o bom trabalho. Aceita uma dica de saúde?</h1><h3 style='text-align:center;color: #565656; font-size: 14px'>Dicas para viver bem com Diabetes - Tua Saude</h5><p style='color: #565656; font-size: 13px'>A diabetes é uma doença que leva ao excesso de açucar no sangue.<p>"})
	  .when('/menos',{template:"<p style='text-align:center;color: #565656; margin-left:8%;margin-right:8%'>Você tem alguma queixa de saúde?</p> <form  action=''><input type='radio' name='questao' value='1'> Não<br><input type='radio' name='questao' value='2'> Sim<br></form>"})
	  	  .when('/mais',{template:"<p style='text-align:center;margin-right:25%;margin-left:30%'>Qual o problema ?</p><form action=''><input type='radio' name='questao' value='1'> Tenho dúvidas sobre o que estou sentindo<br><input type='radio' name='questao' value='2'> Não estou me sentindo bem<br><input type='radio' name='questao' value='3'> Outro<br>"})

}]);
