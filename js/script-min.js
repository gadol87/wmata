var WMATA={ll:[],currentLines:[],stations:{Stations:[{Code:"A03",Lat:38.9095980575,Lon:-77.0434143597,Name:"Dupont Circle"},{Code:"A02",Lat:38.9032019462,Lon:-77.0397008272,Name:"Farragut North"},{Code:"A01",Lat:38.8983144732,Lon:-77.0280779971,Name:"Metro Center",StationTogether1:"C01"},{Code:"A07",Lat:38.9488514351,Lon:-77.0795873255,Name:"Tenleytown"},{Code:"A06",Lat:38.9432652883,Lon:-77.0629861805,Name:"Van Ness UDC"},{Code:"A05",Lat:38.9347628908,Lon:-77.0580425191,Name:"Cleveland Park"},{Code:"A04",Lat:38.9250851371,Lon:-77.0524180207,Name:"Woodley Park Zoo"},{Code:"B02",Lat:38.8960903176,Lon:-77.0166389566,Name:"Judiciary Square"},{Code:"C10",Lat:38.8534163859,Lon:-77.0440422943,Name:"National Arpt"},{Code:"E10",Lat:39.0111458605,Lon:-76.9110575731,Name:"Greenbelt"},{Code:"D08",Lat:38.8867090898,Lon:-76.9770889014,Name:"Stadium Armory"},{Code:"B08",Lat:38.9939493747,Lon:-77.0310178268,Name:"Silver Spring"},{Code:"B09",Lat:39.0149542752,Lon:-77.0429165548,Name:"Forest Glen"},{Code:"D09",Lat:38.899191223,Lon:-76.9467477336,Name:"Minnesota Avenue"},{Code:"D06",Lat:38.8846222608,Lon:-76.9960011267,Name:"Eastern Market"},{Code:"D07",Lat:38.8812632736,Lon:-76.9854953196,Name:"Potomac Avenue"},{Code:"D04",Lat:38.8850723551,Lon:-77.0158682169,Name:"Federal Center SW"},{Code:"D05",Lat:38.8850625009,Lon:-77.0051394199,Name:"Capitol South"},{Code:"D02",Lat:38.888018702,Lon:-77.0280662342,Name:"Smithsonian"},{Code:"D03",Lat:38.8848377279,Lon:-77.021908484,Name:"L'Enfant Plaza",StationTogether1:"F03"},{Code:"B01",Lat:38.8983168097,Lon:-77.0219153904,Name:"Gallery Place",StationTogether1:"F01"},{Code:"D01",Lat:38.8931808718,Lon:-77.0281319984,Name:"Federal Triangle"},{Code:"B03",Lat:38.8977660392,Lon:-77.0074142921,Name:"Union Station"},{Code:"B04",Lat:38.9210596891,Lon:-76.9959369166,Name:"Rhode Island Avenue"},{Code:"B05",Lat:38.9332109913,Lon:-76.9945342851,Name:"Brookland"},{Code:"B06",Lat:38.9518467675,Lon:-77.0022030768,Name:"Fort Totten",StationTogether1:"E06"},{Code:"B07",Lat:38.976078531,Lon:-77.0181766987,Name:"Takoma"},{Code:"K03",Lat:38.8833661518,Lon:-77.1029772942,Name:"Virginia Square"},{Code:"K05",Lat:38.8859531663,Lon:-77.1568830199,Name:"E Falls Church"},{Code:"K04",Lat:38.8821828738,Lon:-77.113168835,Name:"Ballston"},{Code:"F11",Lat:38.8264463483,Lon:-76.9114642177,Name:"Branch Avenue"},{Code:"F10",Lat:38.8439645544,Lon:-76.9318701589,Name:"Suitland"},{Code:"D12",Lat:38.9335062344,Lon:-76.8911979676,Name:"Landover"},{Code:"G05",Lat:38.9050688072,Lon:-76.8420375202,Name:"Largo Town Center"},{Code:"G04",Lat:38.8938349282,Lon:-76.8680747681,Name:"Morgan Blvd"},{Code:"K01",Lat:38.8901755312,Lon:-77.087131231,Name:"Court House"},{Code:"G01",Lat:38.890975676,Lon:-76.9383648681,Name:"Benning Road"},{Code:"K02",Lat:38.886704839,Lon:-77.0953940983,Name:"Clarendon"},{Code:"G03",Lat:38.8867478168,Lon:-76.89410791,Name:"Addison Road"},{Code:"G02",Lat:38.8894658568,Lon:-76.9118081145,Name:"Capitol Heights"},{Code:"K07",Lat:38.8836251359,Lon:-77.2271606721,Name:"Dunn Loring"},{Code:"K06",Lat:38.900780551,Lon:-77.1890948225,Name:"W Falls Church"},{Code:"K08",Lat:38.8776011238,Lon:-77.2726222569,Name:"Vienna"},{Code:"A13",Lat:39.0624676517,Lon:-77.1208179517,Name:"Twinbrook"},{Code:"A12",Lat:39.0481513573,Lon:-77.112829859,Name:"White Flint"},{Code:"A11",Lat:39.02926895,Lon:-77.10384972,Name:"Grosvenor"},{Code:"A10",Lat:39.0000564843,Lon:-77.0969522905,Name:"Medical Center"},{Code:"C15",Lat:38.7939158529,Lon:-77.0752057891,Name:"Huntington"},{Code:"C14",Lat:38.8004254497,Lon:-77.0708743893,Name:"Eisenhower Avenue"},{Code:"A15",Lat:39.1199273249,Lon:-77.1646273343,Name:"Shady Grove"},{Code:"A14",Lat:39.0843216075,Lon:-77.1461253392,Name:"Rockville"},{Code:"B35",Lat:38.9070162121,Lon:-77.0030204472,Name:"New York Avenue"},{Code:"C07",Lat:38.8694627012,Lon:-77.0537156734,Name:"Pentagon"},{Code:"C09",Lat:38.8579043204,Lon:-77.0502898097,Name:"Crystal City"},{Code:"C08",Lat:38.8618823867,Lon:-77.0595389215,Name:"Pentagon City"},{Code:"E08",Lat:38.9653854458,Lon:-76.9558815078,Name:"Prince Georges Plaza"},{Code:"E07",Lat:38.9550401707,Lon:-76.9695766751,Name:"West Hyattsville"},{Code:"E06",Lat:38.9518467675,Lon:-77.0022030768,Name:"Fort Totten",StationTogether1:"B06"},{Code:"E05",Lat:38.9374346301,Lon:-77.023460904,Name:"Georgia Avenue"},{Code:"E04",Lat:38.9278379675,Lon:-77.0325521177,Name:"Columbia Heights"},{Code:"E03",Lat:38.9170023992,Lon:-77.0274958929,Name:"U Street"},{Code:"C01",Lat:38.8983144732,Lon:-77.0280779971,Name:"Metro Center",StationTogether1:"A01"},{Code:"E01",Lat:38.9064368149,Lon:-77.0219143803,Name:"Mt Vernon Sq"},{Code:"C03",Lat:38.9013128941,Lon:-77.0406954151,Name:"Farragut West"},{Code:"C02",Lat:38.9013327968,Lon:-77.0336341721,Name:"McPherson Square"},{Code:"C05",Lat:38.8959790962,Lon:-77.0709086853,Name:"Rosslyn"},{Code:"C04",Lat:38.9006980092,Lon:-77.050277739,Name:"Foggy Bottom"},{Code:"E02",Lat:38.9134768711,Lon:-77.0219117007,Name:"Shaw"},{Code:"C06",Lat:38.8846868585,Lon:-77.0628101291,Name:"Arlington Cemetery"},{Code:"E09",Lat:38.9786336339,Lon:-76.9281249818,Name:"College Park"},{Code:"J03",Lat:38.7665218926,Lon:-77.1679701804,Name:"Franconia-Springf'ld"},{Code:"C13",Lat:38.8065861172,Lon:-77.0608112085,Name:"King Street"},{Code:"C12",Lat:38.8141436672,Lon:-77.053667574,Name:"Braddock Road"},{Code:"F08",Lat:38.8410857803,Lon:-76.9750541388,Name:"Southern Ave"},{Code:"F09",Lat:38.8513013835,Lon:-76.9562627094,Name:"Naylor Road"},{Code:"F04",Lat:38.8764618668,Lon:-77.0175052088,Name:"Waterfront"},{Code:"F05",Lat:38.8764810849,Lon:-77.0050856513,Name:"Navy Yard"},{Code:"F06",Lat:38.8629631168,Lon:-76.9953707387,Name:"Anacostia"},{Code:"F07",Lat:38.8456577028,Lon:-76.9885119326,Name:"Congress Height"},{Code:"J02",Lat:38.799307672,Lon:-77.1291115237,Name:"Van Dorn St"},{Code:"F01",Lat:38.8983168097,Lon:-77.0219153904,Name:"Gallery Place",StationTogether1:"B01"},{Code:"F02",Lat:38.8936652235,Lon:-77.0219143879,Name:"Archives"},{Code:"F03",Lat:38.8848377279,Lon:-77.021908484,Name:"L'Enfant Plaza",StationTogether1:"D03"},{Code:"B10",Lat:39.0375271436,Lon:-77.0501070535,Name:"Wheaton"},{Code:"B11",Lat:39.0617837655,Lon:-77.0535573593,Name:"Glenmont"},{Code:"A09",Lat:38.9843936603,Lon:-77.0941291922,Name:"Bethesda"},{Code:"A08",Lat:38.9594838736,Lon:-77.084995805,Name:"Friendship Heights"},{Code:"D13",Lat:38.9477848558,Lon:-76.8718412865,Name:"New Carrollton"},{Code:"D10",Lat:38.9081784965,Lon:-76.935256783,Name:"Deanwood"},{Code:"D11",Lat:38.9166318546,Lon:-76.916628044,Name:"Cheverly"}]},lines:{Lines:[{DisplayName:"Red",EndStationCode:"B11",InternalDestination1:"A11",InternalDestination2:"B08",LineCode:"RD",StartStationCode:"A15"},{DisplayName:"Orange",EndStationCode:"D13",InternalDestination1:"",InternalDestination2:"",LineCode:"OR",StartStationCode:"K08"},{DisplayName:"Green",EndStationCode:"E10",InternalDestination1:"",InternalDestination2:"",LineCode:"GR",StartStationCode:"F11"},{DisplayName:"Yellow",EndStationCode:"E06",InternalDestination1:"E01",InternalDestination2:"",LineCode:"YL",StartStationCode:"C15"},{DisplayName:"Blue",EndStationCode:"G05",InternalDestination1:"",InternalDestination2:"",LineCode:"BL",StartStationCode:"J03"}]},getPosition:function(){"use strict";function e(e){WMATA.ll=[e.coords.latitude,e.coords.longitude],void 0===WMATA.trains?(WMATA.computeNearestStation(),WMATA.gotLines()):WMATA.getTrains()}window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition(e,function(){alert("This device requires geolocation")}):window.alert("This device does not allow geolocation")},gotStations:function(){"use strict";WMATA.computeNearestStation(),WMATA.gotLines()},getTrains:function(){"use strict";WMATA.pureAjax("http://api.wmata.com/StationPrediction.svc/json/GetPrediction/"+WMATA.closestStation+"?api_key="+WMATA.key+"&callback=WMATA.gotTrains")},gotTrains:function(e){"use strict";WMATA.trains=e,WMATA.displayResults(e)},gotLines:function(){"use strict";WMATA.getTrains(),void 0===WMATA.alerts&&WMATA.getAlerts()},getAlerts:function(){"use strict";WMATA.pureAjax("http://api.wmata.com/Incidents.svc/json/Incidents?api_key="+WMATA.key+"&callback=WMATA.gotAlerts")},gotAlerts:function(e){"use strict";WMATA.alerts=e,WMATA.displayAlerts()},displayAlerts:function(){"use strict";var e,t,o=window.document.getElementById("alerts");for(window.document.getElementsByClassName("alert").length>0&&(o.innerHTML=""),t=0;WMATA.alerts.Incidents.length>t;t+=1)e=window.document.createElement("p"),e.appendChild(window.document.createTextNode(WMATA.alerts.Incidents[t].Description)),e.className="alert alert"+WMATA.alerts.Incidents[t].LinesAffected.substr(0,2),o.appendChild(e)},computeNearestStation:function(){"use strict";var e,t,o,n,a,i,d,s,r,L,l=[-1,2e4],C=window.document.getElementById("station"),m=6371;for(L=0;WMATA.stations.Stations.length>L;L+=1)e=WMATA.ll[0],o=WMATA.stations.Stations[L].Lat,t=WMATA.ll[1],n=WMATA.stations.Stations[L].Lon,a=(o-e)*Math.PI/180,i=(n-t)*Math.PI/180,e=e*Math.PI/180,o=o*Math.PI/180,d=Math.sin(a/2)*Math.sin(a/2)+Math.sin(i/2)*Math.sin(i/2)*Math.cos(e)*Math.cos(o),s=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),r=m*s,l[1]>r&&(l=[L,r]);WMATA.closestStation=WMATA.stations.Stations[l[0]].Code,window.document.title="WMATA "+WMATA.stations.Stations[l[0]].Name+" Station",C.innerText=WMATA.stations.Stations[l[0]].Name,C.textContent=WMATA.stations.Stations[l[0]].Name,""!==WMATA.stations.Stations[l[0]].StationTogether1&&void 0!==WMATA.stations.Stations[l[0]].StationTogether1&&(WMATA.closestStation=WMATA.closestStation+","+WMATA.stations.Stations[l[0]].StationTogether1)},displayResults:function(e){"use strict";var t,o,n,a,i,d,s=window.document.getElementById("schedule"),r=["Line","DestinationName","Min"],L=window.document.createElement("table"),l=window.document.createElement("thead"),C=window.document.createElement("tbody"),m='<tr><th class="th1">LINE</th><th class="th2">DESTINATION</th><th class="th3">MIN</th></tr>',A=[];for(null!==window.document.getElementById("table1")&&s.removeChild(window.document.getElementById("table1")),WMATA.trains=e,l.id="thead1",l.innerHTML=m,L.id="table1",L.appendChild(l),n=0;e.Trains.length>n;n+=1){for(i=0;WMATA.lines.Lines.length>i;i+=1)WMATA.lines.Lines[i].LineCode===WMATA.trains.Trains[n].Line&&-1===A.indexOf(WMATA.lines.Lines[i].StartStationCode)&&A.push(WMATA.lines.Lines[i].StartStationCode);for(d=-1===A.indexOf(WMATA.trains.Trains[n].DestinationCode),t=window.document.createElement("tr"),a=0;r.length>a;a+=1)o=window.document.createElement("td"),o.appendChild(window.document.createTextNode(e.Trains[n][r[a]].toUpperCase())),o.className="cell"+(a+1),t.appendChild(o);null!==e.Trains[n].DestinationCode&&C.appendChild(t)}L.appendChild(C),s.appendChild(L),WMATA.rainbowify(),window.setTimeout(function(){WMATA.getPosition()},15e3)},rainbowify:function(){"use strict";var e,t=0,o=0,n=window.document.getElementById("table1"),a=window.document.getElementsByClassName("cell1");for(t=1;n.rows.length>t;t+=1)e=n.rows[t],e.className="row row"+t;for(o=0;a.length>o;o+=1)a[o].id=void 0!==a[o].innerText?a[o].innerText:a[o].textContent;void 0===WMATA.rainbow&&(/mobile/i.test(navigator.userAgent)&&setTimeout(function(){window.scrollTo(0,1)},200),WMATA.rainbow="unicorn")},pureAjax:function(e){"use strict";var t=window.document.createElement("script");t.src=e,t.async=!0,window.document.body.appendChild(t)},key:"e8apbxn8jucqbk7bvv2wn2qm"};(function(){"use strict";WMATA.getPosition()})();