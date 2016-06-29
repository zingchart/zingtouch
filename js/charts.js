var color2 = "#5B6E8C";
var color1 = "#1EB8F3";
var color3 = "#94B4DB";
var pieConfig = {
 	type: "pie",
 	title: {
 	  text: "Pie",
 	  textAlign: "left",
 	  fontWeight: "normal",
 	  fontColor: "#5a5a5a",
 	  margin: "5"
 	},
 	scaleY: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	scaleX: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	plotarea: {
 	  margin: "10"
 	},
 	plot: {
 	  aspect: "spline",
 	  marker :{
 	    visible: false
	},
	valueBox: {
		fontSize: '10'
	}
 	},
	series : [
		{
      "values": [2],
			backgroundColor: color1
		},
		{
      "values": [3],
        lineColor: "#fdc23e",
			  backgroundColor: color2
		},
		{
      "values": [7],
        lineColor: "#ff7761",
			 backgroundColor: color3
		},
	]
};

zingchart.render({
	id : 'pieChart',
	data : pieConfig,
	height: 150,
	width: 200,
	hideprogresslogo: true
});

//////
//BAR
//////

var barConfig = {
 	type: "bar",
 	title: {
 	  text: "Column (Bar)",
 	  textAlign: "left",
 	  fontWeight: "normal",
 	  fontColor: "#5a5a5a",
 	  margin: "5"
 	},
 	scaleY: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	scaleX: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	plotarea: {
		margin: "50 30 30 30"
 	},
	series : [
		{
      "values": [5,2,3,3,2,3,2],
			 backgroundColor: color1
		},
		{
      "values": [4,3,2,3,3,2,1],
			  backgroundColor: color2
		},
	]
};

zingchart.render({
	id : 'barChart',
	data : barConfig,
	height: 150,
	width: 200,
	hideprogresslogo: true
});

//////////
//area
//////////
var areaConfig = {
 	type: "area",
 	title: {
 	  text: "Area",
 	  textAlign: "left",
 	  fontWeight: "normal",
 	  fontColor: "#5a5a5a",
 	  margin: "5"
 	},
 	scaleY: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	scaleX: {
 	  visible : true,
 	  lineColor : "#d6d6d6",
 	  guide: {
 	    lineColor: "#d6d6d6",
 	    lineStyle: "solid"
 	  },
 	  tick: {
 	    lineColor: "#d6d6d6"
 	  }
 	},
 	plotarea: {
 	  margin: "50 30 30 30"
 	},
 	plot: {
 	  aspect: "spline",
 	  marker :{
 	    visible: false
 	  }
 	},
	series : [
		{
      "values": [1,2,3,4,5,6,4],
      lineColor: color1,
			backgroundColor: color1
		},
		{
      "values": [2,3,2,3,3,2,1],
        lineColor: color2,
			  backgroundColor: color2
		}
	]
};

zingchart.render({
	id : 'areaChart',
	data : areaConfig,
	height: 150,
	width: 200,
	hideprogresslogo: true
});
