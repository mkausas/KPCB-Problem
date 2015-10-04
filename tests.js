// Unit tests created using QUnit { http://qunitjs.com }

// contructor tests
QUnit.test("CustomHashMap(size)", function( assert ) {


	assert.equal(typeof (hashMap = new CustomHashMap(30)), 
		"object", 
		"new CustomHashMap(30): succesfully created a new CustomHashMap with correct constructor input");

  // test bad parameter
  assert.throws(
  	function() {
  		new CustomHashMap("xyz");
  	}, 
  	"INVALID PARAMETER: xyz is NaN",
  	"new CustomHashMap(\"xyz\"): invalid construtor parameter detected");

  // test bad parameter
  assert.throws(
  	function() {
  		new CustomHashMap(-1);
  	}, 
  	"INVALID PARAMETER: -1 must be greater then 0",
  	"new CustomHashMap(-1): invalid construtor parameter detected");

});

// set tests
QUnit.test("CustomHashMap.set(key, value)", function( assert ) {
	var hashMap = new CustomHashMap(30);

	assert.ok(hashMap.set("Build for", "Good"), "hashMap.set(\"Build for\", \"Good\")");
	assert.ok(hashMap.set("for Build", "Switched"), "hashMap.set(\"for Build\", \"Switched\"): same hash value key");
	
	assert.ok(hashMap.set("tres commas", 1000000000), "hashMap.set(\"tres commas\", 1000000000)");
	assert.ok(hashMap.set("tres commas", "1,000,000,000"), "hashMap.set(\"tres commas\", \"1,000,000,000\"): same key");


	// test bad parameter
	assert.throws(
		function() {
			hashMap.set(3, "xyz");
		}, 
		"INVALID PARAMETER: 3 is not of type \"string\"",
		"hashMap.set(3, \"xyz\"): invalid parameter detected");
});

// get tests
QUnit.test("CustomHashMap.get(key)", function( assert ) {
	var hashMap = new CustomHashMap(30);
	hashMap.set("Build for", "Good");
	hashMap.set("for Build", "Switched");
	hashMap.set("tres commas", 1000000000);
	hashMap.set("tres commas", "1,000,000,000");

	assert.equal(hashMap.get("Build for"), "Good", "hashMap.get(\"Build for\") -> \"Good\"");
	assert.equal(hashMap.get("for Build"), "Switched", "hashMap.get(\"for Build\") -> \"Switched\": same hash value key as \"Build For\"");
	
	assert.equal(hashMap.get("tres commas"), "1,000,000,000", "hashMap.get(\"tres commas\") -> 1,000,000,000");


	// test bad parameter
	assert.throws(
		function() {
			hashMap.set(3);
		}, 
		"INVALID PARAMETER: 3 is not of type \"string\"",
		"hashMap.get(3): invalid parameter detected");
});


// delete tests
QUnit.test("CustomHashMap.delete(key)", function( assert ) {
	var hashMap = new CustomHashMap(30);
	hashMap.set("Build for", "Good");
	hashMap.set("for Build", "Switched");
	hashMap.set("tres commas", 1000000000);
	hashMap.set("tres commas", "1,000,000,000");

	assert.equal(hashMap.delete("Build for"), "Good", "hashMap.delete(\"Build for\") -> \"Good\"");
	assert.equal(hashMap.delete("for Build"), "Switched", "hashMap.delete(\"for Build\") -> \"Switched\": same hash value key as \"Build For\"");
	
	assert.equal(hashMap.delete("tres commas"), "1,000,000,000", "hashMap.delete(\"tres commas\") -> 1,000,000,000");
	assert.equal(hashMap.delete("tres commas"), null, "hashMap.delete(\"tres commas\") -> null");

	// test bad parameter
	assert.throws(
		function() {
			hashMap.delete(3);
		}, 
		"INVALID PARAMETER: 3 is not of type \"string\"",
		"hashMap.delete(3): invalid parameter detected");
});


// load tests
QUnit.test("CustomHashMap.load()", function( assert ) {
	var hashMap = new CustomHashMap(30);
	assert.equal(hashMap.load(), 0, "hashMap.load() (0 items in hashMap of size 30) -> 0");

	hashMap.set("1", "for the money");
	assert.equal(hashMap.load(), 1/30, "hashMap.load() (1 item in hashMap of size 30) -> " + (1/30));

	hashMap.set("2", "for the show");
	hashMap.set("3", "to get ready");
	hashMap.set("4", "to get ready");
	hashMap.set("5", "to get ready");
	hashMap.set("6", "to get ready");
	hashMap.set("7", "to get ready");
	hashMap.set("8", "to get ready");
	hashMap.set("9", "to get ready");
	hashMap.set("10", "to get ready");
	hashMap.set("11", "to get ready");
	hashMap.set("12", "to get ready");
	hashMap.set("13", "to get ready");
	hashMap.set("14", "to get ready");
	hashMap.set("15", "to get ready");
	assert.equal(hashMap.load(), 15/30, "hashMap.load() (15 items in hashMap of size 30) -> " + (15/30));

	hashMap.set("15", "duplicate value!");
	assert.equal(hashMap.load(), 15/30, "hashMap.load() inserted duplicate value: (15 items in hashMap of size 30) -> " + (15/30));
});