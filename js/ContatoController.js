var modulo = angular.module('app');
modulo.controller('ContatoController',  ['$scope', 
    function($scope) {

	$scope.mensagem = {texto: ''};
    $scope.contato = {};
    $scope.contatos = [];

    $scope.salva = function () {
         $scope.contatos.push($scope.contato);
         $scope.contato = {};
         $scope.mensagem.texto = "Contato adicionado com sucesso!"
    }


}]);