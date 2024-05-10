BASE_URI: required -> mongoose db to connect to
PORT: not required -> default 8080
JWT_PRIVATE_KEY: required -> random encryption key
USAGE:
npm i
npm run dev


http://localhost:8080/register METHOD: POST, REQUIRE: "username", "password", "confirmPassword" ON BODY
http://localhost:8080/login METHOD : POST, REQUIRE: "username", "password" ON BODY
http://localhost:8080/logout METHOD: POST, REQUIRE: TOKEN



http://localhost:8080/user/profile/get  METHOD: GET, REQUIRE: TOKEN
http://localhost:8080/user/profile/create  METHOD: POST, REQUIRE: TOKEN
http://localhost:8080/user/profile/update  METHOD: PUT, REQUIRE: TOKEN
http://localhost:8080/user/profile/delete  METHOD: DELETE, REQUIRE: TOKEN
example of body:


{
  "firstName": "Thuy",
  "lastName": "Nguyen",
  "dateOfBirth": "1999-10-14",
  "placeOfBirth": "Ha Noi",
  "nationality": "Viet Nam",
  "education": [{
    "institution": "Ha Noi University",
    "degree": "PhD",
    "startDate": "2018-9-28",
    "endDate": "2024-5-9"
  }
  ],
  "skills": [
      "clown",
      "talk",
      "sleep"
    ],
    "projects": [{
      "name": "smart light",
      "description": "light that turn on and off based on environment light",
      "role": "head engineer",
      "startDate": "2024-3-14",
      "endDate": "2024-3-30"
    }],
    "workHistory": [
        {
          "company": "Mind your business",
          "role": "janitor",
          "startDate": "2021-9-21",
          "endDate": "2021-9-22"
        }
      ],
    "hobbies": [
        "cycling",
        "football",
        "weapons"
      ],
      "goals": [
          "Get a job",
          "Get married",
          "Get citizenship in Switzerland"
        ]
}

có thể có bug ẩn, đã cố gắng lắm rồi (⋟﹏⋞)