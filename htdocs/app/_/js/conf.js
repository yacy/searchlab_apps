// Searchlab Apps Settings
//
// Modify these settings according to the location of your Searchlab or Yacy instance.
// Because Searchlab and YaCy ("YaCy P2p", "Legacy YaCy") have the same API endpoints (just at different paths)
// it is possible to run the Searchlab Apps also against a YaCy P2P instance.
// This applies also for YaCy Grid.

var host = "https://searchlab.eu/";
//var host = "http://localhost:8400/";

// the user must be overwritten with the current user
var user = "en";

// parse the location url to overwrite the user id
var path = window.location.pathname.split("/");
if (path.length > 2 && !isNaN(path[1])) user = path[1];

// ### Search API
// ## Searchlab Paths
var search_api = host + user + "/api/yacysearch.json";

// ## YaCy Grid Paths
//var search_api = "http://searchlab.eu/yacy/grid/mcp/index/yacysearch.json";

// ## YaCy P2P Paths
//var search_api = "http://localhost:8090/yacysearch.json";

// ### Index API
// ## Searchlab Paths
var index_api = host + user + "/api/index.json";

// Suggest API
// ## Searchlab Paths
var suggest_api = host + user + "/api/suggest.json";

// ## YaCy Grid Paths
//var suggest_api = "http://searchlab.eu/yacy/grid/mcp/index/suggest.json";

// ## YaCy P2P Paths
//var suggest_api = "http://localhost:8090/suggest.json";


