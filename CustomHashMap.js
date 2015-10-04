/**
 * Construct a new CustomHashMap.
 * 
 * Returns an instance of the class with pre-allocated 
 * space for the given number of objects.
 * @constructor
 * @throws error on invalid inputs
 */
function CustomHashMap(size) {

	// input sanity check
	if (isNaN(size))
		throw "INVALID PARAMETER: " + size + " is NaN";
	else if (size < 1)
		throw "INVALID PARAMETER: " + size + " must be greater then 0";

	var buckets = [];
	var length = size;
	var totalItems = 0;

	/** REQUIRED METHODS **/

    /**
     * Stores the given key/value pair in the hash map. 
     * Returns a boolean value indicating success / failure of the operation.
     */
	this.set = function(key, value) {
		if (!validateInput(key)) {
			throw "INVALID PARAMETER: " + key + " is not of type \"string\"";
		} 

		var i = hashCode(key);
		var bucket = buckets[i];

		// bucket undefined, initialize to a resizable array
		if (bucket == null) { 
			bucket = [];
			bucket.length = 0;

			// success if new bucket length is greater then before
			var success = bucket.length < bucket.push([key, value]);
			buckets[i] = bucket; // re-assign because bucket reference changed
			totalItems++;

			return success;
		} 

		// try to find a previous value and replace it
		else {
			for (var j = 0; j < bucket.length; j++) {
				// found pre-existing value for key
				if (bucket[j][0] == key) {
					bucket[j][1] = value;
					return true;
				}
			}

			// key not found in the bucket, add it as a tuple
			totalItems++;
			return buckets[i].length < buckets[i].push([key, value]);
		}

		return false;
	};

    /**
     * Return the value associated with the given key, 
     * or null if no value is set.
     */
    this.get = function(key) {
		if (!validateInput(key)) {
			throw "INVALID PARAMETER: " + key + " is not of type \"string\"";
		} 

 		var i = hashCode(key);

 		for (j in buckets[i]) { 
 			if (buckets[i][j][0] == key)
 				return buckets[i][j][1];
 		}

		return null;
	};

    /**
     * Delete the value associated with the given key, 
     * returning the value on success or null if the key has no value.
     */
	this.delete = function(key) {
		if (!validateInput(key)) {
			throw "INVALID PARAMETER: " + key + " is not of type \"string\"";
		} 

		var i = hashCode(key);

		for (j in buckets[i]) {
 			if (buckets[i][j][0] == key) {
 				console.log("buckets[i][j] = " + buckets[i][j]);
 				totalItems--;
 				return buckets[i][j].splice(0)[1];
 			}
 		}

 		return null;
	};

    /**
     * Return a float value representing the load factor 
     * (`(items in hash map)/(size of hash map)`) of the data structure. 
     * Since the size of the dat structure is fixed, 
     * this should never be greater than 1.
     */
    this.load = function() {
		return totalItems / length; 
	};

	/** END REQUIRED METHODS **/


	/** HELPER FUNCTIONS **/

	// basic hashing function

	/**
     * Return an hashed index based on the given key.
     */
	var hashCode = function(key) {
		var sum = 0;

		// sum all char values of key
		for (var i = 0; i < key.length; i++) {
			sum += key[i].charCodeAt();
		}

		return sum % length;  
	};

	/**
     * Checks that a key is of type string.
     */
	var validateInput = function(key) {
		return typeof key == "string";
	};
	/** END HELPER FUNCTIONS **/

}
