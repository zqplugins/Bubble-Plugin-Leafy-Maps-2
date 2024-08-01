function(instance, properties, context) {
    // Check if the map and util object are initialized
    if (instance.data.map && instance.data.util && instance.data.util.addControl) {
        // Call the addControl method
        instance.data.util.addControl();
        
    } else {
        console.error('Map or util object not initialized');
        
    }
}