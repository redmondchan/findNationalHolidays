let jsonResponse = {
  holidays: [
    {
      "name": "New Year's Day",
      "description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
      "date": {
        "iso": "2019-01-01",
        "datetime": {"year": 2019, "month": 1, "day": 1}
        },
      "type": ["National holiday"],
      "locations": "All",
      "states": "All"
    }, 
    {
      "name": "Martin Luther King Jr. Day",
      "description": "Martin Luther King Day marks the anniversary of the date of birth of the influential American civil right leader of the same name.",
      "date": {
        "iso": "2019-01-21",
        "datetime": { "year": 2019, "month": 1, "day": 21}
        },
      "type": ["National holiday", "Test"],
      "locations": "All",
      "states": "All"
    }, 
    {
      "name": "Fake Holiday",
      "description": "Fake holiday for testing purposes",
      "date": {
        "iso": "2019-01-02",
        "datetime": {"year": 2019,"month": 1,"day": 2}
        },
      "type": ["Fake holiday"],
      "locations": "All",
      "states": "All"
    },
    {
      "name": "Christmas Day",
      "description": "Christmas Day celebrates Jesus Christ's birth.",
      "date": {
        "iso": "2019-12-25",
        "datetime": {"year": 2019,"month": 12,"day": 25}
        },
      "type": ["National holiday", "Christian"],
      "locations": "All",
      "states": "All"
    }
  ]
}

console.log(jsonResponse)