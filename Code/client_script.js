api.controller=function($scope) {
  /* widget controller */
  var c = this;

  // These functions need to be on the global scope to be called by HTML attributes
  
  window.drag = function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  window.allowDrop = function(ev) {
    ev.preventDefault();
  }

  window.drop = function(ev, newState) {
    ev.preventDefault();
    var storyId = ev.dataTransfer.getData("text");
    
    c.server.get({
      action: 'update_story_state',
      story_id: storyId,
      new_state: newState
    }).then(function(response) {
      location.reload(); 
    });
  }
};
