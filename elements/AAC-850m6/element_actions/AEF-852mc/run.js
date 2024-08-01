function(instance, properties, context) {



  let optionsObject = {
    stroke: properties.draw_stroke, // use stroke or not
    color: properties.stroke_color, // stroke color
    weight: properties.stroke_weight, // stroke width in pixels, default is 3
    opacity: properties.stroke_opacity, // default is 1.0
    fill: properties.circle_fill, // enable or disable filling
    fillColor: properties.fill_color, // color string
    fillOpacity: properties.fill_opacity, // default is 0.2
    radius: properties.radius, // number, in meters
  }

  instance.data[`${properties.circle_name}`] = L.circle([properties.latitude, properties.longitude], optionsObject).addTo(instance.data.mymap);

  instance.data[`${properties.circle_name}`].on('click', function () {
    instance.publishState("geometry_clicked_name", properties.circle_name)
  }); 


  // zoom the map to the polygon

  if (properties.zoom_to_this_circle) {

    instance.data.mymap.fitBounds(instance.data[`${properties.circle_name}`].getBounds());

  }


}