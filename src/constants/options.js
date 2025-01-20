export const SelectTravelsList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'A sole traveler in exploration',
      icon: '🚶',
      people: '1 Person',
    },
    {
      id: 2,
      title: 'A Couple',
      desc: 'Two travelers in tandem',
      icon: '💑',
      people: '2 People',
    },
    {
      id: 3,
      title: 'Family',
      desc: 'A group of fun-loving adventurers',
      icon: '👨‍👩‍👧‍👦',
      people: '3 to 5 People',
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '🫂',
        people: '4 to 8 People',
    }
];
  

export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Stay conscious of costs',
      icon: '💵',
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Keep costs on the average side',
      icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸',
    }
];


export const AI_PROMPT = `
Generate a Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget. 

Provide exactly 4 Hotel options, each with the following details:
1. Hotel Name
2. Hotel Address
3. Price (in USD)
4. Hotel Image URL
5. Geo Coordinates
6. Rating
7. Descriptions

Additionally, suggest an itinerary in JSON format for {totalDays} days. Each day should include 5-6 places to visit, spanning from morning to night. The itinerary structure must include:
- "day": a string in the format "Day 1", "Day 2", etc., and each day contains:
  - "plan": an array of locations, where each location contains:
    1. Place Name
    2. Place Details
    3. Place Image URL
    4. Geo Coordinates
    5. Ticket Pricing (in USD)
    6. Travel Time: The duration to travel to this location from the previous one, provided as clean numerical values in minutes or hours, e.g., "5 mins" or "0.5 hours". Do not include descriptive phrases like "from Paris Hotel".
    7. Best Time to Visit
    8. Time: formatted as "HH:MM AM/PM - HH:MM AM/PM".

### **IMPORTANT**:
- Ensure that all locations suggested are **currently open, operational, and not permanently closed**. Only include places verified to be active for travelers.
- Do not include outdated or closed locations.
- Provide consistency, proper formatting, and inclusion of all specified details.
-The output must strictly adhere to the structure shown in the prompt, where square brackets [ ] are used for arrays and curly braces { } are used for objects, without deviation.

Example format:
{
  "itinerary": [
    {
      "day": "Day 1",
      "plan": [
        {
          "placeName": "Place 1",
          "placeDetails": "Details of Place 1",
          "placeImageUrl": "image1.jpg",
          "geoCoordinates": "25.276987, 55.296249",
          "ticketPricing": 20,
          "travelTime": "15 mins",
          "bestTimeToVisit": "Morning",
          "time": "09:00 AM - 11:00 AM"
        },
        {
          "placeName": "Place 2",
          "placeDetails": "Details of Place 2",
          "placeImageUrl": "image2.jpg",
          "geoCoordinates": "25.276987, 55.296249",
          "ticketPricing": 15,
          "travelTime": "10 mins",
          "bestTimeToVisit": "Mid-Morning",
          "time": "11:15 AM - 12:30 PM"
        },
        {
          "placeName": "Place 3",
          "placeDetails": "Details of Place 3",
          "placeImageUrl": "image3.jpg",
          "geoCoordinates": "25.204849, 55.270783",
          "ticketPricing": 30,
          "travelTime": "20 mins",
          "bestTimeToVisit": "Afternoon",
          "time": "01:00 PM - 02:30 PM"
        },
        {
          "placeName": "Place 4",
          "placeDetails": "Details of Place 4",
          "placeImageUrl": "image4.jpg",
          "geoCoordinates": "25.276987, 55.296249",
          "ticketPricing": 0,
          "travelTime": "10 mins",
          "bestTimeToVisit": "Evening",
          "time": "03:00 PM - 04:30 PM"
        },
        {
          "placeName": "Place 5",
          "placeDetails": "Details of Place 5",
          "placeImageUrl": "image5.jpg",
          "geoCoordinates": "25.204849, 55.270783",
          "ticketPricing": 20,
          "travelTime": "15 mins",
          "bestTimeToVisit": "Night",
          "time": "07:00 PM - 09:00 PM"
        },
        {
          "placeName": "Place 6",
          "placeDetails": "Details of Place 6",
          "placeImageUrl": "image6.jpg",
          "geoCoordinates": "25.204849, 55.270783",
          "ticketPricing": 10,
          "travelTime": "10 mins",
          "bestTimeToVisit": "Late Night",
          "time": "09:15 PM - 10:30 PM"
        }
      ]
    }
  ]
}

Ensure consistency, proper formatting, and inclusion of all specified details. The output should provide accurate data tailored for the input parameters.
`;
