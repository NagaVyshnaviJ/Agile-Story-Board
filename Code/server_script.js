(function() {

  // Your specific table name has been inserted here.
  var myTableName = 'x_1581201_vyshnavi_u_story'; 

  // Check if the client is sending an update action
  if (input && input.action === 'update_story_state') {
    // Action: Update a single story's state
    var storyUpdateGR = new GlideRecord(myTableName);
    if (storyUpdateGR.get(input.story_id)) {
      storyUpdateGR.setValue('state', input.new_state);
      storyUpdateGR.update();
    }
  } else {
    // Action: Load all stories for display
    data.stories = [];
    var storyDisplayGR = new GlideRecord(myTableName);
    storyDisplayGR.query();
    
    while(storyDisplayGR.next()){
      var story = {};
      story.sys_id = storyDisplayGR.getUniqueValue();
      story.number = storyDisplayGR.getValue('number');
      story.short_description = storyDisplayGR.getValue('short_description');
      story.state = storyDisplayGR.getValue('state');
      data.stories.push(story);
    }
  }

})();
