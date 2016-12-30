var myBeer= angular.module("myBeer",[]);

myBeer.controller('mainController',function($scope){

	$scope.name="Beer Store";

	$scope.cart=[];

	$scope.items=[
		{
			name:"Budweiser",
			desc:"The famous Budweiser beer. Our exclusive Beechwood Aging produces a taste, smoothness and a drinkability you will find in no other beer at any price.",
			alcoholcontenet:"5.0%",
			price:125,
			imageurl:'images/budweiser.jpg',
			quantity:0
		},
		{
			name:"Black Label",
			desc:"A contemporary lager beer with a light, crisp, refreshing aroma and taste.",
			alcoholcontenet:"4.7%",
			price:200,
			imageurl:'images/blacklabel.jpg',
			quantity:0
		},
		{
			name:"Alpine",
			desc:"An East Coast award-winning lager brewed in 1937 by P.W. Oland from a batch of pure yeast he discovered in New York. ",
			alcoholcontenet:"4.9%",
			price:230,
			imageurl:"images/alpine.jpg",
			quantity:0
		},
		{
			name:"Extra Dry",
			desc:"abatt Extra Dry (LXD) is carefully aged in ice cold cellars and is double chilled for a smooth, clean flavour with no after taste.",
			alcoholcontenet:"4.2%",
			price:130,
			imageurl:"images/extradry.jpg",
			quantity:0
		},
		{
			name:"Laker",
			desc:"Our full flavoured, strong lager, has a fuller, slightly sweeter palate that retains the dominate hop and aroma flavour. ",
			alcoholcontenet:"4.8%",
			price:180,
			imageurl:"images/laker.jpg",
			quantity:0
		},
		{
			name:"Black ice",
			desc:"An 'Ice brewed' beer which has a clean, fresh, snappy taste and a mellow aftertaste from the ice - filtering process.",
		    alcoholcontenet:"5.0%",
			price:220,
			imageurl:"images/blackice.jpg",
			quantity:0
		},
		{
			name:"James Ready",
			desc:"An East Coast award-winning lager brewed in 1937 by P.W. Oland from a batch of pure yeast he discovered in New York. ",
			alcoholcontenet:"6.0%",
			price:300,
			imageurl:"images/jamesready.jpg",
			quantity:0
		}

	];

	$scope.addtocart=function(item){
		$scope.cart.push(item);
	};
});