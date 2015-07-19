angular.module('app.modules.services', [
])
.factory("AlertService", function(toastr) {

	var instanceService = {};

	var base= {
		success: function(action, item_name){
			var item_name = 'item' || item_name;
			toastr.success(action + ' '+ item_name + ' successfully !!!', 'Success');
		},
		error: function(action, item_name) {
			var item_name = 'item' || item_name;
			toastr.error('Fail to ' + action +  ' ' + item_name + ' !!!', 'Error');
		}
	} ;

	instanceService.add= {
		success: function(item_name){
			base.success('Add', item_name)
		},
		error: function(item_name){
			base.error('add', item_name)
		}
	}

	instanceService.edit = {
		success: function(item_name){
			base.success('Edit', item_name)
		},
		error: function(item_name){
			base.error('edit', item_name)
		}
	} 

	instanceService.remove = {
		success: function(item_name){
			base.success('Remove', item_name)
		},
		error: function(item_name){
			base.error('remove', item_name)
		}
	}
	return instanceService;
});