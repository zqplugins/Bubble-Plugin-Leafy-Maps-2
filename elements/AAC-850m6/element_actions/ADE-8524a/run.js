function(instance, properties, context) {

	//instance.data.mymap.stopLocate()
    // set state
    instance.publishState("is_being_tracked", false);

	console.log(instance.data.mymap.stopLocate())

}