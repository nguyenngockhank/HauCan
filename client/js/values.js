angular.module("app.values", [])
.constant("STR_ALERT", {
  before_remove: 'Do u really want to delete this record ???'
})
.value('donviOption', [
  {code: 'kg', title: 'kg'},
  {code: 'lít', title: 'lít'},
  {code: 'm', title: 'm'},
  {code: 'trái', title: 'trái'},

])
.value("restInstance", function(restApi, module_name) {
  var instance = {
    all: function(){
      return restApi.one( module_name + '' ).get();
    },
    get: function(id) {
      return restApi.one( module_name + '/' + id).get();
    },
    save: function(data) {
      return restApi.all('' + module_name).post(data);
    },
    edit: function(id, data){
      var api = restApi.all('' + module_name).one( '' + id );
      angular.extend(api, data)
      return api.put();
    },
    remove: function(id){
      return restApi.one( module_name + '/' + id).remove();
    }
  }
  return instance;
})
