# Quick HashMap implementation and tests in JS

HashMap Implementation in the 'CustomHashMap.js' file. 

#### To create and use a CustomHashMap object instantiate it like any other js object:
	var hashMap = new CustomHashMap(30);

#### Examples of calling methods:
	hashMap.set("KPCB", "Kleiner Perkins Caufield Byers");
	hashMap.get("KPCB");
	hashMap.delete("KPCB");
	hashMap.load();

#### Testing
I've made some QUnit tests for easy validation of the CustomHashMap working. 
To view, simply open 'index.html' in a browser to see the QUnit tests running and passing. 
Actual test cases can be viewed in the 'tests.js' file.  