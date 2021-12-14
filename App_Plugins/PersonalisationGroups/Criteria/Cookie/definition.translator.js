﻿angular.module("umbraco.services")
	.factory("PersonalisationGroups.CookieTranslatorService", function () {

	    var service = {
	        translate: function (definition) {
	            var translation = "";
	            if (definition) {
	                var selectedCookieDetails = JSON.parse(definition);
	                translation = "Cookie with key '" + selectedCookieDetails.key + "' ";
	                switch (selectedCookieDetails.match) {
	                    case "Exists":
	                        translation += "is present.";
	                        break;
	                    case "DoesNotExist":
	                        translation += "is absent.";
	                        break;
	                    case "MatchesValue":
	                        translation += "matches value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "ContainsValue":
	                        translation += "contains value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "GreaterThanValue":
	                        translation += "is greater than value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "GreaterThanOrEqualToValue":
	                        translation += "is greater than or equal to value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "LessThanValue":
	                        translation += "is less than value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "LessThanOrEqualToValue":
	                        translation += "is less than or equal to value '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "MatchesRegex":
	                        translation += "matches regular expression '" + selectedCookieDetails.value + "'.";
	                        break;
	                    case "DoesNotMatchRegex":
	                        translation += "does not match regular expression '" + selectedCookieDetails.value + "'.";
	                        break;
	                }
	            }

	            return translation;
	        }
	    };

	    return service;
	});