Parties = new Mongo.Collection("parties");

//tells meteor -> only run this code on client side
if (Meteor.isClient){
	var app = angular.module('socially', ['angular-meteor']);
	
	app.directive('partiesList', function() {
		return {
		restrict: 'E',
		templateUrl: 'parties-list.html',
		controllerAs: 'partiesList',
		controller: function($scope, $reactive) {
				$reactive(this).attach($scope);
				
				this.newParty = {};
		
				this.helpers({
					parties: function() {
						return Parties.find({});
					}
				});
				
				this.addParty = function() {
					Parties.insert(this.newParty);
					this.newParty = {};
				};
				
				this.removeParty = function(party){
					Parties.remove({_id: party._id});	
				};
				
			}
		}
	});
	
}