var getRandomColor=function(){return(function(a,b,c){return(c?arguments.callee(a,b,c-1):'#')+b[a.floor(a.random()*16)]})(Math,'0123456789abcdef',5)};function showPoly(a){var b=new BMap.Map("allmap");b.centerAndZoom(new BMap.Point(114.253477,30.606323),13);b.enableScrollWheelZoom(true);a=JSON.parse(a);var d=a[0].split(',');for(c=0;c<a.length;c++){var i=a[c].split(',');var j=i[0];var k=i[1];a[c]=new BMap.Point(j,k)};for(c=0;c<a.length;c++){var i=new BMap.Marker(a[c]);b.addOverlay(i);var j="";if(c==0){j='起点 '}else if(c==(a.length-1)){j='终点 '}else{j='途经点 '};var k=new BMap.Label(j+(c+1),{offset:new BMap.Size(20,-10)});i.setLabel(k)};var e=Math.floor(a.length/11);var f=a.length%11;var g=new BMap.DrivingRoute(b,{onSearchComplete:function(i){if(g.getStatus()==BMAP_STATUS_SUCCESS){var j=g.getResults().getPlan(0);var k=j.getNumRoutes();for(var l=0;l<k;l++){var m=j.getRoute(l).getPath();var n=new BMap.Polyline(m);var o=getRandomColor();n.setStrokeColor(o);n.setStrokeWeight(10);b.addOverlay(n)}}}});for(var h=0;h<e;h++){var i=a.slice(h*11+1,(h+1)*11);g.search(a[h*11],a[(h+1)*11-1],{waypoints:i})};if(f!=0){var i=a.slice(e*11,a.length-1);g.search(a[e*11],a[a.length-1],{waypoints:i})}}