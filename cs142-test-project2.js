'use strict';

var cs142MakeMultiFilter;
var Cs142TemplateProcessor;


// Result message for Problems 1-3
var p1Message = 'SUCCESS';
var p2Message = 'SUCCESS';
var p3Message = 'SUCCESS';


var varDeclared = ['varDeclared', 'p1Message', 'p2Message', 'p3Message'];




if (typeof cs142MakeMultiFilter !== 'function') {
    console.error('cs142MakeMultiFilter is not a function', typeof cs142MakeMultiFilter);
    p1Message = 'FAILURE';
} else {

    var arraysAreTheSame = function arraysAreTheSame(a1, a2) {
        if (!Array.isArray(a1) || !Array.isArray(a2) || (a1.length !== a2.length)) {
            return false;
        }
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    };

    var originalArray = [1, 2, 3];
    var filterFunc = cs142MakeMultiFilter(originalArray);
    
    var secondArray = [1, 2, 3, 4];
    var filterFuncTwo = cs142MakeMultiFilter(secondArray);

    if (typeof filterFunc !== 'function') {
        console.error('cs142MakeMultiFilter does not return a function', filterFunc);
        p1Message = 'FAILURE';
    } else {
        var result = filterFunc();
        if (!arraysAreTheSame([1, 2, 3], result)) {
            console.error('filter function with no args does not return the original array' , result);
            p1Message = 'FAILURE';
        }

        var callbackPerformed = false;
        result = filterFunc(function (item) {
            return item !== 2;
        }, function (callbackResult) {
            callbackPerformed = true;
            if (!arraysAreTheSame([1, 3], callbackResult)) {
                console.error('filter function callback does not filter 2 correctly' , callbackResult);
                p1Message = 'FAILURE';
            }
            if (!arraysAreTheSame([1, 2, 3], this)) {
                console.error('filter function callback does not pass original array as this' , this);
                p1Message = 'FAILURE';
            }
        });

        if (!callbackPerformed) {
            console.error('filter function callback not performed');
            p1Message = 'FAILURE';
        }

        if (result !== filterFunc) {
            console.error('filter function does not return itself', result);
            p1Message = 'FAILURE';
        }

        result =  filterFunc(function (item) {
            return item !== 3;
        });
        if (result !== filterFunc) {
            console.error('filter function does not return itself 2', result);
            p1Message = 'FAILURE';
        }

        result =  filterFunc();
        if (!arraysAreTheSame([1],result)) {
            console.error('filter function callback does not filter 3 correctly' , result);
            p1Message = 'FAILURE';
        }
        result = filterFuncTwo(function (item) {
            return item !== 1;
        }, function (callbackResult) {
            if (!arraysAreTheSame([2, 3, 4], callbackResult)) {
                console.error('second filter does not filter 1 (check for global variable usage)' , callbackResult);
                p1Message = 'FAILURE';
            }
            if (!arraysAreTheSame([1, 2, 3, 4], this)) {
                console.error('filter function callback does not pass original array as this' , this);
                p1Message = 'FAILURE';
            }
        });

    }


}
console.log('Test cs142MakeMultiFilter:', p1Message);



if (typeof Cs142TemplateProcessor !== 'function') {
    console.error('Cs142TemplateProcessor is not a function', Cs142TemplateProcessor);
    p2Message = 'FAILURE';
} else {

    var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
    var dateTemplate = new Cs142TemplateProcessor(template);

    var dictionary = {month: 'July', day: '1', year: '2016'};
    var str = dateTemplate.fillIn(dictionary);

    if (str !== 'My favorite month 
    varDeclared.push('dictionary');is July but not the day 1 or the year 2016') {
        console.error('Cs142TemplateProcessor didn\'t work');
        p2Message = 'FAILURE';
    }
    varDeclared.push('template');
    varDeclared.push('dateTemplate');
    varDeclared.push('dictionary');
    varDeclared.push('str');
}
console.log('Test Cs142TemplateProcessor:', p2Message);



varDeclared.forEach(function (sym) {

    if (window[sym] !== undefined) {
        console.error('Found my symbol', sym, 'in DOM');
        p3Message = 'FAILURE';
    }
});
console.log('Test Problem 3:', p3Message);


window.cs142Project2Results = {
    p1Message: p1Message,
    p2Message: p2Message,
    p3Message: p3Message,
};

window.onload = function () {
    document.getElementById("cs142p1").innerHTML = p1Message;
    document.getElementById("cs142p2").innerHTML = p2Message;
    document.getElementById("cs142p3").innerHTML = p3Message;
};

func();
