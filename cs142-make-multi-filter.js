function cs142MakeMultiFilter(originalArray) {
	var currentArray = originalArray;
	function arrayFilter(filterCriteria, callback) {
		if(!filterCriteria) {
			return currentArray;
		}
		currentArray = currentArray.filter(filterCriteria);
		if(callback) {
			callback.call(originalArray, currentArray); // currentArray is the true paramenter passed into callback function
		}
		return arrayFilter;
	}
	return arrayFilter;
}


